import axios, { AxiosResponse } from 'axios';
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { QuestOfferTakeRequest } from '../types/offerTypes';
import {
  QUEST_OFFER_TAKE_REQUEST,
  questOfferTake,
  offerFailure,
} from '../actions/offerActions';

function* questOfferSelectSaga(action: QuestOfferTakeRequest) {
  try {
    const saveOffer = () => axios.post('http://localhost:5000/offers/questOffer/save', {
      params: { ...action.payload }
    });
    const response: AxiosResponse<string> = yield call(saveOffer);

    yield put(questOfferTake());
  } catch (e: any) {
    yield put(
      offerFailure({
        error: e.message,
      }),
    );
  }
}

function* offerSagas() {
  yield all([takeLatest(QUEST_OFFER_TAKE_REQUEST, questOfferSelectSaga)]);
}

export default offerSagas;