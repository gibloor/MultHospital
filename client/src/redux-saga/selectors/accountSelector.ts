import { createSelector } from "reselect";
import { AppState } from "../reducers/rootReducer";

const getAccount = (state: AppState) => state.userAuth.info;
const getError = (state: AppState) => state.userAuth;

export const getAccountSelector = createSelector(getAccount, (info) => info);
export const getAccountErrorSelector = createSelector(getError, (error) => error);