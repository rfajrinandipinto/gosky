import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./app/pages/Home";
import Result from "./app/pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
