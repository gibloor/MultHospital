import {
  QUESTIONS_TAKE,
  QUESTIONS_TAKE_FAILURE,
  QUESTIONS_TAKE_REQUEST,
} from "../actions/questionsActions"

interface QuestionForm {
  id: number,
  topic: string,
  level: number,
  question: string,
  image: string,
  serial_num: number,
  multfilm: string,
  answer: string,
}

export interface Question extends QuestionForm {
  answers: string[],
}

export interface QuestionTake extends Question {
  blende1: string,
  blende2: string,
}

export interface Questions {
  questions: Question[],
}

export interface QuestionsTopic {
  level: number,
  topic: string,
}

export interface QuestionsTakeRequest {
  type: typeof QUESTIONS_TAKE_REQUEST,
  payload: QuestionsTopic,
}

export interface QuestionsTake {
  type: typeof QUESTIONS_TAKE,
  payload: Questions,
}
export interface QuestionsTakeFailure {
  type: typeof QUESTIONS_TAKE_FAILURE,
  payload: {error: boolean},
}

export type QuestionsActions = 
| QuestionsTake
| QuestionsTakeFailure
| QuestionsTakeRequest

