import { Routes, Route } from "react-router-dom";

import MainLayout from "../../shared/layouts/MainLayout";

import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import TasksPage from "../../features/tasks/pages/TasksPage";

import LoginPage from "../../features/auth/pages/LoginPage";

import ProtectedRoute from "../../shared/components/ProtectedRoute";
import RegisterPage from "../../features/auth/pages/RegisterPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TasksPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AppRoutes;
