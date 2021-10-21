import {
  Viewed,
  ViewedSaveRequest,
  ViewedSave,
  ViewedFailure,
} from '../types/viewedTypes';

export const VIEWED_SAVE = 'VIEWED_TAKE';
export const VIEWED_FAILURE = 'VIEWED_FAILURE';
export const VIEWED_SAVE_REQUEST = 'VIEWED_SAVE_REQUEST';

export const viewedSave = (): ViewedSave => ({
  type: VIEWED_SAVE,
});

export const viewedSaveRequest = (
  payload: Viewed,
): ViewedSaveRequest => ({
  type: VIEWED_SAVE_REQUEST,
  payload,
});

export const viewedFailure = (
  payload: {error: boolean},
): ViewedFailure => ({
  type: VIEWED_FAILURE,
  payload,
});