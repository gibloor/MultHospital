import { Reducer } from 'redux';

import {
  USER_AUTH,
  USER_AUTH_FAILURE,
  USER_DEAUTH,
  USER_AUTH_REQUARE,
  USER_TESTING,
  USER_TESTING_REQUARE,
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
    case USER_AUTH_REQUARE:
      return {
        ...state,
        pending: true,
      };

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

    case USER_AUTH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case USER_DEAUTH:
      return {
        ...state,
        id: 0,
        name: '',
        image: '',
        features: [],
        test_passed: false,
        involvement: '',
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
      
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;