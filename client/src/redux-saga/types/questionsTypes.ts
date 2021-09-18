import {
  QUESTIONS_TAKE,
  QUESTIONS_TAKE_FAILURE,
  QUESTIONS_TAKE_REQUEST
} from "../actions/questionsActions";

export interface Question {
  id: number,
  topic: string,
  question: string,
  image: string,
  answer: string
}

export interface Questions {
  error: boolean,
  questions: Question[]
}

export interface QuestionsTopic {
  topic: string,
}

export interface QuestionsTakeRequest {
  type: typeof QUESTIONS_TAKE_REQUEST;
  payload: QuestionsTopic;
}

export interface QuestionsTake {
  type: typeof QUESTIONS_TAKE;
  payload: Questions;
}
export interface QuestionsTakeFailure {
  type: typeof QUESTIONS_TAKE_FAILURE;
  payload: {error: boolean};
}

export type QuestionsActions = 
| QuestionsTake
| QuestionsTakeFailure
| QuestionsTakeRequest

