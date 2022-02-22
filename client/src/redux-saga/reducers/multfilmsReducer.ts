import { Reducer } from 'redux';

import {
  MULTFILM_TAKE,
  MULTFILM_TAKE_REQUARE,
  MULTFILM_TESTING,
  MULTFILM_TESTING_REQUIRE,
  MULTFILM_FAILURE,
} from '../actions/multfilmsActions';

import { MultfilmsActions, Multfilms } from '../types/multfilmsTypes';

interface InitialState extends Multfilms {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  multfilms: {},
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
    
    case MULTFILM_TESTING:
      let multfilms = state.multfilms;
      multfilms[action.payload.level].map(multfilm => {
        if (multfilm.name === action.payload.topic) {
          multfilm.watched = true
        }
      });
      return {
        ...state,
        multfilms: multfilms,

        pending: false,
      }
    case MULTFILM_TESTING_REQUIRE:
      return {
        ...state,
        pending: true,
      }
    
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