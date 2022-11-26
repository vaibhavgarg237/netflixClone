import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import Video from "../assets/StrangerThings.mp4";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromList } from "../store/index";

function Card({ movie, init = false }) {
  const [email, setEmail] = useState(undefined);

  const [hover, setHover] = useState(false);
  const { name, image, genres } = movie;
  const navigate = useNavigate();
  const [added, setAdded] = useState(init);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
  });

  const addToList = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/add`, {
          email,
          data: movie,
        })
        .then((response) => {
          if (response?.status === 200 && response.data?.result === 1) {
            setAdded(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  const remove = async () => {
    dispatch(removeFromList(email, movie.id));
  };

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="relative"
    >
      {
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt="movie background images"
          className={`-z-40 transition-opacity delay-200 ${
            hover ? "opacity-0" : ""
          } rounded-[0.45rem] max-w-[15rem] mr-4`}
        />
      }
      {
        <div
          className={`z-50 absolute top-[-24.6vh] rounded-sm transition-opacity ease-in-out ${
            hover ? "" : "opacity-0"
          }`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="movie background images"
            className="z-[-40] relative top-6 rounded-[0.45rem] max-w-[20rem] mr-4"
          />
          <video
            src={Video}
            autoPlay
            muted
            loop
            className="z-[-35] absolute top-6 rounded-[0.45rem] max-w-[20rem] mr-4 cursor-pointer"
            onClick={() => {
              navigate("/Player");
            }}
          />
          <div className="z-[100] pb-3 pt-2 pl-3 mr-4 bg-[#181818] rounded-[0.45rem] text-white">
            <h1 className="font-bold text-xl mx-1"> {name}</h1>
            <div className="flex my-2 ">
              <div className="hover:text-gray-500 px-1 cursor-pointer">
                <IoPlayCircleSharp
                  fontSize="2rem"
                  title="Play"
                  onClick={() => {
                    navigate("/Player");
                  }}
                />
              </div>
              <div className="hover:text-gray-500 px-1">
                <RiThumbUpFill fontSize="2rem" title="Like" />
              </div>
              <div className="hover:text-gray-500 px-1">
                <RiThumbDownFill fontSize="2rem" title="Dislike" />
              </div>
              {added ? (
                <div className="hover:text-gray-500 px-1">
                  <BsCheck
                    fontSize="2rem"
                    title="Remove from my list"
                    onClick={() => {
                      remove();
                    }}
                  />
                </div>
              ) : (
                <div className="hover:text-gray-500 px-1">
                  <AiOutlinePlus
                    fontSize="2rem"
                    title="Add to my list"
                    onClick={() => {
                      addToList();
                    }}
                  />
                </div>
              )}

              <div style={{ marginLeft: "auto" }}>
                <BiChevronDown fontSize="2rem" title="More Info" />
              </div>
            </div>
            <ul className="flex space-x-2 text-sm">
              {genres.map((genre) => {
                return <li key={genre}>• {genre}</li>;
              })}
            </ul>
          </div>
        </div>
      }
    </div>
  );
}

export default React.memo(Card);
