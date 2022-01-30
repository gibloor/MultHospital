import {
  ProfileTake,
  ProfileTakeRequire,

  ProfileFailure,

  Id,
  Profile,
} from '../types/profileTypes';

export const PROFILE_TAKE = 'PROFILE_TAKE';
export const PROFILE_TAKE_REQUIRE = 'PROFILE_TAKE_REQUIRE';

export const PROFILE_FAILURE = 'PROFILE_FAILURE';

export const profileTake = (
  payload: Profile
): ProfileTake => ({
  type: PROFILE_TAKE,
  payload,
});
export const profileTakeRequire = (
  payload: Id,
): ProfileTakeRequire => ({
  type: PROFILE_TAKE_REQUIRE,
  payload,
});

export const profileFailure = (
  payload: {error: boolean},
): ProfileFailure => ({
  type: PROFILE_FAILURE,
  payload,
});