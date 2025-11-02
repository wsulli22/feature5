//ALL CODE BELOW ADDED (FILE STARTED BLANK)

import React, { useEffect, useState } from "react";
import { loginUser } from "./AuthService";
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

  const onChange = (e) => {
    const { name, value } = e.target;
    setcredentials((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDoLogin(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="password"
            required
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default AuthLogin;
