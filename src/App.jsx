import AppRoutes from "./app/router/AppRoutes";

import { TasksProvider } from "./features/tasks/context/TasksContext";

function App() {
  return (
    <TasksProvider>
      <AppRoutes />
    </TasksProvider>
  );
}

export default App;
