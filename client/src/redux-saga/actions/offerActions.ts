import {
  QuestOfferTakeRequest,
  QuestOfferTake,
  OfferFailure,
  QuestOffer,
} from '../types/offerTypes';

export const QUEST_OFFER_TAKE = 'QUEST_OFFER_TAKE';
export const QUEST_OFFER_TAKE_REQUEST = 'QUEST_OFFER_TAKE_REQUEST';
export const OFFER_FAILURE = 'OFFER_FAILURE';

export const questOfferTakeRequest = (
  payload: QuestOffer,
): QuestOfferTakeRequest => ({
  type: QUEST_OFFER_TAKE_REQUEST,
  payload,
});

export const questOfferTake = (): QuestOfferTake => ({
  type: QUEST_OFFER_TAKE
});

export const offerFailure = (
  payload: {error: boolean},
): OfferFailure => ({
  type: OFFER_FAILURE,
  payload,
});