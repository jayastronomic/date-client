import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignupForm from "../components/SignupFom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import logo from "../assets/sixlovelogo.png";
import LoginForm from "../components/LoginForm";

const images = [image1, image2, image3];
let count = 0;

const Registrations = () => {
  const location = useLocation();
  let [image, setImage] = useState(images[count]);

  useEffect(() => {
    const interval = setInterval(() => {
      let index = count % images.length;
      setImage(images[index]);
      count++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full">
      <img className="object-cover w-full" src={image} alt="slide" />
      <div className="absolute flex flex-col justify-center items-center h-full w-full space-y-10 bg-black bg-opacity-50">
        <img src={logo} className="w-48" />
        {location.pathname === "/signup" ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Registrations;
