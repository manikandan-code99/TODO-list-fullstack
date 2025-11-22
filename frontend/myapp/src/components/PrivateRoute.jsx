// src/components/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((s) => s.user.isAuthenticated);
  return isAuth ? children : <Navigate to="/login" replace />;
}
