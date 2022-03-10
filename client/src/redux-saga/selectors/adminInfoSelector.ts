import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getMultfilms = (state: AppState) => state.adminInfo.multfilms;

export const getMultfilmsSelector = createSelector(getMultfilms, (info) => info);
