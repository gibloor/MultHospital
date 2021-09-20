import {
  Answer,
  AnswerTake,
  AnswerTakeFailure,
  AnswerTakeRequest,
  FullAnswer,
} from '../types/answersTypes';

export const ANSWER_TAKE = 'ANSWER_TAKE';
export const ANSWER_TAKE_REQUEST = 'ANSWER_TAKE_REQUEST';
export const ANSWER_TAKE_FAILURE = 'ANSWER_TAKE_FAILURE';

export const answerTakeRequest = (
  payload: FullAnswer,
): AnswerTakeRequest => ({
  type: ANSWER_TAKE_REQUEST,
  payload,
});

export const answerTake = (
  payload: Answer,
): AnswerTake => ({
  type: ANSWER_TAKE,
  payload,
});

export const answerTakeFailure = (
  payload: {error: boolean},
): AnswerTakeFailure => ({
  type: ANSWER_TAKE_FAILURE,
  payload,
});