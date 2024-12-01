import { DoneTodosProps } from "@/types";
import { GrRevert } from "react-icons/gr";
import { RxTrash } from "react-icons/rx";
import Modal from "../Modal";
import { useAppDispatch } from "@/lib/hooks";
import { handleDelete, handleRevert } from "@/lib/todos/todosSlice";
const DoneTasks = ({ doneTodos }: DoneTodosProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="mt-[56px]">
      <h2 className="text-white text-[16px] ml-[57px] mb-4">
        Done - {doneTodos.length}
      </h2>
      <div className="flex flex-col gap-3">
        {doneTodos.map((todo, id) => (
          <div
            key={id}
            className="flex flex-row justify-between items-center bg-custom-bg w-[432px] h-[75px] rounded-xl ml-[56px] gap-3 "
          >
            <h3 className="text-done-color ml-5 line-through">{todo}</h3>
            <div className="flex mr-5 gap-2">
              <GrRevert
                className="text-border-color text-2xl"
                onClick={() => dispatch(handleRevert(id))}
              />
              <Modal
                handleDelete={() =>
                  dispatch(handleDelete({ id, type: "doneTasks" }))
                }
                trigger={<RxTrash className="text-border-color text-2xl" />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoneTasks;
