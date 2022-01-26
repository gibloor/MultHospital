import {
  AVATAR_TAKE,
  AVATAR_TAKE_REQUIRE,
  
  IMAGES_FAILURE,
} from "../actions/imagesActions";

export interface TypeImg {
  type: string,
}

export interface User extends TypeImg {
  id: number,
}
export interface Avatar extends TypeImg {
  img: string,
}
export interface ImgOptions {
  ownAvatar: string,
  strangerAvatar: string,
}

export interface AvatarTakeRequire {
  type: typeof AVATAR_TAKE_REQUIRE;
  payload: User;
}
export interface AvatarTake {
  type: typeof AVATAR_TAKE;
  payload: Avatar;
}
export interface ImagesFailure {
  type: typeof IMAGES_FAILURE;
  payload: {error: boolean};
}

export type ImagesActions =
| AvatarTakeRequire
| AvatarTake
| ImagesFailure