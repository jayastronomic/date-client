import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { createUser } from "../network/User";
import { withNavigation } from "./withNavigation";

const emptyInput =
  "font-light w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition";

const nonEmptyInput =
  "font-medium w-full px-2 py-2 bg-white rounded-lg text-black text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      },
    };
    createUser(newUser).then((newUser) => console.log(newUser));

    this.setState({
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    });

    this.props.navigate("/");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-col items-center space-y-6 w-[16rem]"
      >
        <p className="font-light text-2xl text-[#ff64c4]">Sign Up</p>
        <input
          className={this.state.email.length >= 1 ? nonEmptyInput : emptyInput}
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
        />
        <input
          className={this.state.name.length >= 1 ? nonEmptyInput : emptyInput}
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
        />
        <input
          className={
            this.state.password.length >= 1 ? nonEmptyInput : emptyInput
          }
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
        />
        <input
          className={
            this.state.passwordConfirmation.length >= 1
              ? nonEmptyInput
              : emptyInput
          }
          placeholder="Confirm password"
          name="passwordConfirmation"
          onChange={this.handleChange}
          value={this.state.passwordConfirmation}
          type="password"
        />
        <button
          className="font-light bg-[#ff64c4] w-full rounded bg-opacity-60 hover:bg-opacity-100 hover:text-white transition focus:outline-none"
          type="submit"
        >
          Create Account
        </button>
        <p className="text-sm text-white text-opacity-75 text-center">
          Already have an account?{" "}
          <Link className=" text-[#ff64c4] hover:underline" to="/login">
            Log in
          </Link>
        </p>
      </form>
    );
  }
}

export default withNavigation(SignupForm);
