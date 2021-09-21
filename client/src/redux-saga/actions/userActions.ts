import {
  UserAuth,
  UserAuthFailure,
  UserInfo,
  UserDeauth,
  UserTestComplete,
  UserRequare,
} from '../types/userTypes';

export const USER_AUTH = 'USER_AUTH';
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE';
export const USER_DEAUTH = 'USER_DEAUTH';
export const USER_TEST_COMPLETE = 'USER_TEST_COMPLETE';
export const USER_REQUARE = 'USER_REQUARE';

export const userAuth = (
  payload: UserInfo,
): UserAuth => ({
  type: USER_AUTH,
  payload,
});

export const userRequare = (
  payload: UserInfo,
): UserRequare => ({
  type: USER_REQUARE,
  payload,
});

export const userAuthFailure = (
  payload: {error: boolean},
): UserAuthFailure => ({
  type: USER_AUTH_FAILURE,
  payload,
});

export const userDeauth = (): UserDeauth => ({
  type: USER_DEAUTH,
});

export const userTestComplete = (
  payload: {feature: string[]},
): UserTestComplete => ({
  type: USER_TEST_COMPLETE,
  payload,
});