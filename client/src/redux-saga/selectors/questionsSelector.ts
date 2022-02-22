import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getQuestionsSelector = (state: AppState) => state.questions.questions;
const getQuestionsPendingSelector = (state: AppState) => state.questions.pending;
const getErrorSelector = (state: AppState) => state.questions.error;

export const getQuestions = createSelector(getQuestionsSelector, (questions) => questions);
export const getQuestionsPending = createSelector(getQuestionsPendingSelector, (pending) => pending);
export const getQuestionsError = createSelector(getErrorSelector, (error) => error);