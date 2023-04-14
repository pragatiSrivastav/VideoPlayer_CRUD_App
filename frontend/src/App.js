import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import VideoCenter from "./components/VideoCenter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/playlist" element={<VideoCenter />}></Route>
      </Routes>
    </>
  );
};

export default App;
