import React, { useState, useEffect } from "react";
import { AddPhotoCard } from "./AddPhotoCard";
import fetchedPhotos from "../data";

const PhotoGrid = (props) => {
  const [draggable, setDraggable] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [originalSrc, setOriginalSrc] = useState("");

  useEffect(() => {
    let photos = fetchedPhotos.map((photo, i) => {
      return (
        <AddPhotoCard
          index={i}
          key={i}
          onDragOver={allowDrop}
          onDrop={drop}
          onDragStart={drag}
          handleChange={props.handleChange}
          handleAddPhoto={props.handleAddPhoto}
        />
      );
    });
    setPhotos(photos);
  }, []);
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  };
  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <div className="grid grid-cols-3 grid-rows-3">{photos}</div>
      <p className="text-sm text-gray-400 font-semibold">
        Drag and drop to reorder photos
      </p>
    </div>
  );
};
export default PhotoGrid;
