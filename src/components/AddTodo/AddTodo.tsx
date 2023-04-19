import React, { FC, memo } from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';
import { AddTodoProps } from './AddTodo.interface';

export const AddTodo: FC<AddTodoProps> = memo(
  ({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onInputKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            style={{ height: 56 }}
            color="secondary"
            variant="outlined"
            disabled={!inputValue}
            onClick={onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
);
