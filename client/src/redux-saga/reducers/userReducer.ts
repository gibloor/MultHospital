import { Reducer } from 'redux'

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

  USER_AVATAR_SAVE,
  USER_AVATAR_SAVE_REQUIRE,

  USER_ERROR_CLEANING,
  USER_ERROR_CLEANING_REQUIRE,
    
  USER_FAILURE,
} from '../actions/userActions'

import { UserAuthActions, UserInfo } from '../types/userTypes'

interface InitialState extends UserInfo {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  errorType: '',

  id: 0,
  name: '',
  test_passed: false,
  level: 0,
  login: '',
  permission: 1,
  avatar: '',
}

const userReducer: Reducer<InitialState, UserAuthActions> = (
  state = initialState,
  action: UserAuthActions,
) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        ...action.payload,
        pending: false,
      }
    case USER_AUTH_REQUIRE:
      return {
        ...state,
        pending: true,
      }
    case USER_AUTO_AUTH_REQUIRE:
      return {
        ...state,
        pending: true
      }

    case USER_DEAUTH:
      return {
        ...state,
        ...initialState,
      }
    case USER_DEAUTH_REQUIRE:
      return {
        ...state,
        pending: true,
      }

    case USER_TESTING:
      return {
        ...state,
        pending: false,
      }
    case USER_TESTING_REQUIRE:
      return {
        ...state,
        pending: true,
        test_passed: true,
      }
    
    case USER_INVOLVEMENT_CHANGE:
      return {
        ...state,
        pending: false,
        level: action.payload.level,
        test_passed: action.payload.level == 1,
      }
    case USER_INVOLVEMENT_CHANGE_REQUIRE:
      return {
        ...state,
        pending: true,
      }

    case USER_AVATAR_SAVE:
      return {
        ...state,
        avatar: action.payload.avatar,
        pending: false,
      }
    case USER_AVATAR_SAVE_REQUIRE:
      return {
        ...state,
        pending: true,
      }
  
    case USER_ERROR_CLEANING:
      return {
        ...state,
        errorType: '',
        pending: false,
      }
    case USER_ERROR_CLEANING_REQUIRE:
      return {
        ...state,
        pending: true,
      }

    case USER_FAILURE:
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

export default userReducer