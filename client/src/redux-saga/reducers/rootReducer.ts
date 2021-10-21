import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';
import multfilmsReducer from './multfilmsReducer';
import viewedReducer from './viewedReducer';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionsReducer,
  multfilms: multfilmsReducer,
  viewed: viewedReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;