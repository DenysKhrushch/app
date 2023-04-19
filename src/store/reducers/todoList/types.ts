import { Todo } from '../../../types/todo.types';

export interface TodosState {
  data: Todo[];
  isLoading: boolean;
  error: string | null;
}
