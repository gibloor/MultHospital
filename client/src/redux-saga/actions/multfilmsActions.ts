import {
  MultfilmTake,
  MultfilmTakeRequare,
  MultfilmTesting,
  MultfilmTestingRequire,
  ViewedSave,
  ViewedSaveRequest,
  MultfilmFailure,

  Multfilms,
  Id,
  Answer,
  UserAnswer,
  Viewed,
} from '../types/multfilmsTypes'

export const MULTFILM_TAKE = 'MULTFILM_TAKE'
export const MULTFILM_TAKE_REQUARE = 'MULTFILM_TAKE_REQUARE'

export const MULTFILM_TESTING = 'MULTFILM_TESTING'
export const MULTFILM_TESTING_REQUIRE = 'MULTFILM_TESTING_REQUIRE'

export const VIEWED_SAVE = 'VIEWED_SAVE'
export const VIEWED_SAVE_REQUEST = 'VIEWED_SAVE_REQUEST'

export const MULTFILM_FAILURE = 'MULTFILM_FAILURE'

export const multfilmsTake = (
  payload: Multfilms,
): MultfilmTake => ({
  type: MULTFILM_TAKE,
  payload,
})
export const multfilmTakeRequare = (
  payload: Id,
): MultfilmTakeRequare => ({
  type: MULTFILM_TAKE_REQUARE,
  payload,
})

export const multfilmTesting = (
  payload: Answer,
): MultfilmTesting => ({
  type: MULTFILM_TESTING,
  payload,
})
export const multfilmTestingRequire = (
  payload: UserAnswer,
): MultfilmTestingRequire => ({
  type: MULTFILM_TESTING_REQUIRE,
  payload,
})

export const viewedSave = (): ViewedSave => ({
  type: VIEWED_SAVE,
})
export const viewedSaveRequest = (
  payload: Viewed,
): ViewedSaveRequest => ({
  type: VIEWED_SAVE_REQUEST,
  payload,
})

export const multfilmsFailure = (
  payload: {error: boolean},
): MultfilmFailure => ({
  type: MULTFILM_FAILURE,
  payload,
})