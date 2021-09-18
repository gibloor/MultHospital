import { combineReducers } from "redux";
import userAuthReducer from './userAuthReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  questions: questionsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;