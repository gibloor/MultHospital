import { Reducer } from 'redux';

import {
  AVATAR_TAKE,
  AVATAR_TAKE_REQUIRE,

  IMAGES_FAILURE
} from '../actions/imagesActions';

import { ImagesActions, ImgOptions } from '../types/imagesTypes';

interface InitialState extends ImgOptions {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  ownAvatar: '',
  strangerAvatar: '',
};

const imagesReducer: Reducer<InitialState, ImagesActions> = (
  state = initialState,
  action: ImagesActions,
) => {
  switch (action.type) {
    case AVATAR_TAKE:
      return {
        ...state,
        [action.payload.type]: action.payload.img,
        pending: true,
      };
    case AVATAR_TAKE_REQUIRE:
      return {
        ...state,
        pending: false,
      };
    case IMAGES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default imagesReducer;