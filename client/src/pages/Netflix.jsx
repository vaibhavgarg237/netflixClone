import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../assets/home.jpg";
import BackgroundImageTitle from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true);
  };

  return (
    <div className="bg-black">
      <div className="sticky top-0 z-10">
        <Navbar isScrolled={scrolled} />
      </div>
      {
        <div className="HERO relative bottom-28">
          <img
            src={BackgroundImage}
            alt="Netflix BackgroundImage"
            className="w-screen h-screen brightness-50"
          />
          <img
            src={BackgroundImageTitle}
            alt="homepage title"
            className="relative bottom-[32rem] left-16"
          />

          <div className="inline-flex relative bottom-[29rem] left-16 space-x-8 ">
            <div
              className="PLAY flex h-12 w-44 bg-[#f0f0f0] hover:bg-[#8c8a8a] justify-center items-center rounded-md space-x-2 cursor-pointer"
              onClick={() => {
                navigate("/player");
              }}
            >
              <FaPlay fontSize="1.6rem" />
              <span>Play</span>
            </div>

            <div className="MOREINF flex h-12 w-44  bg-slate-500 hover:bg-opacity-50 bg-opacity-70 justify-center items-center rounded-md space-x-2 text-white cursor-pointer">
              <AiOutlineInfoCircle fontSize="1.8rem" />
              <span>More Info</span>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Netflix;
