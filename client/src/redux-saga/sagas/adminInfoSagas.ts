import {
  all,
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import {
  ADMIN_INFO_TAKE_REQUIRE,

  adminInfoTake,
  adminInfoFailure,
} from '../actions/adminInfoActions';
import {
  AdminInfo,
} from '../types/adminInfoTypes'
import axios, { AxiosResponse } from 'axios';

function* adminInfoTakeSaga() {
  try {
    const token = localStorage.getItem('token') || '';
    const headers = {authorization: `Bearer ${token}`};
    
    const takeInfo = () => axios.post('http://localhost:5000/admin/takeInfo', {permission: 2},
    { headers: headers });

    const response: AxiosResponse<AdminInfo> = yield call(takeInfo);
    
    yield put(adminInfoTake({
      ...response.data
    }));
  } catch (e: any) {
    yield put(
      adminInfoFailure({
        error: e.message,
      }),
    );
  }
}

function* adminInfoSagas() {
  yield all([
    takeEvery(ADMIN_INFO_TAKE_REQUIRE, adminInfoTakeSaga)
  ]);
}

export default adminInfoSagas;