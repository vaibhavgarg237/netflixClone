import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./components/Player";
import Movies from "./pages/Movies.jsx";
import TVShows from "./pages/TVShows";
import "./index.css";
import MyList from "./pages/MyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tvshows" element={<TVShows />} />
        <Route exact path="/mylist" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
