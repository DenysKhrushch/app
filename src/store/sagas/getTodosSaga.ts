import { call, put } from 'redux-saga/effects';
import { getTodos } from '../../api/api';
import { TodosActions } from '../reducers/todoList';
import { Todo } from '../../types/todo.types';

export function* getTodosSaga() {
  try {
    const todos: Todo[] = yield call(getTodos);

    yield put(TodosActions.todosSuccess(todos));
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
