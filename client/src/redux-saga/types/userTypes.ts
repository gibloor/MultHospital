import {
  USER_AUTH,
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,

  USER_DEAUTH,
  USER_DEAUTH_REQUIRE,

  USER_TESTING,
  USER_TESTING_REQUARE,

  USER_FAILURE,
} from "../actions/userActions";

export interface UserAuthDates {
  name: string,
  login: string,
  password: string,
}
export interface UserInfo {
  id: number,
  name: string,
  image: string,
  test_passed: boolean,
  involvement: string,
}
export interface Token {
  token: string,
}
export interface AuthDates {
  dates: UserAuthDates,
  typeForm: string,
}
export interface UserInfoTaked extends UserInfo, Token {}

export interface Answer {
  features: string[],
}
export interface UserAnswer extends Answer {
  userId: number,
}

export interface UserAuth {
  type: typeof USER_AUTH,
  payload: UserInfoTaked,
}
export interface UserAuthRequire {
  type: typeof USER_AUTH_REQUIRE,
  payload: AuthDates,
}
export interface UserAutoAuthRequire {
  type: typeof USER_AUTO_AUTH_REQUIRE,
  payload: Token,
}

export interface UserDeauth {
  type: typeof USER_DEAUTH;
}
export interface UserDeauthRequire {
  type: typeof USER_DEAUTH_REQUIRE;
}

export interface UserTesting {
  type: typeof USER_TESTING,
  payload: Answer,
}
export interface UserTestingRequare {
  type: typeof USER_TESTING_REQUARE,
  payload: UserAnswer,
}

export interface UserFailure {
  type: typeof USER_FAILURE,
  payload: {error: boolean},
}

export type UserAuthActions =
| UserAuth
| UserAuthRequire
| UserAutoAuthRequire
| UserDeauth
| UserDeauthRequire
| UserTesting
| UserTestingRequare
| UserFailure;