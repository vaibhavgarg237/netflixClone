import React from "react";
import CardSlider from "./CardSlider";

function slider({ movies }) {
  const slicedMovies = (start, end) => {
    // console.log("///", start, end, "Movies", movies.slice(start, end), "///");
    return movies.slice(start, end);
  };

  return (
    <div className="ml-10 bg-back">
      <CardSlider movie={slicedMovies(0, 10)} title="Trending Now" />
      <CardSlider movie={slicedMovies(10, 20)} title="New Releases" />
      <CardSlider movie={slicedMovies(20, 30)} title="Blockbuster Movies" />
      <CardSlider movie={slicedMovies(30, 40)} title="Popular on Netflix" />
      <CardSlider movie={slicedMovies(40, 50)} title="Action Movies" />
      <CardSlider movie={slicedMovies(50, 60)} title="Epics" />
    </div>
  );
}

export default slider;
