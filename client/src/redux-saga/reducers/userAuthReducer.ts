import {
  USER_AUTH_REQUEST,
  USER_AUTH,
  USER_AUTH_FAILURE
} from "../actions/userActions";

import { UserAuthActions, UserInfo } from "../types/accountTypes";

const initialState: UserInfo = {
  pending: false,
  error: false,
  info: {
    id: 0,
    name: '',
    image: '', 
    features: [],
    acsessToken: '',
    test_passed: false,
    involvement: ''
  }
};

export default (state = initialState, action: UserAuthActions) => {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case USER_AUTH:
      return {
        ...state,
        pending: false,
        info: action.payload.info,
        error: null,
      };

    case USER_AUTH_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};