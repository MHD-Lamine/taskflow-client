import { useTasks } from "../context/TasksContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks, filter, search } =
    useTasks();

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "completed"
        ? task.completed
        : filter === "pending"
        ? !task.completed
        : true;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="bg-white p-10 rounded-2xl text-center text-gray-500">
        Aucune tâche
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;