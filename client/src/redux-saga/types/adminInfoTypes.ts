import {
  ADMIN_INFO_TAKE,
  ADMIN_INFO_TAKE_REQUIRE,

  ADMIN_MULTFILMS_SAVE,
  ADMIN_MULTFILMS_SAVE_REQUIRE,
  
  ADMIN_INFO_FAILURE,
} from "../actions/adminInfoActions"

export interface Token {
  token: string,
}
export interface Multfilm {
  name: string,
  level: number,
  serial: number,
  [key: string]: string | number,
}
export interface Staff {
  login: string,
  position: string,
}
export interface Multfilms {
  multfilms: Multfilm[]
}
export interface AdminInfo extends Multfilms {
  staff: Staff[]
}

export interface AdminInfoTake {
  type: typeof ADMIN_INFO_TAKE
  payload: AdminInfo
}
export interface AdminInfoTakeRequire {
  type: typeof ADMIN_INFO_TAKE_REQUIRE
}

export interface AdminMultfilmsSave {
  type: typeof ADMIN_MULTFILMS_SAVE,
  payload: Multfilms,
}
export interface AdminMultfilmsSaveRequire {
  type: typeof ADMIN_MULTFILMS_SAVE_REQUIRE,
  payload: Multfilms,
}

export interface AdminInfoFailure {
  type: typeof ADMIN_INFO_FAILURE
  payload: {error: boolean}
}

export type AdminInfoActions =
| AdminInfoTake
| AdminInfoTakeRequire
| AdminMultfilmsSave
| AdminMultfilmsSaveRequire
| AdminInfoFailure