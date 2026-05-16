import { useTasks } from "../context/TasksContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="bg-white p-10 rounded-2xl text-center text-gray-500">
        Aucune tâche
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;