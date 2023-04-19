import React, { useState } from 'react';

export const useInputValue = (initialValue: string = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event: React.ChangeEvent<HTMLInputElement>) =>
      setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (
      event: React.KeyboardEvent,
      callback: (input: string) => void
    ) => {
      if (event.key === 'Enter') {
        callback(inputValue);
        return true;
      }

      return false;
    },
  };
};
