import { Reducer } from 'redux'

import {
  ADMIN_INFO_TAKE,
  ADMIN_INFO_TAKE_REQUIRE,

  ADMIN_MULTFILMS_SAVE,
  ADMIN_MULTFILMS_SAVE_REQUIRE,

  ADMIN_INFO_FAILURE,
} from '../actions/adminInfoActions'

import { AdminInfoActions, AdminInfo } from '../types/adminInfoTypes'

interface InitialState extends AdminInfo {
  error: boolean,
  pending: boolean,
}
const initialState: InitialState = {
  error: false,
  pending: false,
  staff: [],
  multfilms: [],
}

const adminInfoReducer: Reducer<InitialState, AdminInfoActions> = (
  state = initialState,
  action: AdminInfoActions,
) => {
  switch (action.type) {
    case ADMIN_INFO_TAKE:
      return {
        ...state,
        ...action.payload,
        pending: false,
      }
    case ADMIN_INFO_TAKE_REQUIRE:
      return {
        ...state,
        pending: true,
      }

    case ADMIN_MULTFILMS_SAVE:
      return {
        ...state,
        multfilms: action.payload.multfilms,
        pending: false,
      }
    case ADMIN_MULTFILMS_SAVE_REQUIRE:
      return {
        ...state,
        pending: true,
      }  

    case ADMIN_INFO_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }

    default:
      return {
        ...state,
      }
  }
}

export default adminInfoReducer