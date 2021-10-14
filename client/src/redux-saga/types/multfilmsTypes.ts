import {
  MULTFILM_TAKE,
  MULTFILM_TAKE_REQUARE,
  MULTFILM_FAILURE,
} from "../actions/multfilmsActions";

export interface Multfilm {
  id: number,
  logo: string,
  involvement: string,
  name: string,
  serial_number: string,
  watched: boolean,
  viewed: boolean,
  displayed: boolean,
}
export interface Id {
  id: number,
}
export interface MultfilmList {
  [category:string]: Multfilm[],
}
export interface Multfilms {
  multfilms: MultfilmList
}
export interface MultfilmTakeRequare {
  type: typeof MULTFILM_TAKE_REQUARE;
  payload: Id;
}
export interface MultfilmTake {
  type: typeof MULTFILM_TAKE;
  payload: Multfilms;
}
export interface MultfilmFailure {
  type: typeof MULTFILM_FAILURE;
  payload: {error: boolean};
}

export type MultfilmsActions =
| MultfilmTakeRequare
| MultfilmTake
| MultfilmFailure;