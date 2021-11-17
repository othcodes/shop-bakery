import React, { useState } from "react";
import { login } from "../../services/api";
import "./Login.scss";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      password: password,
    };
    login(data)
      .then(() => (window.location = "/"))
      .catch((err) => alert(err));
  };

  return (
    <div className="loginForm">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col col-sm-6">
          <form onSubmit={submitLogin}>
            <p className="font-italic mb-0 small text-secondary">
              Username: admin
            </p>
            <p className="font-italic mb-0 small text-secondary">
              Password: admin
            </p>
            <div className="form-group mt-2">
              <input
                className="form-control form-control-lg"
                name="name"
                placeholder="Username"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-lg btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
