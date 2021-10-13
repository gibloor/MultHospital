import { Reducer } from 'redux';

import {
  MULTFILM_TAKE,
  MULTFILM_FAILURE,
  MULTFILM_TAKE_REQUARE,
} from '../actions/multfilmsActions';

import { MultfilmsActions, Multfilms } from '../types/multfilmsTypes';

interface InitialState extends Multfilms {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  multfilms: {
    commonMults: [],
    uncommonMults: [],
    rareMults: [],
  },
};

const multfilmsReducer: Reducer<InitialState, MultfilmsActions> = (
  state = initialState,
  action: MultfilmsActions,
) => {
  switch (action.type) {
    case MULTFILM_TAKE_REQUARE:
      return {
        ...state,
        pending: true,
      };
    case MULTFILM_TAKE:
      return {
        ...state,
        multfilms: action.payload.multfilms,
        pending: false,
      };

    case MULTFILM_FAILURE:
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

export default multfilmsReducer;