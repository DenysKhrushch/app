import { ChangeEvent, KeyboardEvent } from 'react';

export interface AddTodoProps {
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputKeyPress: (e: KeyboardEvent) => void;
  onButtonClick: () => void;
}
