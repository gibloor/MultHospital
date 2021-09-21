import {
  all,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  USER_DEAUTH,
  userAuthFailure,
  USER_REQUARE,
  userAuth,
} from '../actions/userActions';
import { UserAuth } from '../types/userTypes';

function* authSaga(action: UserAuth) {
  try {
    console.log(action.payload);
    yield put(userAuth(action.payload));
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}

function* deuthSaga() {
  try {
    console.log('you deauthorizated');
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}
/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* accountSagas() {
  yield all([takeLatest(USER_REQUARE, authSaga), takeEvery(USER_DEAUTH, deuthSaga)]);
}

export default accountSagas;