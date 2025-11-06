//ALL CODE BELOW ADDED (FILE STARTED BLANK)

import React, { useEffect, useState } from "react";
import { loginUser } from "./AuthService";
import AuthForm from "./AuthForm.js";
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const [doLogin, setDoLogin] = useState(false);

  useEffect(() => {
    if (doLogin) {
      loginUser(credentials.email, credentials.password).then((user) => {
        if (user) {
          alert("Login successful");
          navigate("/user");
        }
        setDoLogin(false);
      });
    }
  }, [doLogin, credentials, navigate]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setcredentials((s) => ({ ...s, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDoLogin(true);
  };

  return (
    <AuthForm user={credentials}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
    />
  );
};

export default AuthLogin;
