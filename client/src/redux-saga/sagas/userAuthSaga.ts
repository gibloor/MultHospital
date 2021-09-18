import { all, put, takeEvery } from "redux-saga/effects";
import { USER_AUTH,
         USER_DEAUTH,
         userAuthFailure,
       } from "../actions/userActions";

function* authSaga() {
  try {
    console.log('you authorizated')
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      })
    );
  }
}

function* deuthSaga() {
  try {
    console.log('you deauthorizated')
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* accountSagas() {
  yield all([takeEvery(USER_AUTH, authSaga), takeEvery(USER_DEAUTH, deuthSaga)]);
}

export default accountSagas;