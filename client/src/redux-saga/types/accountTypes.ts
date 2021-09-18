import {
  USER_AUTH,
  USER_AUTH_REQUEST,
  USER_AUTH_FAILURE,
  USER_DEAUTH,
} from "../actions/userActions";

export interface UserInfo {
  pending: boolean,
  error: boolean,
  info: {
    id: number,
    name: string,
    image: string, 
    features: string[],
    acsessToken: string,
    test_passed: boolean,
    involvement: string
  }
}

export interface UserAuthRequest {
  type: typeof USER_AUTH_REQUEST;
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

export type UserAuthActions = 
| UserAuthRequest
| UserAuth
| UserAuthFailure
| UserDeauth;