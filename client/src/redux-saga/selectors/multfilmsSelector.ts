import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getMultfilms = (state: AppState) => state.multfilms.multfilms;
const getError = (state: AppState) => state.multfilms.error;
const getPending = (state: AppState) => state.multfilms.pending;

export const getMultfilmsSelector = createSelector(getMultfilms, (info) => info);
export const multfilmsErrorSelector = createSelector(getError, (error) => error);
export const multfilmsPending = createSelector(getPending, (pending) => pending);