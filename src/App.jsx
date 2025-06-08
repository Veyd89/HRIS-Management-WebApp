import React, { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { useSelector } from "react-redux";
import Test from "./pages/Test";
// import { getCookie } from "./utils/cookie";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const ProtectedRoute = () => {
    return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
  };
  // console.log(getCookie());
  return (
    <div className="bg-[#E5EDF9] min-h-screen">
      <Routes>
        <Route
          path="/auth"
          element={
            isAuth ? (
              <Navigate to={"/"} replace />
            ) : (
              <Navigate to={"/auth/login"} replace />
            )
          }
        />
        <Route path="/auth/:type" element={<AuthPage />} />
        <Route element={<Test />} path="/test" />
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
