import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  render() {
    return (
      <form className="flex flex-col items-center space-y-6 w-[16rem]">
        <p className="font-light text-2xl text-[#ff64c4]">Log In</p>
        <input
          className="w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Email"
        />
        <input
          className="w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Password"
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

export default LoginForm;
