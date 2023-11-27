import { Reducer } from 'redux'

import {
  PROFILE_TAKE,
  PROFILE_TAKE_REQUIRE,

  PROFILE_FAILURE
} from '../actions/profileActions'

import { ImagesActions, Profile } from '../types/profileTypes'

interface InitialState extends Profile {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  id: 0,
  avatar: '',
  statistics: {},
}

const profileReducer: Reducer<InitialState, ImagesActions> = (
  state = initialState,
  action: ImagesActions,
) => {
  switch (action.type) {
    case PROFILE_TAKE:
      return {
        ...state,
        id: action.payload.id,
        avatar: action.payload.avatar,
        statistics: action.payload.statistics,
        pending: false,
      }
    case PROFILE_TAKE_REQUIRE:
      return {
        ...state,
        pending: true,
      }

    case PROFILE_FAILURE:
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

export default profileReducer