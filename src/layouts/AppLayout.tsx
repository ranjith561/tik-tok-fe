import { Outlet } from "react-router-dom";
import Header from "./Headers";

export default function AppLayout() {
  return (
    <div
      className="d-flex flex-column overflow-hidden"
      style={{ height: "100vh" }}>

      <div className="flex-shrink-0" style={{ height: "5vh" }}>
        <Header />
      </div>

      <div
        className="flex-grow-1 overflow-hidden bg-light p-3"
        style={{ height: "95vh" }}>
        <Outlet />
      </div>
    </div>
  );
}
