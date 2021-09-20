import {
  QuestionsTakeRequest,
  QuestionsTake,
  QuestionsTakeFailure,
  Questions,
  QuestionsTopic,
} from '../types/questionsTypes';

export const QUESTIONS_TAKE_REQUEST = 'QUESTIONS_TAKE_REQUEST';
export const QUESTIONS_TAKE = 'QUESTIONS_TAKE';
export const QUESTIONS_TAKE_FAILURE = 'QUESTIONS_TAKE_FAILURE';

export const ANSWER_TAKE = 'ANSWER_TAKE';
export const ANSWER_TAKE_REQUEST = 'ANSWER_TAKE_REQUEST';
export const ANSWER_TAKE_FAILURE = 'ANSWER_TAKE_FAILURE';

export const questionsTakeRequest = (
  payload: QuestionsTopic,
): QuestionsTakeRequest => ({
  type: QUESTIONS_TAKE_REQUEST,
  payload,
});

export const questionsTake = (
  payload: Questions,
): QuestionsTake => ({
  type: QUESTIONS_TAKE,
  payload,
});

export const questionsTakeFailure = (
  payload: {error: boolean},
): QuestionsTakeFailure => ({
  type: QUESTIONS_TAKE_FAILURE,
  payload,
});