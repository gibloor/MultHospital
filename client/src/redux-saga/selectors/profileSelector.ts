import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getAvatar = (state: AppState) => state.profile.avatar;
const getId = (state: AppState) => state.profile.id;

export const avatarSelector = createSelector(getAvatar, (info) => info);
export const profileIdSelector = createSelector(getId, (info) => info);