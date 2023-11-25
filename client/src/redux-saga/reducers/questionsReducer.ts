import { Reducer } from 'redux'

import {
  QUESTIONS_TAKE,
  QUESTIONS_TAKE_FAILURE,
  QUESTIONS_TAKE_REQUEST,
} from '../actions/questionsActions'

import { Questions, QuestionsActions } from '../types/questionsTypes'

interface InitialState extends Questions {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  questions: [],
  error: false,
  pending: false,
}

const questionsReducer: Reducer<InitialState, QuestionsActions> = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_TAKE_REQUEST:
      return {
        ...state,
        pending: true,
      }

    case QUESTIONS_TAKE:
      return {
        ...state,
        error: false,
        questions: action.payload.questions,
        pending: false,
      }

    case QUESTIONS_TAKE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }

    default:
      return {
        ...state,
      }
  }
}

export default questionsReducer