import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';
import multfilmsReducer from './multfilmsReducer';
import viewedReducer from './viewedReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionsReducer,
  multfilms: multfilmsReducer,
  viewed: viewedReducer,
  profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;