import { useState } from "react";
import { useTasks } from "../context/TasksContext";

function TaskForm() {
  const [title, setTitle] = useState("");

  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        className="flex-1 bg-white border rounded-xl px-4 py-3 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="bg-black text-white px-6 rounded-xl">
        Ajouter
      </button>
    </form>
  );
}

export default TaskForm;