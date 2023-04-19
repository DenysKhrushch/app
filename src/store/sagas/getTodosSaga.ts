import { call, put } from 'redux-saga/effects';
import { Todo } from '../../types/Todo';
import { getTodos } from '../../api/todos';
import { TodosActions } from '../reducers/todos';

export function* getTodosSaga() {
  try {
    const todos: Todo[] = yield call(getTodos);

    yield put(TodosActions.todosSuccess(todos));
  } catch (error: any) {
    yield put(TodosActions.todosFailure(error.message));
  }
}
