import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getAvatar = (state: AppState) => state.profile.avatar;

export const avatarSelector = createSelector(getAvatar, (info) => info);
