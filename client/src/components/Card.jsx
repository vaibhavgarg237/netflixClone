import React from "react";

function Card({ movie }) {
  const { id, name, image, genres } = movie;
  // console.log(id, name, image, genres);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt="movie background images"
        className="rounded-[0.45rem] max-w-[15rem] mr-4"
      />
    </div>
  );
}

export default Card;
