"use client";
import { TodoItemProps } from "@/types";
import { MdDone } from "react-icons/md";
import { RxTrash } from "react-icons/rx";

import Modal from "../Modal";
import { useAppDispatch } from "@/lib/hooks";
import { addToDoneTasks, handleDelete } from "@/lib/todos/todosSlice";
const TodoItem = ({ todo, id }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row justify-between items-center bg-custom-bg w-[432px] h-[75px] rounded-xl ml-[56px]">
      <h3 className="text-border-color ml-5">{todo} </h3>
      <div className="flex mr-5 gap-2">
        <MdDone
          className="text-border-color text-2xl"
          onClick={() => {
            dispatch(addToDoneTasks(id));
          }}
        />
        <Modal
          handleDelete={() => dispatch(handleDelete({ id, type: "todos" }))}
          trigger={<RxTrash className="text-border-color text-2xl" />}
        />
      </div>
    </div>
  );
};

export default TodoItem;
