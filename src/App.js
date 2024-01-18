import React from "react";
import Posts from "./components/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pass from "./components/Pass";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/data" element={<Pass />} />
      </Routes>
    </div>
  );
};

export default App;
