import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getQuestions = (state: AppState) => state.questions.questions;
const getError = (state: AppState) => state.questions.error;

export const getQuestionsSelector = createSelector(getQuestions, (questions) => questions);
export const getQuestionsErrorSelector = createSelector(getError, (error) => error);