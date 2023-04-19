import { combineReducers } from '@reduxjs/toolkit';
import todoList from './todoList';

const rootReducer = combineReducers({
  todoList,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
