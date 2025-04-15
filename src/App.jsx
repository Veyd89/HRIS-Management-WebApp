import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { useSelector } from "react-redux";

const App = () => {
  const ProtectedRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
  };
  return (
    <div>
      <Routes>
        <Route path="/auth/:type" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* nanti elemen home dll dibungkus di dalam sini */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default App;
