import { useParams, Navigate } from "react-router-dom";
import AuthLayouts from "../components/layouts/AuthLayouts";

const AuthPage = () => {
  const { type } = useParams();
  const validTypes = ["login", "sign-up"];

  // Jika `type` tidak valid, arahkan ke login atau tampilkan 404
  if (!validTypes.includes(type)) {
    return <Navigate to="/auth/login" />;
    // atau: return <NotFoundPage />;
  }

  return <AuthLayouts type={type} />;
};

export default AuthPage;
