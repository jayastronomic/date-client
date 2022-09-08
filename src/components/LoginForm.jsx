import React, { Component } from "react";
import { login } from "../network/User";
import { Link } from "react-router-dom";
import { withNavigation } from "./withNavigation";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const authUser = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };

    login(authUser).then((authUser) => this.props.handleLogin(authUser));
    this.props.navigate("/");
  };
  render() {
    return (
      <form
        className="flex flex-col items-center space-y-6 w-[16rem]"
        onSubmit={this.handleSubmit}
      >
        <p className="font-light text-2xl text-[#ff64c4]">Log In</p>
        <input
          className="w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Email"
          value={this.state.email}
          name="email"
          type="email"
          onChange={this.handleChange}
        />
        <input
          className="w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Password"
          value={this.state.password}
          name="password"
          type="password"
          onChange={this.handleChange}
        />
        <button className="bg-[#ff64c4] w-full rounded bg-opacity-60 hover:bg-opacity-100 hover:text-white transition">
          Log in
        </button>
        <p className="text-sm text-white text-opacity-75">
          Don't have an account?{" "}
          <Link className="text-[#ff64c4] hover:underline" to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    );
  }
}

export default withNavigation(LoginForm);
