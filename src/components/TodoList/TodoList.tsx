import React, { FC, memo } from 'react';
import { Paper, List } from '@mui/material';
import TodoListItem from '../TodoListItem';
import { Todo } from '../../types/todo.types';
import { TodoListProps } from './TodoList.interface';

export const TodoList: FC<TodoListProps> = memo(
  ({ items, onItemCheck, onItemRemove }) => (
    <>
      {items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'scroll' }}>
            {items.map((todo: Todo, idx) => (
              <TodoListItem
                {...todo}
                key={`TodoItem.${todo.title + todo.id}`}
                divider={idx !== items.length - 1}
                onButtonClick={() => onItemRemove(todo.id)}
                onCheckBoxToggle={() => onItemCheck(todo.id)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )
);
