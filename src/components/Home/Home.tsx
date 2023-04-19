import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import { TodosActions } from '../../store/reducers/todoList';
import { getTodos } from '../../store/selectors';
import { Todo } from '../../types/todo.types';

export const Home = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(getTodos);

  const [inputValue, setInputValue] = useState('');
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    dispatch(TodosActions.getTodosRequest());
  }, [dispatch]);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const changeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const keyInput = useCallback(
    (event: React.KeyboardEvent, callback: (input: string) => void) => {
      if (event.key === 'Enter') {
        callback(inputValue);
      }
    },
    [inputValue]
  );

  const addTodo = useCallback(
    (input: string) => {
      const newItemId = +localData[localData.length - 1]?.id + 1 || 1;
      console.log('newItemId', newItemId);
      if (input !== '') {
        setLocalData([
          ...localData,
          {
            id: String(newItemId),
            title: input,
            completed: false,
          },
        ]);

        dispatch(TodosActions.addTodosRequest({ title: input }));
      }
    },
    [localData, setLocalData, dispatch]
  );

  const toggleTodo = useCallback(
    (idx: string) => {
      const current = localData.find((todo: Todo) => todo.id === idx);

      if (current) {
        setLocalData([
          ...localData.map((todo: Todo) =>
            todo.id === idx
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo
          ),
        ]);

        dispatch(
          TodosActions.updateTodosRequest({
            id: current.id,
            completed: current.completed,
          })
        );
      }
    },
    [localData, setLocalData, dispatch]
  );

  const deleteTodo = useCallback(
    (idx: string) => {
      setLocalData([...localData.filter((todo: Todo) => todo.id !== idx)]);
      dispatch(TodosActions.deleteTodosRequest({ id: idx }));
    },
    [localData, setLocalData, dispatch]
  );

  const clearInputAndAddTodo = useCallback(() => {
    setInputValue('');
    addTodo(inputValue);
  }, [inputValue, setInputValue, addTodo]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AddTodo
          inputValue={inputValue}
          onInputChange={changeInput}
          onButtonClick={clearInputAndAddTodo}
          onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
        />
        <TodoList
          items={localData}
          onItemCheck={toggleTodo}
          onItemRemove={deleteTodo}
        />
      </Box>
    </Box>
  );
};
