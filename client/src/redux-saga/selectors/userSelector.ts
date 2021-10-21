import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getAccount = (state: AppState) => state.user;
const getError = (state: AppState) => state.user;
const getId = (state: AppState) => state.user.id;
const getPending = (state: AppState) => state.user.pending;

export const getAccountSelector = createSelector(getAccount, (info) => info);
export const getAccountErrorSelector = createSelector(getError, (error) => error);
export const getAccountIdSelector = createSelector(getId, (id) => id);
export const getAccountPendingSelector = createSelector(getPending, (pending) => pending);