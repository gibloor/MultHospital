import {
  UserAuth,
  UserAuthRequire,
  UserAutoAuthRequire,

  UserDeauth,
  UserDeauthRequire,

  UserInvolvementChange,
  UserInvolvementChangeRequire,

  UserAvatarSave,
  UserAvatarSaveRequire,

  UserErrorCleaning,
  UserErrorCleaningRequire,

  UserTesting,
  UserTestingRequire,

  UserFailure,

  AuthDates,
  Token,
  UserInfoTaked,
  Involvement,
  InvolvementDates,
  Avatar,
  ImgInfo,
} from '../types/userTypes'

export const USER_AUTH = 'USER_AUTH'
export const USER_AUTH_REQUIRE = 'USER_AUTH_REQUIRE'
export const USER_AUTO_AUTH_REQUIRE = 'USER_AUTO_AUTH_REQUIRE'

export const USER_DEAUTH = 'USER_DEAUTH'
export const USER_DEAUTH_REQUIRE = 'USER_DEAUTH_REQUIRE'

export const USER_TESTING = 'USER_TESTING'
export const USER_TESTING_REQUIRE = 'USER_TESTING_REQUIRE'

export const USER_INVOLVEMENT_CHANGE = 'USER_INVOLVEMENT_CHANGE'
export const USER_INVOLVEMENT_CHANGE_REQUIRE = 'USER_INVOLVEMENT_CHANGE_REQUIRE'

export const USER_AVATAR_SAVE = 'USER_AVATAR_SAVE'
export const USER_AVATAR_SAVE_REQUIRE = 'USER_AVATAR_SAVE_REQUIRE'

export const USER_ERROR_CLEANING = 'USER_ERROR_CLEANING'
export const USER_ERROR_CLEANING_REQUIRE = 'USER_ERROR_CLEANING_REQUIRE'

export const USER_FAILURE = 'USER_AUTH_FAILURE'

export const userAuth = (
  payload: UserInfoTaked
): UserAuth => ({
  type: USER_AUTH,
  payload,
})
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
})
export const userDeauthRequire = (): UserDeauthRequire => ({
  type: USER_DEAUTH_REQUIRE,
})

export const userTesting = (): UserTesting => ({
  type: USER_TESTING,
})
export const userTestingRequire = (): UserTestingRequire => ({
  type: USER_TESTING_REQUIRE,
})

export const userInvolvementChange = (
  payload: Involvement,
): UserInvolvementChange => ({
  type: USER_INVOLVEMENT_CHANGE,
  payload,
})
export const userInvolvementChangeRequire = (
  payload: InvolvementDates,
): UserInvolvementChangeRequire => ({
  type: USER_INVOLVEMENT_CHANGE_REQUIRE,
  payload,
})

export const userAvatarSave = (
  payload: Avatar
): UserAvatarSave => ({
  type: USER_AVATAR_SAVE,
  payload,
})
export const userAvatarSaveRequire = (
  payload: ImgInfo,
): UserAvatarSaveRequire => ({
  type: USER_AVATAR_SAVE_REQUIRE,
  payload,
})

export const userErrorCleaning = (): UserErrorCleaning => ({
  type: USER_ERROR_CLEANING
})
export const userErrorCleaningRequire = (): UserErrorCleaningRequire => ({
  type: USER_ERROR_CLEANING_REQUIRE
})

export const userFailure = (
  payload: {error: boolean},
): UserFailure => ({
  type: USER_FAILURE,
  payload,
})