import { TodosActions } from '../store/reducers/todos';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/selectors';

export const useFetchedTodos = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(getTodos);

  return {
    data,
    addTodo: (title: string) => {
      title !== '' && dispatch(TodosActions.addTodosRequest({ title }));
    },
    toggleTodo: (idx: string) => {
      const current = data.find((todo) => todo.id === idx);

      current &&
        dispatch(
          TodosActions.updateTodosRequest({
            id: current.id,
            completed: current.completed,
          })
        );
    },
    deleteTodo: (idx: string) => {
      dispatch(TodosActions.deleteTodosRequest({ id: idx }));
    },
  };
};
