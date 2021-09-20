import { Reducer } from 'redux';

import {
  QUESTIONS_TAKE,
  QUESTIONS_TAKE_FAILURE,
  QUESTIONS_TAKE_REQUEST,
} from '../actions/questionsActions';

import { Questions, QuestionsActions } from '../types/questionsTypes';

const initialState: Questions = {
  questions: [
    {
      id: 0,
      question: '',
      image: '',
      answer: '',
      topic: '',
      level: '',
      serial_num: 0,
    },
  ],
  error: false,
};

const questionsReducer: Reducer<Questions, QuestionsActions> = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_TAKE_REQUEST:
      return {
        ...state,
      };

    case QUESTIONS_TAKE:
      return {
        ...state,
        error: false,
        questions: action.payload.questions,
      };

    case QUESTIONS_TAKE_FAILURE:
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

export default questionsReducer;