import { call, put } from 'redux-saga/effects';
import { TodosActions } from '../reducers/todoList';
import { deleteTodo } from '../../api/api';

export function* deleteTodosSaga({ payload }: { payload: { id: string } }) {
  try {
    yield call(deleteTodo, payload.id);
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
