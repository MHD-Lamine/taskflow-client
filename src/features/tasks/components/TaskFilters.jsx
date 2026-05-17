import { useTasks } from "../context/TasksContext";

function TaskFilters() {
  const { filter, dispatch } = useTasks();

  const filters = [
    "all",
    "completed",
    "pending",
  ];

  return (
    <div className="flex gap-3 mb-6">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() =>
            dispatch({
              type: "SET_FILTER",
              payload: item,
            })
          }
          className={`px-4 py-2 rounded-xl capitalize ${
            filter === item
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;