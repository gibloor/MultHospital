import {
  ADMIN_INFO_TAKE,
  ADMIN_INFO_TAKE_REQUIRE,
  
  ADMIN_INFO_FAILURE,
} from "../actions/adminInfoActions";

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
export interface AdminInfo {
  multfilms: Multfilm[],
  staff: Staff[],
}

export interface AdminInfoTake {
  type: typeof ADMIN_INFO_TAKE;
  payload: AdminInfo;
}
export interface AdminInfoTakeRequire {
  type: typeof ADMIN_INFO_TAKE_REQUIRE;
}

export interface AdminInfoFailure {
  type: typeof ADMIN_INFO_FAILURE;
  payload: {error: boolean};
}

export type AdminInfoActions =
| AdminInfoTake
| AdminInfoTakeRequire
| AdminInfoFailure