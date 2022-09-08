import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useTransition } from "react";

import EditProfile from "../components/EditProfile";

export const Profile = (props) => {
  const [active, setActive] = useState(false);
  const [initial, setInitial] = useState("top-[100%]");
  return (
    <div className="flex flex-col flex-1 py-4 overflow-hidden">
      <div className="flex justify-center">
        <FontAwesomeIcon
          className="text-gray-500 text-[10rem]"
          icon={solid("user-circle")}
        />
      </div>
      <div className="flex text-3xl justify-around pt-4">
        <FontAwesomeIcon
          className="text-gray-500 hover:text-[#ff64c4] transition"
          icon={solid("pen")}
        />
        <p className="text-xl text-gray-500 capitalize">
          {props.authUser.name}, {props.authUser.age}
        </p>
        <button
          onClick={() => {
            setActive(true);
            setInitial("animate-slide-down");
          }}
        >
          <FontAwesomeIcon
            className="text-gray-500 hover:text-[#ff64c4] transition"
            icon={solid("cog")}
          />
        </button>
      </div>
      <EditProfile
        active={active}
        initial={initial}
        setActive={setActive}
        setIntial={setInitial}
      />
    </div>
  );
};

export default Profile;
