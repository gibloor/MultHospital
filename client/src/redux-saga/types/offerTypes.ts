import {
  QUEST_OFFER_TAKE,
  QUEST_OFFER_TAKE_REQUEST,

  MULT_OFFER_TAKE,
  MULT_OFFER_TAKE_REQUEST,

  OFFER_FAILURE,
} from "../actions/offerActions"

export interface QuestOffer {
  multfilm: string,
  question: string,
  answer: string,
  false1: string,
  false2: string,
  id: number,
}

export interface MultOffer {
  multfilm: string,
  description: string,
  id: number,
}

export interface QuestOfferTakeRequest {
  type: typeof QUEST_OFFER_TAKE_REQUEST,
  payload: QuestOffer,
}
export interface QuestOfferTake {
  type: typeof QUEST_OFFER_TAKE,
}

export interface MultOfferTakeRequest {
  type: typeof MULT_OFFER_TAKE_REQUEST,
  payload: MultOffer,
}
export interface MultOfferTake {
  type: typeof MULT_OFFER_TAKE,
}

export interface OfferFailure {
  type: typeof OFFER_FAILURE,
  payload: {error: boolean},
}

export type OfferActions = 
| QuestOfferTake
| QuestOfferTakeRequest
| MultOfferTake
| MultOfferTakeRequest
| OfferFailure

