import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getDataByGenre, getGenres } from "../store/index";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";
import NotAvailable from "../components/NotAvailable";

function TVShows() {
  const dispatch = useDispatch();
  const reduxStates = useSelector((state) => state.netflix);
  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (reduxStates.genresLoaded) {
      dispatch(getDataByGenre({ type: "tv" }));
    }
    console.log(reduxStates.getDataByGenre);
    // eslint-disable-next-line
  }, [reduxStates.genresLoaded, reduxStates.getDataByGenre]);

  return (
    <div className="bg-black overflow-x-clip">
      <div className="sticky top-0 z-10 mb-10">
        <Navbar isScrolled={true} />
      </div>
      <div className="-mb-2 z-[150]">
        <SelectGenre type="tv" />
      </div>

      {reduxStates.movies.length > 0 ? (
        <Slider movies={reduxStates.movies} />
      ) : (
        <NotAvailable />
      )}
    </div>
  );
}

export default TVShows;
