import {
  USER_AUTH,
  USER_AUTH_REQUARE,
  USER_AUTH_FAILURE,
  USER_DEAUTH,
  USER_TESTING,
  USER_TESTING_REQUARE,
} from "../actions/userActions";

export interface Answer {
  features: string[],
}
export interface UserInfo {
  id: number,
  name: string,
  image: string, 
  test_passed: boolean,
  involvement: string
}
export interface UserAnswer extends Answer {
  userId: number,
}

export interface UserAuthRequare {
  type: typeof USER_AUTH_REQUARE;
  payload: UserInfo;
}
export interface UserAuth {
  type: typeof USER_AUTH;
  payload: UserInfo;
}
export interface UserAuthFailure {
  type: typeof USER_AUTH_FAILURE;
  payload: {error: boolean};
}
export interface UserDeauth {
  type: typeof USER_DEAUTH;
}
export interface UserTesting {
  type: typeof USER_TESTING;
  payload: Answer
}
export interface UserTestingRequare {
  type: typeof USER_TESTING_REQUARE;
  payload: UserAnswer
}

export type UserAuthActions =
| UserAuthRequare
| UserAuth
| UserAuthFailure
| UserDeauth
| UserTesting
| UserTestingRequare;