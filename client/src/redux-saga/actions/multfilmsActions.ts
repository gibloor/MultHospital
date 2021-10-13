import {
  MultfilmTake,
  MultfilmFailure,
  MultfilmTakeRequare,
  Multfilms,
  Id,
} from '../types/multfilmsTypes';

export const MULTFILM_TAKE = 'MULTFILM_TAKE';
export const MULTFILM_FAILURE = 'MULTFILM_FAILURE';
export const MULTFILM_TAKE_REQUARE = 'MULTFILM_TAKE_REQUARE';

export const multfilmsTake = (
  payload: Multfilms,
): MultfilmTake => ({
  type: MULTFILM_TAKE,
  payload,
});

export const multfilmTakeRequare = (
  payload: Id,
): MultfilmTakeRequare => ({
  type: MULTFILM_TAKE_REQUARE,
  payload,
});

export const multfilmsFailure = (
  payload: {error: boolean},
): MultfilmFailure => ({
  type: MULTFILM_FAILURE,
  payload,
});