import React from "react";
import Form from "./common/form";
import { register } from "./../services/userService";
import auth from "../services/authService";

const Joi = require("joi-browser");

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    password: Joi.string().required().min(5).label("Password"),
    email: Joi.string().email().required().label("Email"),
    name: Joi.string().required(),
  };

  doSubmit = async () => {
    try {
      const { headers } = await register(this.state.data);
      auth.loginWithJwt(headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = "email already registered"; //ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("email", "email", "Email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default RegisterForm;
