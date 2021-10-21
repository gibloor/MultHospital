import {
  USER_AUTH,
  USER_AUTH_REQUARE,
  USER_AUTH_FAILURE,
  USER_DEAUTH,
  USER_TESTING,
  USER_TESTING_REQUARE,
  USER_AUTHORIZATION,
  USER_AUTO_AUTHORIZATION,
} from "../actions/userActions";

export interface Answer {
  features: string[],
}
export interface UserInfo {
  id: number,
  name: string,
  image: string, 
  test_passed: boolean,
  involvement: string,
}
export interface UserInfoTake extends UserInfo {
  acsessToken: string,
}

export interface UserAnswer extends Answer {
  userId: number,
}
export interface UserAuthRequare {
  type: typeof USER_AUTH_REQUARE,
  payload: UserInfo,
}
export interface UserAuth {
  type: typeof USER_AUTH,
  payload: UserInfo,
}
export interface UserAuthFailure {
  type: typeof USER_AUTH_FAILURE,
  payload: {error: boolean},
}
export interface UserDeauth {
  type: typeof USER_DEAUTH;
}
export interface UserTesting {
  type: typeof USER_TESTING,
  payload: Answer,
}
export interface UserTestingRequare {
  type: typeof USER_TESTING_REQUARE,
  payload: UserAnswer,
}
export interface UserDates {
  name: string,
  login: string,
  password: string,
  involvement: string
}
export interface AuthorizationDates {
  dates: UserDates,
  typeForm: string,
}
export interface UserAuthorization {
  type: typeof USER_AUTHORIZATION,
  payload: AuthorizationDates,
}
export interface Token {
  token: string
}
export interface UserAutoAuthorization {
  type: typeof USER_AUTO_AUTHORIZATION,
  payload: Token,
}

export type UserAuthActions =
| UserAuthorization
| UserAutoAuthorization
| UserAuthRequare
| UserAuth
| UserAuthFailure
| UserDeauth
| UserTesting
| UserTestingRequare;