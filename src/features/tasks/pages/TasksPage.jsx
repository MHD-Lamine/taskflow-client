import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Tasks
      </h1>

      <TaskForm />

      <TaskList />
    </div>
  );
}

export default TasksPage;