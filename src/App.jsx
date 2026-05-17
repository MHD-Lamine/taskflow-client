import AppRoutes from "./app/router/AppRoutes";

import { TasksProvider } from "./features/tasks/context/TasksContext";
import { AuthProvider } from "./features/auth/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;