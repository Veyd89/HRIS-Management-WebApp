import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPages from "./pages/LoginPages";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
