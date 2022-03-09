import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';
import multfilmsReducer from './multfilmsReducer';
import profileReducer from './profileReducer';
import adminInfoReducer from './adminInfoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionsReducer,
  multfilms: multfilmsReducer,
  profile: profileReducer,
  adminInfo: adminInfoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;