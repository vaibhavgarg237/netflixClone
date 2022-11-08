import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserLikedMovies } from "../store/index";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const [email, setEmail] = useState(undefined); //getLikedMovies
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setEmail(currentUser.email);
      } else {
        navigate("/login");
      }
    });
    // eslint-disable-next-line
  }, [email]);

  useEffect(() => {
    dispatch(getUserLikedMovies(email)); //getLikedMovies -> Now can use likedMovies anywhere using reduxStates.likedMovies
    // eslint-disable-next-line
  }, [email]);

  const { likedMovies } = useSelector((state) => state.netflix);

  return (
    <div className="bg-black relative">
      <div className="sticky top-0 z-10">
        <Navbar isScrolled={true} />
      </div>
      <div className="absolute top-16 ">
        <h1 className="text-white font-bold text-3xl mt-[5rem] ml-24 mb-8">
          My List
        </h1>
        <div className="flex flex-wrap mx-24">
          {!!likedMovies?.length &&
            likedMovies.map((singledOutMovie) => {
              return (
                <div key={singledOutMovie.id} className="my-3 mx-auto">
                  <Card movie={singledOutMovie} init={true} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Netflix;
