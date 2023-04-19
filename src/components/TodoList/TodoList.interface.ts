import { Todo } from '../../types/todo.types';

export interface TodoListProps {
  items: Todo[];
  onItemCheck: (idx: string) => void;
  onItemRemove: (idx: string) => void;
}
