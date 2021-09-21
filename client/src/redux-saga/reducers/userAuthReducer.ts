import { Reducer } from 'redux';

import {
  USER_AUTH,
  USER_AUTH_FAILURE,
  USER_DEAUTH,
  USER_REQUARE,
  USER_TEST_COMPLETE,
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
  features: ['ANYTHING'],
  acsessToken: '',
  test_passed: false,
  involvement: '',
};

const userReducer: Reducer<InitialState, UserAuthActions> = (
  state = initialState,
  action: UserAuthActions,
) => {
  switch (action.type) {
    case USER_REQUARE:
      return {
        ...state,
        pending: true,
      };
    case USER_AUTH:
      console.log(action.payload);
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        features: action.payload.features,
        acsessToken: action.payload.acsessToken,
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
        feature: [],
        acsessToken: '',
        test_passed: false,
        involvement: '',
      };
    case USER_TEST_COMPLETE:
      return {
        ...state,
        test_passed: true,
        feature: action.payload.feature,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;