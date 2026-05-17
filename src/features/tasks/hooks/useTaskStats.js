import { useTasks } from "../context/TasksContext";

export function useTaskStats() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  return {
    totalTasks,
    completedTasks,
    pendingTasks,
  };
}