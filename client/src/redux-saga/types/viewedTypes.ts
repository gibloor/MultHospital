import {
  VIEWED_SAVE,
  VIEWED_SAVE_REQUEST,
  VIEWED_FAILURE,
} from "../actions/viewedActions";

export interface Viewed {
  userId: number,
  viewed: string[],
}
export interface ViewedSaveRequest {
  type: typeof VIEWED_SAVE_REQUEST;
  payload: Viewed;
}
export interface ViewedSave {
  type: typeof VIEWED_SAVE;
}
export interface ViewedFailure {
  type: typeof VIEWED_FAILURE;
  payload: {error: boolean};
}

export type ViewedActions =
| ViewedSaveRequest
| ViewedSave
| ViewedFailure;