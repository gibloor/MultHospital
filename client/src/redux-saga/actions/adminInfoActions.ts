import {
  AdminInfoTake,
  AdminInfoTakeRequire,

  AdminMultfilmsSave,
  AdminMultfilmsSaveRequire,

  AdminInfoFailure,

  AdminInfo,
  Multfilms,
} from '../types/adminInfoTypes'

export const ADMIN_INFO_TAKE = 'ADMIN_INFO_TAKE'
export const ADMIN_INFO_TAKE_REQUIRE = 'ADMIN_INFO_TAKE_REQUIRE'

export const ADMIN_MULTFILMS_SAVE = 'ADMIN_MULTFILMS_SAVE'
export const ADMIN_MULTFILMS_SAVE_REQUIRE = 'ADMIN_MULTFILMS_SAVE_REQUIRE'

export const ADMIN_INFO_FAILURE = 'ADMIN_INFO_FAILURE'

export const adminInfoTake = (
  payload: AdminInfo
): AdminInfoTake => ({
  type: ADMIN_INFO_TAKE,
  payload,
})
export const adminInfoTakeRequire = (): AdminInfoTakeRequire => ({
  type: ADMIN_INFO_TAKE_REQUIRE,
})

export const adminMultfilmsSave = (
  payload: Multfilms
): AdminMultfilmsSave => ({
  type: ADMIN_MULTFILMS_SAVE,
  payload,
})
export const adminMultfilmsSaveRequire = (
  payload: Multfilms
): AdminMultfilmsSaveRequire => ({
  type: ADMIN_MULTFILMS_SAVE_REQUIRE,
  payload,
})


export const adminInfoFailure = (
  payload: {error: boolean},
): AdminInfoFailure => ({
  type: ADMIN_INFO_FAILURE,
  payload,
})