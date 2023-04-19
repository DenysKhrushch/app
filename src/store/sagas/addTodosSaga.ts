import { call, put } from 'redux-saga/effects';
import { addTodo } from '../../api/api';
import { TodosActions } from '../reducers/todoList';

export function* addTodosSaga({ payload }: { payload: { title: string } }) {
  try {
    yield call(addTodo, payload.title);
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
