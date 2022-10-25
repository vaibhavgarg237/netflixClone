import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import videoURL from "../assets/StrangerThings.mp4";

function Player() {
  const navigate = useNavigate();
  return (
    <div>
      <BiArrowBack
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-2 left-2 cursor-pointer z-10"
        fontSize="3rem"
      />
      <video src={videoURL} controls className="w-screen h-screen"></video>
    </div>
  );
}

export default Player;
