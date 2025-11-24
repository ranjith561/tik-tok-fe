import { Outlet } from "react-router-dom";
import Header from "./Headers";

export default function AppLayout() {
  return (
    <div
      className="d-flex flex-column overflow-hidden"
      style={{ height: "100vh" }}>
      {/* HEADER (5% height) */}
      <div className="flex-shrink-0" style={{ height: "5vh" }}>
        <Header />
      </div>

      {/* CONTENT AREA (95% height, no scroll) */}
      <div
        className="flex-grow-1 overflow-hidden bg-light p-3"
        style={{ height: "95vh" }}>
        <Outlet />
      </div>
    </div>
  );
}
