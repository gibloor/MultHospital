import { createSelector } from "reselect";
import { AppState } from "../reducers/rootReducer";

const getPending = (state: AppState) => state.userAuth;
const getAccount = (state: AppState) => state.userAuth;
const getError = (state: AppState) => state.userAuth;

export const getAccountSelector = createSelector(getAccount, (info) => info);

export const getAccountPendingSelector = createSelector(getPending, (pending) => pending);

export const getAccountErrorSelector = createSelector(getError, (error) => error);