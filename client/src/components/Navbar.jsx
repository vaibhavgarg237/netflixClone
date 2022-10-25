import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/TVshows" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <div
      className={`flex p-3 pt-5 items-center text-white ${
        isScrolled ? "bg-black" : ""
      } `}
    >
      <img
        src={Logo}
        className="mx-3 ml-16 w-28 sm:w-36 lg:w-40 "
        alt="netflix logo"
      />
      {links.map((el) => {
        return (
          <Link to={el.link} key={el.name} className="mx-2">
            {el.name}
          </Link>
        );
      })}
      <div className="ml-auto  mr-16">
        <button
          onFocus={() => {
            setShowSearch(true);
            setInputClicked(true);
          }}
          onBlur={() => {
            if (!inputClicked) {
              setShowSearch(false);
              setInputClicked(false);
            }
          }}
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Search"
          className={`border-none outline-none transition-all ease-out ml-1 ${
            !isScrolled ? "bg-black" : ""
          } h-8 rounded-md p-3 ${!showSearch ? "w-0 bg-transparent" : "w-40"} `}
          onMouseEnter={() => {
            setInputClicked(true);
          }}
          onMouseLeave={() => {
            setInputClicked(false);
          }}
          onBlur={() => {
            setInputClicked(false);
            setShowSearch(false);
          }}
        />
        <button
          className="ml-4 mr-16"
          onClick={() => {
            return signOut(firebaseAuth);
          }}
        >
          <PowerSettingsNewIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
