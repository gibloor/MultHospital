import { all, put, call, takeEvery } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'

import {
  ADMIN_INFO_TAKE_REQUIRE,
  ADMIN_MULTFILMS_SAVE_REQUIRE,

  adminInfoTake,
  adminMultfilmsSave,
  adminInfoFailure,
} from '../actions/adminInfoActions'
import { AdminInfo, AdminMultfilmsSaveRequire } from '../types/adminInfoTypes'

import { DOMAIN } from './rootSaga'

const MODER_PERMISSION = 2
const OWNER_PERMISSION = 5

function* adminInfoTakeSaga() {
  try {
    const token = localStorage.getItem('token') || ''
    const headers = {authorization: `Bearer ${token}`}
    
    const takeInfo = () => axios.post(`${DOMAIN}/admin/takeInfo`,
      { permission: MODER_PERMISSION }, { headers: headers }
    )

    const response: AxiosResponse<AdminInfo> = yield call(takeInfo)
    
    yield put(adminInfoTake({
      ...response.data
    }))
  } catch (e: any) {
    yield put(
      adminInfoFailure({
        error: e.message,
      }),
    )
  }
}

function* adminMultfilmsSaveSaga(action: AdminMultfilmsSaveRequire) {
  try {
    const { multfilms } = action.payload
    const token = localStorage.getItem('token') || ''
    const headers = {authorization: `Bearer ${token}`}
    
    // const saveMultfilms = () => axios.post(`${DOMAIN}/admin/saveMultfilms`,
    //   { permission: OWNER_PERMISSION, multfilms }, { headers: headers }
    // )

    // yield call(saveMultfilms)
    
    yield put(adminMultfilmsSave({
      multfilms
    }))
  } catch (e: any) {
    yield put(
      adminInfoFailure({
        error: e.message,
      }),
    )
  }
}

function* adminInfoSagas() {
  yield all([
    takeEvery(ADMIN_INFO_TAKE_REQUIRE, adminInfoTakeSaga),
    takeEvery(ADMIN_MULTFILMS_SAVE_REQUIRE, adminMultfilmsSaveSaga),
  ])
}

export default adminInfoSagas