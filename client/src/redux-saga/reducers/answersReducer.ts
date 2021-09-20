import { Reducer } from 'redux';

import {
  ANSWER_TAKE_REQUEST,
  ANSWER_TAKE,
  ANSWER_TAKE_FAILURE,
} from '../actions/answersActions';

import { Answer, AnswersActions } from '../types/answersTypes';

interface InitialState extends Answer {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  features: [],
  error: false,
  pending: false,
};

const answersReducer: Reducer<InitialState, AnswersActions> = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_TAKE_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case ANSWER_TAKE:
      return {
        ...state,
        features: action.payload.features,
        pending: false,
      };

    case ANSWER_TAKE_FAILURE:
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

export default answersReducer;