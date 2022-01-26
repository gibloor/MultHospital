import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getOwnAvatar = (state: AppState) => state.images.ownAvatar;

export const ownAvatarSelector = createSelector(getOwnAvatar, (info) => info);
