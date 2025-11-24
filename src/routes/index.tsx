import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../components/NotFound";
import CommisionReport from "../components/CommisionReport";

export default function AppRoutes() {
  const token = localStorage.getItem("access_token");

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Parent Layout /app */}
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }>
          <Route path="commision" element={<CommisionReport />} />
        </Route>

        <Route path="*" element={token ? <NotFound /> : <Login />} />
      </Routes>
    </Router>
  );
}
