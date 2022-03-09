import {
  AdminInfoTake,
  AdminInfoTakeRequire,

  AdminInfoFailure,

  AdminInfo,
  Token,
} from '../types/adminInfoTypes';

export const ADMIN_INFO_TAKE = 'ADMIN_INFO_TAKE';
export const ADMIN_INFO_TAKE_REQUIRE = 'ADMIN_INFO_TAKE_REQUIRE';

export const ADMIN_INFO_FAILURE = 'ADMIN_INFO_FAILURE';

export const adminInfoTake = (
  payload: AdminInfo
): AdminInfoTake => ({
  type: ADMIN_INFO_TAKE,
  payload,
});
export const adminInfoTakeRequire = (): AdminInfoTakeRequire => ({
  type: ADMIN_INFO_TAKE_REQUIRE,
});

export const adminInfoFailure = (
  payload: {error: boolean},
): AdminInfoFailure => ({
  type: ADMIN_INFO_FAILURE,
  payload,
});