import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {
  const { dispatch } = useTasks();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TASK",
      payload: task.id,
    });

    toast.success("Tâche supprimée");
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            dispatch({
              type: "TOGGLE_TASK",
              payload: task.id,
            })
          }
        />

        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : ""
          }
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={handleDelete}
        className="text-red-500"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default TaskCard;