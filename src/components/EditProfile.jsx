import React, { useState } from "react";

export const EditProfile = (props) => {
  return (
    <div
      onClick={() => props.setActive(false)}
      className={
        props.active
          ? "fixed h-full w-full z-10  bg-slate-600 animate-slide-up"
          : `fixed h-full w-full z-10  bg-slate-600 ${props.initial}`
      }
    >
      EditProfile
    </div>
  );
};

export default EditProfile;
