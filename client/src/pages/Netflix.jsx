import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Netflix() {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true);
  };

  return (
    <div>
      <Navbar isScrolled={scrolled} />
      {/* Home Page */}
    </div>
  );
}

export default Netflix;
