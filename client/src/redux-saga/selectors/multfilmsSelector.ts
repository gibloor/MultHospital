import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getMultfilms = (state: AppState) => state.multfilms.multfilms;
const getMultfilmsPending = (state: AppState) => state.multfilms.pending;
const getError = (state: AppState) => state.multfilms;

export const getMultfilmsSelector = createSelector(getMultfilms, (info) => info);
export const getMultfilmsPendingSelector = createSelector(getMultfilmsPending, (pending) => pending);
export const multfilmsErrorSelector = createSelector(getError, (error) => error);