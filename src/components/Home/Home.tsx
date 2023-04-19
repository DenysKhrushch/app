import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import { TodosActions } from '../../store/reducers/todos';
import { useInputValue } from '../../hooks/useInputValue';
import { useFetchedTodos } from '../../hooks/useFetchedTodos';

export const Home = () => {
  const dispatch = useDispatch();

  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { data, addTodo, toggleTodo, deleteTodo } = useFetchedTodos();

  const clearInputAndAddTodo = useCallback(() => {
    clearInput();
    addTodo(inputValue);
  }, [inputValue, clearInput, addTodo]);

  useEffect(() => {
    dispatch(TodosActions.getTodosRequest());
  }, [dispatch]);

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
          items={data}
          onItemCheck={toggleTodo}
          onItemRemove={deleteTodo}
        />
      </Box>
    </Box>
  );
};
