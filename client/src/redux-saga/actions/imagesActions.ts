import {
  AvatarTake,
  AvatarTakeRequire,

  ImagesFailure,

  Avatar,
  User,
} from '../types/imagesTypes';

export const AVATAR_TAKE = 'AVATAR_TAKE';
export const AVATAR_TAKE_REQUIRE = 'AVATAR_TAKE_REQUIRE';
export const IMAGES_FAILURE = 'IMAGES_FAILURE';

export const avatarTake = (
  payload: Avatar
): AvatarTake => ({
  type: AVATAR_TAKE,
  payload,
});
export const avatarTakeRequire = (
  payload: User,
): AvatarTakeRequire => ({
  type: AVATAR_TAKE_REQUIRE,
  payload,
});

export const imagesFailure = (
  payload: {error: boolean},
): ImagesFailure => ({
  type: IMAGES_FAILURE,
  payload,
});