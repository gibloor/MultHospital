import { combineReducers } from 'redux';
import userReducer from './userAuthReducer';
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer';

const rootReducer = combineReducers({
  userAuth: userReducer,
  questions: questionsReducer,
  answer: answersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;