import {
  UserAuth,
  UserAuthFailure,
  UserDeauth,
  UserTesting,
  UserTestingRequare,
  UserAuthRequare,
  UserAuthorization,
  UserAutoAuthorization,

  UserAnswer,
  AuthorizationDates,
  UserInfo,
  Answer,
  Token,
} from '../types/userTypes';

export const USER_AUTH = 'USER_AUTH';
export const USER_AUTH_REQUARE = 'USER_AUTH_REQUARE';
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE';
export const USER_DEAUTH = 'USER_DEAUTH';
export const USER_TESTING = 'USER_TESTING';
export const USER_TESTING_REQUARE = 'USER_TESTING_REQUARE';
export const USER_AUTHORIZATION = 'USER_AUTHORIZATION';
export const USER_AUTO_AUTHORIZATION = 'USER_AUTO_AUTHORIZATION';

export const userAuthorization = (
  payload: AuthorizationDates
): UserAuthorization => ({
  type: USER_AUTHORIZATION,
  payload,
})
export const userAutoAuthorization = (
  payload: Token
): UserAutoAuthorization => ({
  type: USER_AUTO_AUTHORIZATION,
  payload,
})

export const userAuth = (
  payload: UserInfo,
): UserAuth => ({
  type: USER_AUTH,
  payload,
});

export const userRequare = (
  payload: UserInfo,
): UserAuthRequare => ({
  type: USER_AUTH_REQUARE,
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

export const userTesting = (
  payload: Answer,
): UserTesting => ({
  type: USER_TESTING,
  payload,
});

export const userTestingRequare = (
  payload: UserAnswer,
): UserTestingRequare => ({
  type: USER_TESTING_REQUARE,
  payload,
});