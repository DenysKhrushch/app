import { call, put } from 'redux-saga/effects';
import { addTodo } from '../../api/todos';
import { TodosActions } from '../reducers/todos';

export function* addTodosSaga({ payload }: { payload: { title: string } }) {
  try {
    yield call(addTodo, payload.title);

    yield put(TodosActions.getTodosRequest());
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
