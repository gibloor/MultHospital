import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getAccount = (state: AppState) => state.userAuth;
const getError = (state: AppState) => state.userAuth;
const getId = (state: AppState) => state.userAuth.id;
const getPending = (state: AppState) => state.userAuth.pending;

export const getAccountSelector = createSelector(getAccount, (info) => info);
export const getAccountErrorSelector = createSelector(getError, (error) => error);
export const getAccountIdSelector = createSelector(getId, (id) => id);
export const getAccountPendingSelector = createSelector(getPending, (pending) => pending);