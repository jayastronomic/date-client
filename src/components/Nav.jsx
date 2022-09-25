import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../network/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import EditProfile from "./EditProfile";

const Nav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    logout().then((authUser) => props.handleLogout(authUser));
    navigate("/login");
  };
  return (
    <div className="flex flex-col min-h-screen ">
      <nav className="flex justify-around text-gray-400 text-2xl py-2">
        <button onClick={handleLogout} className="text-sm border px-2">
          Log off
        </button>
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "text-[#ff64c4]" : ""}
        >
          <FontAwesomeIcon icon={solid("user")} />
        </Link>
        <div className="relative">
          <FontAwesomeIcon
            className="absolute left-2"
            icon={regular("square")}
          />
          <FontAwesomeIcon icon={solid("square")} />
        </div>
        <FontAwesomeIcon icon={solid("heart")} />
        <FontAwesomeIcon icon={solid("comments")} />
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
