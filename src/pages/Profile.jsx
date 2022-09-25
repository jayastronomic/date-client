import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { fetchUser } from "../network/User";

import EditProfile from "../components/EditProfile";

export const Profile = (props) => {
  const [authUser, setAuthUser] = useState({});
  const [active, setActive] = useState(false);
  const [initial, setInitial] = useState("top-[100%]");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    fetchUser(props.authUser.id).then((authUser) => setAuthUser(authUser));
  }, []);

  const unMount = () => {
    setActive(false);
    setTimeout(() => {
      setMounted(false);
    }, 500);
  };

  return (
    <div className="flex flex-col flex-1 py-4 overflow-hidden">
      {authUser.avatar_exist ? (
        <div className="flex justify-center">
          <div className="flex justify-center items-center overflow-hidden rounded-full w-40 h-40">
            <img
              className="object-cover"
              src={authUser.avatar_url}
              alt="avatar"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <FontAwesomeIcon
            className="text-gray-500 text-[10rem]"
            icon={solid("user-circle")}
          />
        </div>
      )}
      <div className="flex text-2xl justify-around pt-4">
        <button
          className=""
          onClick={() => {
            setMounted(true);
            setActive(true);
            setInitial("animate-slide-down");
          }}
        >
          <FontAwesomeIcon
            className="bg-[#ff64c4] p-4 rounded-full  text-white hover:text-gray-300 transition"
            icon={solid("pen")}
          />
        </button>
        <p className="text-xl text-gray-500 capitalize">
          {props.authUser.name}, {props.authUser.age}
        </p>

        <button className="">
          <FontAwesomeIcon
            className="bg-[#ff64c4] p-4 rounded-full  text-white hover:text-gray-300 transition"
            icon={solid("cog")}
          />
        </button>
      </div>
      {mounted && (
        <EditProfile
          active={active}
          initial={initial}
          setActive={setActive}
          setIntial={setInitial}
          authUser={authUser}
          setAuthUser={setAuthUser}
          unMount={unMount}
        />
      )}
    </div>
  );
};

export default Profile;
