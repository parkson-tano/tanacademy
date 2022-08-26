import React, { Component } from "react";
import axiosInstance from "../../AxiosApi";
import { Navigate } from "react-router-dom";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      redirect: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/register", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      });
      this.setState({ redirect: true });
      return response;
    } catch (error) {
      console.log(error.stack);
      this.setState({
        errors: error.response.data,
      });
    }
  };
  rederRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to="auth/login" />;
    }
  };
  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label>
            Username
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {/* {this.state.errors.username
                            ? this.state.errors.username
                            : null} */}
          </label>
        </div>
        <div className="form-control">
          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {/* {this.state.errors.email
                            ? this.state.errors.email
                            : null} */}
          </label>
        </div>
        <div className="form-control">
          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {/* {this.state.errors.password
                            ? this.state.errors.password
                            : null} */}
          </label>
        </div>
        {this.rederRedirect()}
        <button type="submit" className="btn-login">
          Sign Up
        </button>
      </form>
    );
  }
}
