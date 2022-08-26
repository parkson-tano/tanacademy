import React from "react";
import { Navigate } from "react-router-dom";

function Login() {
  return (
    <div className="col-md-6 col-md-offset-3">
      <form name="form">
        <div
          className={
            "form-group"
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <div
          className= "form-group"
          
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          
        </div>
      </form>
    </div>
  );
}

export default Login