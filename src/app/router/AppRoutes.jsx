import { Routes, Route } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";


function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;