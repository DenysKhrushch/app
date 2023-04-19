import { Todo } from '../../../types/Todo';

export interface TodosState {
  data: Todo[];
  isLoading: boolean;
  error: string | null;
}
