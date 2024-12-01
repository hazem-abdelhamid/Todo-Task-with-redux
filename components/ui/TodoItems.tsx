import TodoItem from "./TodoItem";
import { TodoItemsProps } from "@/types";
const TodoItems = ({ todos }: TodoItemsProps) => {
  return (
    <section className="mt-[56px] mb-12 max-h-[300px] overflow-auto">
      <h2 className="text-white text-[16px] ml-[57px] mb-4">
        Tasks todo - {todos.length}
      </h2>
      {/* container hold all todos */}
      <div className="flex flex-col gap-4">
        {todos.map((todo, id) => (
          <TodoItem todo={todo} key={id} id={id} />
        ))}
      </div>
    </section>
  );
};

export default TodoItems;
