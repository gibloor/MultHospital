import { Reducer } from 'redux';

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
  image: false,
  test_passed: false,
  involvement: '',
  login: '',
  position: '',
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
        login: action.payload.login,
        position: action.payload.position,
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
        image: false,
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
        features: action.payload.features,
        pending: false,
      };
    case USER_TESTING_REQUIRE:
      return {
        ...state,
        pending: true,
        test_passed: true,
      };
    
    case USER_INVOLVEMENT_CHANGE:
      return {
        ...state,
        pending: false,
        involvement: action.payload.involvement
      };
    case USER_INVOLVEMENT_CHANGE_REQUIRE:
      return {
        ...state,
        pending: true,
      };

    case USER_IMG_CHANGE:
      return {
        ...state,
        pending: false,
        image: true,
      };
    case USER_IMG_CHANGE_REQUIRE:
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