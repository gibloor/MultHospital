import {
  PROFILE_TAKE,
  PROFILE_TAKE_REQUIRE,
  
  PROFILE_FAILURE,
} from "../actions/profileActions";

export interface Id {
  id: number,
}
export interface Achievement {
  title: string,
  degree: string,
  viewed: boolean,
}
export interface Statistic {
  title: string,
  count: number,
}
export interface Profile extends Id {
  achievements: Achievement[],
  statistic: Statistic[],
  avatar: string,
}

export interface ProfileTake {
  type: typeof PROFILE_TAKE;
  payload: Profile;
}
export interface ProfileTakeRequire {
  type: typeof PROFILE_TAKE_REQUIRE;
  payload: Id;
}

export interface ProfileFailure {
  type: typeof PROFILE_FAILURE;
  payload: {error: boolean};
}

export type ImagesActions =
| ProfileTake
| ProfileTakeRequire
| ProfileFailure