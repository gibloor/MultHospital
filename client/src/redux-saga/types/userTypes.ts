import {
  USER_AUTH,
  USER_AUTH_FAILURE,
  USER_DEAUTH,
  USER_TEST_COMPLETE,
  USER_REQUARE,
} from "../actions/userActions";

export interface UserInfo {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string,
  test_passed: boolean,
  involvement: string
}

export interface UserRequare {
  type: typeof USER_REQUARE;
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
export interface UserTestComplete {
  type: typeof USER_TEST_COMPLETE;
  payload: {feature: string[]}
}


export type UserAuthActions =
| UserRequare
| UserAuth
| UserAuthFailure
| UserDeauth
| UserTestComplete;