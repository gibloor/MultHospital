import {
  UserAuth,
  UserAuthRequest,
  UserAuthFailure,
  UserInfo,
  UserDeauth,
} from '../types/accountTypes';

export const USER_AUTH = 'USER_AUTH';
export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST';
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE';
export const USER_DEAUTH = 'USER_DEAUTH';

export const userAuthRequest = (): UserAuthRequest => ({
  type: USER_AUTH_REQUEST,
});

export const userAuth = (
  payload: UserInfo,
): UserAuth => ({
  type: USER_AUTH,
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