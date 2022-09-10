import React, { useState } from "react";

export const EditProfile = (props) => {
  return (
    <form
      className={
        props.active
          ? "fixed flex flex-col p-2 h-full w-full z-10  bg-white animate-slide-up"
          : `fixed flex flex-col p-2 h-full w-full z-10  bg-white ${props.initial}`
      }
    >
      <div className="flex justify-around">
        <div></div>
        <p>EditProfile</p>
        <button type="button" onClick={() => props.setActive(false)}>
          Done
        </button>
      </div>
      {/* <> Drag and Drop</> */}
      <div className="flex flex-col border-b">
        <div className="font-semibold">My Birthday</div>
        <p className="text-sm pl-10">Jan 29, 1994</p>
      </div>
      <div className="flex flex-col border-b">
        <div className="font-semibold">My Gender</div>
        <input
          style={{ accentColor: "#ff64c4" }}
          className="outline-none shadow-amber"
          checked
          type="radio"
        />
        <input className="" type="radio" />
        <input className="" type="radio" />
      </div>
      <div className="flex flex-col border-b">
        <div className="font-semibold">About Me</div>
        <p className="text-sm pl-10 break-all">
          {" "}
          aehdhdhdalhjedlhadlaeldhljehljahljafehljaefhljlhejalhjdlahljddfdfdfvfvdvfdvfvfdvfd
        </p>
      </div>
    </form>
  );
};

export default EditProfile;
