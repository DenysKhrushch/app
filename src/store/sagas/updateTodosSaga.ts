import { call, put } from 'redux-saga/effects';
import { toggleTodo } from '../../api/todos';
import { TodosActions } from '../reducers/todos';

export function* updateTodosSaga({
  payload,
}: {
  payload: { id: string; completed: boolean };
}) {
  try {
    yield call(toggleTodo, payload.id, payload.completed);

    yield put(TodosActions.getTodosRequest());
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
