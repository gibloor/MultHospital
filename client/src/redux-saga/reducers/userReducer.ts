import { Reducer } from 'redux';

import {
  USER_AUTH,
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,

  USER_DEAUTH,
  USER_DEAUTH_REQUIRE,

  USER_TESTING,
  USER_TESTING_REQUARE,
  
  USER_FAILURE,
} from '../actions/userActions';

import { UserAuthActions, UserInfo } from '../types/userTypes';

interface InitialState extends UserInfo {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  id: 0,
  name: '',
  image: '',
  test_passed: false,
  involvement: '',
};

const userReducer: Reducer<InitialState, UserAuthActions> = (
  state = initialState,
  action: UserAuthActions,
) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        test_passed: action.payload.test_passed,
        involvement: action.payload.involvement,
        pending: false,
      };

    case USER_AUTH_REQUIRE:
      return {
        ...state,
        pending: true,
      };
      
    case USER_AUTO_AUTH_REQUIRE:
      return {
        ...state,
        pending: true
      };

    case USER_DEAUTH:
      return {
        ...state,
        id: 0,
        name: '',
        image: '',
        test_passed: false,
        involvement: '',
      };
    case USER_DEAUTH_REQUIRE:
      return {
        ...state,
        pending: true,
      };

    case USER_TESTING:
      return {
        ...state,
        test_passed: true,
        features: action.payload.features,
        pending: false,
      };
    case USER_TESTING_REQUARE:
      return {
        ...state,
        pending: true,
      };

    case USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
      
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;