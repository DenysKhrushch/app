import { call, put } from 'redux-saga/effects';
import { toggleTodo } from '../../api/api';
import { TodosActions } from '../reducers/todoList';

export function* updateTodosSaga({
  payload,
}: {
  payload: { id: string; completed: boolean };
}) {
  try {
    yield call(toggleTodo, payload.id, payload.completed);
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
