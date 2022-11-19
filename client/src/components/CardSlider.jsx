import React, { useState, useRef } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function CardSlider({ movie, title }) {
  const [hover, setHover] = useState(false);
  const slideRef = useRef();
  let first = "nothing";
  let sl = 0;
  let showsInCurrentSlide = Math.floor(window.innerWidth / (240 + 16)); // widthCard + spaceBwCards
  let pxMoved = (showsInCurrentSlide / 2) * (240 + 16);
  let currPos = Math.floor(showsInCurrentSlide / 2);

  const handleDirection = (direction) => {
    let slide = slideRef.current.style;

    if (direction === "left" && currPos < movie.length) {
      sl--;
      if (first !== "left") {
        first = "left";
        handleDirection("left");
      }
      slide.transform = `translateX(${pxMoved * sl}px)`;
      currPos = currPos + showsInCurrentSlide / 2;
    } else if (direction === "right" && currPos > 0) {
      sl++;
      if (first !== "right") {
        first = "right";
        handleDirection("right");
      }
      slide.transform = `translateX(${pxMoved * sl}px)`;
      currPos -= showsInCurrentSlide / 2;
    }
  };

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="flex [ relative ]"
    >
      {hover && (
        <AiOutlineLeft
          fontSize="2rem"
          className="mt-48 absolute left-1 text-white z-50 bg-black rounded-lg"
          onClick={() => handleDirection("right")}
        />
      )}
      <div className="flex flex-col px-10">
        <h1 className="text-white  font-bold text-3xl mt-[5rem] mb-6">
          {title}
        </h1>
        <div className="flex ease-in-out duration-700" ref={slideRef}>
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
          className="mt-48 m-2 absolute right-1 right1 text-white z-[150] bg-black rounded-lg"
          onClick={() => handleDirection("left")}
        />
      )}
    </div>
  );
}

export default React.memo(CardSlider);
