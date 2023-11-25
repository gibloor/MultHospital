import {
  MULTFILM_TAKE,
  MULTFILM_TAKE_REQUARE,

  MULTFILM_TESTING,
  MULTFILM_TESTING_REQUIRE,

  VIEWED_SAVE,
  VIEWED_SAVE_REQUEST,

  MULTFILM_FAILURE,
} from "../actions/multfilmsActions"

export interface Character {
  name: string,
  id: number,
}

export interface Multfilm {
  id: number,
  level: number,
  name: string,
  serial: number,
  watched: boolean,
  viewed: boolean,
  delay: number,
  characters: Character[],
  [key: string]: string | number | boolean | Character[]
}

export interface Id {
  id: number,
}
export interface MultfilmList {
  [category: string]: Multfilm[],
}
export interface Multfilms {
  multfilms: MultfilmList
}

export interface Answer {
  topic: string,
  level: number,
}
export interface UserAnswer {
  userId: number,
  userLevel: number,
  multLevel?: number,
  features: string[],
  topic: string,
}
export interface Viewed {
  userId: number,
  viewed: string[],
}

export interface MultfilmTakeRequare {
  type: typeof MULTFILM_TAKE_REQUARE
  payload: Id
}
export interface MultfilmTake {
  type: typeof MULTFILM_TAKE
  payload: Multfilms
}

export interface MultfilmTesting {
  type: typeof MULTFILM_TESTING,
  payload: Answer,
}
export interface MultfilmTestingRequire {
  type: typeof MULTFILM_TESTING_REQUIRE,
  payload: UserAnswer,
}

export interface ViewedSaveRequest {
  type: typeof VIEWED_SAVE_REQUEST
  payload: Viewed
}
export interface ViewedSave {
  type: typeof VIEWED_SAVE
}

export interface MultfilmFailure {
  type: typeof MULTFILM_FAILURE
  payload: {error: boolean}
}

export type MultfilmsActions =
| MultfilmTakeRequare
| MultfilmTake
| MultfilmTestingRequire
| MultfilmTesting
| ViewedSaveRequest
| ViewedSave
| MultfilmFailure