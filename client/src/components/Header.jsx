import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header({ typePage }) {
  let navigate = useNavigate();
  return (
    <div>
      <img
        src={Logo}
        alt="Neflix logo"
        className="w-28 sm:w-36 lg:w-40 ml-4 absolute top-4 left-6"
      />
      {typePage === "signup" && (
        <button
          onClick={() => {
            typePage === "signup" ? navigate("/login") : navigate("/signup");
          }}
          className="signin absolute  top-8 right-14 w-[4.5rem] sm:p-1 lg:p-[0.3rem] rounded-[0.22rem] bg-red-600 text-white cursor-pointer"
        >
          Sign in
        </button>
      )}
    </div>
  );
}

export default Header;
