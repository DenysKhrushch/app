import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos';

const rootReducer = combineReducers({
  todos,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
