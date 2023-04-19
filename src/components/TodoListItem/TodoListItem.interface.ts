export interface TodoListItemProps {
  divider: boolean;
  onCheckBoxToggle: () => void;
  completed: boolean;
  title: string;
  onButtonClick?: () => void;
}
