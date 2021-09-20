import {
  ANSWER_TAKE_REQUEST,
  ANSWER_TAKE,
  ANSWER_TAKE_FAILURE,
} from "../actions/answersActions";

export interface Answer {
  features: string[],
}
export interface FullAnswer extends Answer {
  id: number,
}
export interface AnswerTakeRequest {
  type: typeof ANSWER_TAKE_REQUEST;
  payload: FullAnswer;
}
export interface AnswerTake {
  type: typeof ANSWER_TAKE;
  payload: Answer;
}
export interface AnswerTakeFailure {
  type: typeof ANSWER_TAKE_FAILURE;
  payload: {error: boolean};
}

export type AnswersActions = 
| AnswerTake
| AnswerTakeFailure
| AnswerTakeRequest

