import { call, put } from 'redux-saga/effects';
import { TodosActions } from '../reducers/todos';
import { deleteTodo } from '../../api/todos';

export function* deleteTodosSaga({ payload }: { payload: { id: string } }) {
  try {
    yield call(deleteTodo, payload.id);

    yield put(TodosActions.getTodosRequest());
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
