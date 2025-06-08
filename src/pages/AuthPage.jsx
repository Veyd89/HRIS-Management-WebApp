/* eslint-disable no-unused-vars */
import { useParams, Navigate } from "react-router-dom";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { useSelector } from "react-redux";

const AuthPage = () => {
  const { type } = useParams();
  const validTypes = ["login", "sign-up"];

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  if (isAuth) return <Navigate to={"/"} replace />;
  // Jika `type` tidak valid, arahkan ke login atau tampilkan 404
  if (!validTypes.includes(type)) {
    // return <Navigate to="/auth/login" />;
    return <h1>Not Found</h1>;
    // atau: return <NotFoundPage />;
  }

  return (
    <div className="">
      <AuthLayouts type={type} />
    </div>
  );
};

export default AuthPage;
