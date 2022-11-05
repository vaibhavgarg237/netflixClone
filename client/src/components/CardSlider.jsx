import React, { useState } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function CardSlider({ movie, title }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="flex"
    >
      {hover && (
        <AiOutlineLeft
          fontSize="2rem"
          className="mt-48 absolute left-1 text-white"
        />
      )}
      <div className="flex flex-col">
        <h1 className="text-white  font-bold text-3xl mt-[5rem] mb-6">
          {title}
        </h1>
        <div className="flex">
          {movie.map((singledOutMovie) => {
            return (
              <div key={singledOutMovie.id}>
                <Card movie={singledOutMovie} />
              </div>
            );
          })}
        </div>
      </div>
      {hover && (
        <AiOutlineRight
          fontSize="2rem"
          className="mt-48 mr-2 absolute right-1 text-white"
        />
      )}
    </div>
  );
}

export default CardSlider;
