import React, { useRef, useState } from "react";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = (props) => {
  const input = useRef();
  const img = useRef();

  const [avatarExist, setAvatarExist] = useState(props.avatarExist);
  const [avatarUrl, setAvatarUrl] = useState(props.avatarUrl);

  const handleClick = () => {
    input.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarExist(true);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      props.handleAddPhoto(e.target.files[0]);
    }
  };

  const removeAvatar = () => {
    setAvatarExist(false);
    props.handleAddPhoto("remove_photo");
  };

  return (
    <div className="flex justify-center pt-4">
      {avatarExist ? (
        <div className="relative flex items-center justify-center">
          <div className="flex justify-center items-center overflow-hidden rounded-md h-56 w-56 shadow-xl">
            <img
              className="object-cover"
              src={avatarUrl}
              alt="Avatar"
              ref={img}
            />
          </div>
          <button
            onClick={removeAvatar}
            className="absolute -top-2 -right-2 bg-gray-300 w-6 h-6 rounded-full transition hover:bg-gray-400 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="w-56 h-56 border rounded-md flex items-center justify-center shadow">
          <button
            className="flex justify-center item-center rounded-full p-3 transition bg-gray-300  text-gray-500 hover:bg-gray-400 hover:text-gray-600"
            type="button"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={solid("camera")} />
          </button>
          <input
            ref={input}
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default Avatar;
