import {
  QuestOfferTake,
  QuestOfferTakeRequest,

  MultOfferTake,
  MultOfferTakeRequest,

  OfferFailure,

  QuestOffer,
  MultOffer,
} from '../types/offerTypes'

export const QUEST_OFFER_TAKE = 'QUEST_OFFER_TAKE'
export const QUEST_OFFER_TAKE_REQUEST = 'QUEST_OFFER_TAKE_REQUEST'

export const MULT_OFFER_TAKE_REQUEST = 'MULT_OFFER_TAKE_REQUEST'
export const MULT_OFFER_TAKE = 'MULT_OFFER_TAKE'

export const OFFER_FAILURE = 'OFFER_FAILURE'

export const questOfferTake = (): QuestOfferTake => ({
  type: QUEST_OFFER_TAKE
})
export const questOfferTakeRequest = (
  payload: QuestOffer,
): QuestOfferTakeRequest => ({
  type: QUEST_OFFER_TAKE_REQUEST,
  payload,
})

export const multOfferTake = (): MultOfferTake => ({
  type: MULT_OFFER_TAKE
})
export const multOfferTakeRequest = (
  payload: MultOffer,
): MultOfferTakeRequest => ({
  type: MULT_OFFER_TAKE_REQUEST,
  payload,
})

export const offerFailure = (
  payload: {error: boolean},
): OfferFailure => ({
  type: OFFER_FAILURE,
  payload,
})