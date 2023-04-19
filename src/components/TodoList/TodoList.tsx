import React from 'react';
import { Paper, List } from '@mui/material';
import TodoListItem from '../TodoListItem';
import { Todo } from '../../types/Todo';

interface TodoListProps {
  items: Todo[];
  onItemCheck: (idx: string) => void;
  onItemRemove: (idx: string) => void;
}

export const TodoList: React.FC<TodoListProps> = React.memo(
  ({ items, onItemCheck, onItemRemove }) => (
    <>
      {items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'scroll' }}>
            {items.map((todo: Todo, idx) => (
              <TodoListItem
                {...todo}
                key={`TodoItem.${idx}`}
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
