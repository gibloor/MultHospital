import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getAccount = (state: AppState) => state.user;
const getError = (state: AppState) => state.user.error;
const getErrorType = (state: AppState) => state.user.errorType;
const getId = (state: AppState) => state.user.id;
const getPermission= (state: AppState) => state.user.permission;
const getPending = (state: AppState) => state.user.pending;

export const getAccountSelector = createSelector(getAccount, (info) => info);
export const getAccountErrorSelector = createSelector(getError, (error) => error);
export const getAccountIdSelector = createSelector(getId, (id) => id);
export const getUserPermission= createSelector(getPermission, (permission) => permission);
export const getAccountPendingSelector = createSelector(getPending, (pending) => pending);
export const getAuthErrorTypeSelector = createSelector(getErrorType, (error) => error);