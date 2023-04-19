import React, { FC, memo } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { TodoListItemProps } from './TodoListItem.interface';

export const TodoListItem: FC<TodoListItemProps> = memo(
  ({ divider, onButtonClick, onCheckBoxToggle, title, completed }) => (
    <ListItem divider={divider}>
      <Checkbox onClick={onCheckBoxToggle} checked={completed} disableRipple />
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);
