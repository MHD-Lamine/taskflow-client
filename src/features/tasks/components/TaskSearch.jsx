import { useTasks } from "../context/TasksContext";

function TaskSearch() {
  const { search, dispatch } = useTasks();

  return (
    <input
      type="text"
      placeholder="Rechercher une tâche..."
      className="w-full bg-white border rounded-xl px-4 py-3 mb-6 outline-none"
      value={search}
      onChange={(e) =>
        dispatch({
          type: "SET_SEARCH",
          payload: e.target.value,
        })
      }
    />
  );
}

export default TaskSearch;