import {
  UserAuth,
  UserAuthRequire,
  UserAutoAuthRequire,

  UserDeauth,
  UserDeauthRequire,

  UserTesting,
  UserTestingRequare,
  UserAnswer,

  UserInvolvementChange,
  UserInvolvementChangeRequare,

  UserFailure,

  AuthDates,
  Token,
  UserInfoTaked,
  Answer,
  Involvement,
  InvolvementDates,
} from '../types/userTypes';

export const USER_AUTH = 'USER_AUTH';
export const USER_AUTH_REQUIRE = 'USER_AUTH_REQUIRE';
export const USER_AUTO_AUTH_REQUIRE = 'USER_AUTO_AUTH_REQUIRE';

export const USER_DEAUTH = 'USER_DEAUTH';
export const USER_DEAUTH_REQUIRE = 'USER_DEAUTH_REQUIRE';

export const USER_TESTING = 'USER_TESTING';
export const USER_TESTING_REQUARE = 'USER_TESTING_REQUARE';

export const USER_INVOLVEMENT_CHANGE = 'USER_INVOLVEMENT_CHANGE';
export const USER_INVOLVEMENT_CHANGE_REQUARE = 'USER_INVOLVEMENT_CHANGE_REQUARE';

export const USER_FAILURE = 'USER_AUTH_FAILURE';

export const userAuth = (
  payload: UserInfoTaked
): UserAuth => ({
  type: USER_AUTH,
  payload,
});
export const userAuthRequire = (
  payload: AuthDates
): UserAuthRequire => ({
  type: USER_AUTH_REQUIRE,
  payload,
})

export const userAutoAuthRequire = (
  payload: Token
): UserAutoAuthRequire => ({
  type: USER_AUTO_AUTH_REQUIRE,
  payload,
})

export const userDeauth = (): UserDeauth => ({
  type: USER_DEAUTH,
});
export const userDeauthRequire = (): UserDeauthRequire => ({
  type: USER_DEAUTH_REQUIRE,
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

export const userInvolvementChange = (
  payload: Involvement,
): UserInvolvementChange => ({
  type: USER_INVOLVEMENT_CHANGE,
  payload,
});
export const userInvolvementChangeRequare = (
  payload: InvolvementDates,
): UserInvolvementChangeRequare => ({
  type: USER_INVOLVEMENT_CHANGE_REQUARE,
  payload,
});

export const userFailure = (
  payload: {error: boolean},
): UserFailure => ({
  type: USER_FAILURE,
  payload,
});