import { takeLatest } from 'redux-saga/effects';
import { getTodosSaga } from './getTodosSaga';
import { TodosActions } from '../reducers/todos';
import { updateTodosSaga } from './updateTodosSaga';
import { deleteTodosSaga } from './deleteTodosSaga';
import { addTodosSaga } from './addTodosSaga';

export default function* rootSaga() {
  yield takeLatest(TodosActions.getTodosRequest, getTodosSaga);
  yield takeLatest(TodosActions.addTodosRequest, addTodosSaga);
  yield takeLatest(TodosActions.updateTodosRequest, updateTodosSaga);
  yield takeLatest(TodosActions.deleteTodosRequest, deleteTodosSaga);
}
