import React, { useState, useRef } from "react";
const addPhotoButtonClass =
  "flex justify-center items-center bg-gray-200 rounded-full w-8 h-8 font-thin text-lg text-pink-500 ";

export const AddPhotoCard = (props) => {
  const [holdPhoto, setHoldPhoto] = useState("");
  const hiddenFileInput = useRef();
  console.log(hiddenFileInput.current);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files);
  };
  return (
    <div
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      className="w-24 h-24 border rounded-md flex items-center justify-center"
    >
      {props.url === undefined ? (
        <div>
          <button
            onClick={() => handleClick()}
            type="button"
            className={addPhotoButtonClass}
          >
            +
          </button>
          <input
            ref={hiddenFileInput}
            onChange={handleChange}
            type="file"
            className="hidden"
          />
        </div>
      ) : (
        <div
          id={props.id}
          draggable
          onMouseDown={() => setHoldPhoto("scale-0")}
          onMouseUp={() => setHoldPhoto("")}
          onMouseLeave={() => setHoldPhoto("")}
          className="relative"
        >
          <span className="text-white absolute left-1">{props.index + 1}</span>
          <img
            //
            onDragStart={props.onDragStart}
            className={`h-24 w-24 object-cover rounded cursor-pointer transitin ${holdPhoto}`}
            src={props.url}
          />
        </div>
      )}
    </div>
  );
};
