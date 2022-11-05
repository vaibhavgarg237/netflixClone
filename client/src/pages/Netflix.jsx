import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../assets/home.jpg";
import BackgroundImageTitle from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies } from "../store/index";
import Slider from "../components/Slider";

function Netflix() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const reduxStates = useSelector((state) => state.netflix);
  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (reduxStates.genresLoaded) {
      dispatch(getMovies({ type: "all" }));
    }
    // eslint-disable-next-line
  }, [reduxStates.genresLoaded]);

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true);
  };

  return (
    <div className="bg-black relative overflow-x-clip">
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
      <div className="absolute top-[46.35rem] bg-black ">
        <Slider movies={reduxStates.movies} />
      </div>
    </div>
  );
}

export default Netflix;
