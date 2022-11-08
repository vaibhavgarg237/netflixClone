import React from "react";
import CardSlider from "./CardSlider";

function Slider({ movies }) {
  const slicedMovies = (start, end) => {
    // console.log("///", start, end, "Movies", movies.slice(start, end), "///");
    return movies.slice(start, end);
  };

  return (
    <div className="bg-back">
      <CardSlider movie={slicedMovies(0, 10)} start="0" title="Trending Now" />
      <CardSlider
        movie={slicedMovies(10, 20)}
        start="10"
        title="New Releases"
      />
      <CardSlider
        movie={slicedMovies(20, 30)}
        start="20"
        title="Blockbuster Movies"
      />
      <CardSlider
        movie={slicedMovies(30, 40)}
        start="30"
        title="Popular on Netflix"
      />
      <CardSlider
        movie={slicedMovies(40, 50)}
        start="40"
        title="Action Movies"
      />
      <CardSlider movie={slicedMovies(50, 60)} start="50" title="Epics" />
    </div>
  );
}

export default Slider;
