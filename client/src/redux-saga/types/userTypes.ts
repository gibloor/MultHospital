import {
  USER_AUTH,
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,

  USER_DEAUTH,
  USER_DEAUTH_REQUIRE,

  USER_INVOLVEMENT_CHANGE,
  USER_INVOLVEMENT_CHANGE_REQUIRE,

  USER_AVATAR_SAVE,
  USER_AVATAR_SAVE_REQUIRE,

  USER_ERROR_CLEANING,
  USER_ERROR_CLEANING_REQUIRE,

  USER_TESTING,
  USER_TESTING_REQUIRE,

  USER_FAILURE,
} from "../actions/userActions"

export interface UserAuthDates {
  name: string,
  login: string,
  password: string,
}
export interface ErrorType {
  errorType: string
}
export interface Involvement {
  level: number,
}
export interface InvolvementDates extends Involvement {
  id: number,
}
export interface UserInfo extends Involvement {
  id: number,
  name: string,
  test_passed: boolean,
  login: string,
  permission: number,
  avatar: string,
  errorType: string,
}
export interface Token {
  token: string,
}
export interface AuthDates {
  dates: UserAuthDates,
  typeForm: string,
}
export interface UserInfoTaked extends UserInfo, Token {}

export interface Avatar {
  avatar: string,
}
export interface ImgInfo extends Avatar {
  id: number
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
  type: typeof USER_DEAUTH
}
export interface UserDeauthRequire {
  type: typeof USER_DEAUTH_REQUIRE
}

export interface UserTesting {
  type: typeof USER_TESTING,
}
export interface UserTestingRequire {
  type: typeof USER_TESTING_REQUIRE,
}

export interface UserInvolvementChange {
  type: typeof USER_INVOLVEMENT_CHANGE,
  payload: Involvement,
}
export interface UserInvolvementChangeRequire {
  type: typeof USER_INVOLVEMENT_CHANGE_REQUIRE,
  payload: InvolvementDates,
}

export interface UserAvatarSave {
  type: typeof USER_AVATAR_SAVE,
  payload: Avatar,
}
export interface UserAvatarSaveRequire {
  type: typeof USER_AVATAR_SAVE_REQUIRE,
  payload: ImgInfo,
}

export interface UserErrorCleaning {
  type: typeof USER_ERROR_CLEANING
}
export interface UserErrorCleaningRequire {
  type: typeof USER_ERROR_CLEANING_REQUIRE
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
| UserTestingRequire
| UserInvolvementChange
| UserInvolvementChangeRequire
| UserAvatarSave
| UserAvatarSaveRequire
| UserErrorCleaning
| UserErrorCleaningRequire
| UserFailure