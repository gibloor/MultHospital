import {
  USER_AUTH,
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,

  USER_DEAUTH,
  USER_DEAUTH_REQUIRE,

  USER_TESTING,
  USER_TESTING_REQUIRE,

  USER_INVOLVEMENT_CHANGE,
  USER_INVOLVEMENT_CHANGE_REQUIRE,

  USER_IMG_CHANGE,
  USER_IMG_CHANGE_REQUIRE,

  USER_FAILURE,
} from "../actions/userActions";

export interface UserAuthDates {
  name: string,
  login: string,
  password: string,
}
export interface Involvement {
  involvement: string,
}
export interface InvolvementDates extends Involvement {
  id: number,
}

export interface UserInfo extends Involvement {
  id: number,
  name: string,
  image: boolean,
  test_passed: boolean,
  login: string,
  position: string
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
  level: string,
  topic: string,
}

export interface ImgTake {
  img: FormData,
  id: number,
  availability: boolean,
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
export interface UserTestingRequire {
  type: typeof USER_TESTING_REQUIRE,
  payload: UserAnswer,
}

export interface UserInvolvementChange {
  type: typeof USER_INVOLVEMENT_CHANGE,
  payload: Involvement,
}
export interface UserInvolvementChangeRequire {
  type: typeof USER_INVOLVEMENT_CHANGE_REQUIRE,
  payload: InvolvementDates,
}

export interface UserImgChange {
  type: typeof USER_IMG_CHANGE,
}
export interface UserImgChangeRequire {
  type: typeof USER_IMG_CHANGE_REQUIRE,
  payload: ImgTake,
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
| UserImgChange
| UserImgChangeRequire
| UserFailure;