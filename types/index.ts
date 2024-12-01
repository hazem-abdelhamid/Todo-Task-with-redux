export interface TodoItemsProps {
  todos: string[];
}
export interface TodoItemProps {
  todo: string;
  id: number;
}
export interface DoneTodosProps {
  doneTodos: string[];
}

export interface TodosState {
  todos: string[];
  enteredValue: string;
  doneTodos: string[];
  isClient: boolean;
}
