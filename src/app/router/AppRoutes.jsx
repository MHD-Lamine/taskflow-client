import { Routes, Route } from "react-router-dom";

import MainLayout from "../../shared/layouts/MainLayout";

import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import TasksPage from "../../features/tasks/pages/TasksPage";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;
