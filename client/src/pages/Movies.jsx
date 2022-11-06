import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataByGenre, getGenres } from "../store/index";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";

function Movies() {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const reduxStates = useSelector((state) => state.netflix);
  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (reduxStates.genresLoaded) {
      dispatch(getDataByGenre({ type: "movie" }));
    }
    console.log(reduxStates.getDataByGenre);
    // eslint-disable-next-line
  }, [reduxStates.genresLoaded, reduxStates.getDataByGenre]);

  return (
    <div className="bg-black overflow-xclip">
      <div className="sticky top-0 z-10 mb-10">
        <Navbar isScrolled={true} />
      </div>
      <div className="-mb-2 z-[150]">
        <SelectGenre type="movie" />
      </div>
      <Slider movies={reduxStates.movies} />
    </div>
  );
}

export default Movies;
