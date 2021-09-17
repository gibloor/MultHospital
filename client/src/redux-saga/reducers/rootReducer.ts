import { combineReducers } from "redux";
import userAuthReducer from './userAuthReducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;