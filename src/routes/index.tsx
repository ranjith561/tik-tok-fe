import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
        <Route
          path="/login"
          element={token ? <Navigate to="/app/commision" replace /> : <Login />}
        />
        <Route
          path="/"
          element={token ? <Navigate to="/app/commision" replace /> : <Login />}
        />

        <Route
          path="/app"
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        >
          <Route path="commision" element={<CommisionReport />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
