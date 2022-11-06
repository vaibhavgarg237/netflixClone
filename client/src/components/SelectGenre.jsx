import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getDataByGenre } from "../store/index";

function SelectGenre({ type }) {
  const dispatch = useDispatch();
  const { genres, genresLoaded } = useSelector((state) => state.netflix);

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ml-24 bg-black text-xl">
      <select
        className="flex p-1 bg-black text-white border-solid border-white border-[1px] rounded-sm"
        onChange={(e) => {
          dispatch(
            getDataByGenre({
              genres,
              genre: e.target.value,
              type,
            })
          );
        }}
      >
        {genresLoaded &&
          genres.map((genre) => {
            return (
              <option value={genre.id} key={genre.id} className="bg-[#999999]">
                {genre.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default SelectGenre;
