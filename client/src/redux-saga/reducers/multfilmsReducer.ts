import { Reducer } from 'redux';

import {
  MULTFILM_TAKE,
  MULTFILM_TAKE_REQUARE,
  MULTFILM_TESTING,
  MULTFILM_TESTING_REQUIRE,
  VIEWED_SAVE,
  VIEWED_SAVE_REQUEST,
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
  multfilms: {
    1: [],
    2: [],
    3: []
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
    
    case MULTFILM_TESTING:
      let multfilms = state.multfilms;
      multfilms[action.payload.level].forEach(multfilm => {
        if (multfilm.name === action.payload.topic) {
          multfilm.watched = true
        };
        multfilm.delay -= 5;
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
    
    case VIEWED_SAVE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case VIEWED_SAVE:
      return {
        ...state,
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