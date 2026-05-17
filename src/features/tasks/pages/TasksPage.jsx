import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilters from "../components/TaskFilters";
import TaskSearch from "../components/TaskSearch";

function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Tasks
      </h1>

      <TaskForm />

      <TaskSearch />

      <TaskFilters />

      <TaskList />
    </div>
  );
}

export default TasksPage;