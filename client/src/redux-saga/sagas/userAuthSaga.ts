import { all, put, takeEvery } from "redux-saga/effects";
import { USER_AUTH,
         userAuthRequest,
         userAuthFailure,
       } from "../actions/userActions";

function* accountSaga() {
  try {
    yield put(userAuthRequest());
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
  yield all([takeEvery(USER_AUTH, accountSaga)]);
}

export default accountSagas;