import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getPending = (state: AppState) => state.answer.pending;
const getError = (state: AppState) => state.answer.error;

export const getAnswerPendingSelector = createSelector(getPending, (pending) => pending);
export const getAnswerErrorSelector = createSelector(getError, (error) => error);