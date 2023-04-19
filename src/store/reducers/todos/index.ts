import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'types/Todo';
import { TodosState } from './types';

const initialState: TodosState = {
  data: [],
  isLoading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodosRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    addTodosRequest(state, action: PayloadAction<{ title: string }>) {
      state.isLoading = true;
      state.error = null;
    },
    updateTodosRequest(
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) {
      state.isLoading = true;
      state.error = null;
    },
    deleteTodosRequest(state, action: PayloadAction<{ id: string }>) {
      state.isLoading = true;
      state.error = null;
    },
    clearTodos(state) {
      state.data = [];
    },
    todosSuccess(state, action: PayloadAction<Todo[]>) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    todosFailure(state, action: PayloadAction<string>) {
      state.data = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export { actions as TodosActions };
export default reducer;
