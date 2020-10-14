import React from "react";
import Form from "./common/form";
import auth from "../services/authService";
import { Axios } from "axios";
import { toast } from "react-toastify";

const Joi = require("joi-browser");

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = "/";
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  confirm = () => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/login/confirmed") {
      // toast("Your Account is Confirmed");
      return (
        <div className="alert alert-success" role="alert">
          Your account is Activated! Please log in.
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.confirm()}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
