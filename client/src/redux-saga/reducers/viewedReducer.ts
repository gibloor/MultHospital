import { Reducer } from 'redux';

import {
  VIEWED_SAVE,
  VIEWED_SAVE_REQUEST,
  VIEWED_FAILURE,
} from '../actions/viewedActions';

import { ViewedActions } from '../types/viewedTypes';

interface InitialState {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
};

const viewedReducer: Reducer<InitialState, ViewedActions> = (
  state = initialState,
  action: ViewedActions,
) => {
  switch (action.type) {
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

    case VIEWED_FAILURE:
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

export default viewedReducer;