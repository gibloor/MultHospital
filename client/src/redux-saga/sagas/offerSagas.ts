import axios from 'axios'
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'
import { QuestOfferTakeRequest } from '../types/offerTypes'
import {
  QUEST_OFFER_TAKE_REQUEST,
  MULT_OFFER_TAKE_REQUEST,

  multOfferTake,
  questOfferTake,
  
  offerFailure,
} from '../actions/offerActions'

import { DOMAIN } from './rootSaga'

function* questOfferSelectSaga(action: QuestOfferTakeRequest) {
  try {
    const saveOffer = () => axios.post(`${DOMAIN}/offers/questOffer/save`, {
      params: { ...action.payload }
    })

    yield call(saveOffer)
    yield put(questOfferTake())
  } catch (e: any) {
    yield put(
      offerFailure({
        error: e.message,
      }),
    )
  }
}

function* multOfferSelectSaga(action: QuestOfferTakeRequest) {
  try {
    const saveOffer = () => axios.post(`${DOMAIN}/offers/multOffer/save`, {
      params: { ...action.payload }
    })

    yield call(saveOffer)
    yield put(multOfferTake())
  } catch (e: any) {
    yield put(
      offerFailure({
        error: e.message,
      }),
    )
  }
}

function* offerSagas() {
  yield all([
    takeLatest(QUEST_OFFER_TAKE_REQUEST, questOfferSelectSaga),
    takeLatest(MULT_OFFER_TAKE_REQUEST, multOfferSelectSaga)
  ])
}

export default offerSagas