import { Routes, Route } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";


function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<h1>Dashboard</h1>} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;