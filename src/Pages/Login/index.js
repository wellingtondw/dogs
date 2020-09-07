import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginForm from "../../Components/login/LoginForm";
import LoginCreate from "../../Components/login/LoginCreate";
import LoginPasswordLost from "../../Components/login/LoginPasswordLost";
import LoginPasswordReset from "../../Components/login/LoginPasswordReset";

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />} />
        <Route path="/recovery" element={<LoginPasswordLost />} />
        <Route path="/reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
