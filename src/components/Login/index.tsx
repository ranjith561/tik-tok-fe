import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem(
      "access_token",
      "!@ABCDEFabcdef123GHIJKLstuvwxyz$%890MNOPQR456ghijkl4567STUVWXYZmnopqr&*^"
    );

    navigate("/app/commision");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
