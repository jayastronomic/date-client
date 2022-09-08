import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { loginStatus } from "./network/User";
import Home from "./pages/Home";
import Registrations from "./pages/Registrations";
import Nav from "./components/Nav";
import { withNavigation } from "./components/withNavigation";
import Profile from "./pages/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authUser: {},
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    loginStatus().then((authUser) => {
      if (authUser.logged_in) {
        this.handleLogin(authUser);
        return true;
      } else {
        this.handleLogout(authUser);
        this.props.navigate("/login");
        return false;
      }
    });
  };

  handleLogin = (authUser) => {
    this.setState({
      authUser,
    });
  };

  handleLogout = (authUser) => {
    this.setState({
      authUser: authUser.user || {},
    });
  };

  render() {
    console.log(this.state.authUser);
    return (
      <Routes>
        <Route
          path="/login"
          element={
            <Registrations
              authUser={this.state.authUser}
              handleLogin={this.handleLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={<Registrations authUser={this.state.authUser} />}
        />
        <Route path="/" element={<Nav handleLogout={this.handleLogout} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile authUser={this.state.authUser} />}
          />
        </Route>
      </Routes>
    );
  }
}

export default withNavigation(App);
