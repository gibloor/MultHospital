import { Reducer } from 'redux';

import {
  QUEST_OFFER_TAKE,
  QUEST_OFFER_TAKE_REQUEST,

  MULT_OFFER_TAKE,
  MULT_OFFER_TAKE_REQUEST,

  OFFER_FAILURE,
} from '../actions/offerActions';

import { OfferActions } from '../types/offerTypes';

interface InitialState {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
};

const offerReducer: Reducer<InitialState, OfferActions> = (state = initialState, action) => {
  switch (action.type) {
    case QUEST_OFFER_TAKE:
      return {
        ...state,
        error: false,
        pending: false,
      };
    case QUEST_OFFER_TAKE_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case MULT_OFFER_TAKE:
      return {
        ...state,
        error: false,
        pending: false,
      };
    case MULT_OFFER_TAKE_REQUEST:
      return {
        ...state,
        pending: true,
      };
  
    case OFFER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default offerReducer;