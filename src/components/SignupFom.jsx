import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupForm extends Component {
  render() {
    return (
      <form className="flex flex-col items-center space-y-6 w-[16rem]">
        <p className="font-light text-2xl text-[#ff64c4]">Sign Up</p>
        <input
          className="font-light w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Email"
        />
        <input
          className="font-light w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Name"
        />
        <input
          className="font-light w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Password"
        />
        <input
          className="font-light w-full px-2 py-2 bg-black rounded-lg text-white text-opacity-60 bg-opacity-50 focus:outline-none hover:bg-opacity-70 focus:bg-opacity-70 transition"
          placeholder="Confirm password"
        />
        <button className="font-light bg-[#ff64c4] w-full rounded bg-opacity-60 hover:bg-opacity-100 hover:text-white transition">
          Create Account
        </button>
        <p className="text-white text-opacity-75 text-center">
          Already have an account?{" "}
          <Link className="text-sm text-[#ff64c4] hover:underline" to="/login">
            Log in
          </Link>
        </p>
      </form>
    );
  }
}

export default SignupForm;
