import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ResultCard from "../components/Search/ResultCard";
import ResultTopCard from "../components/Search/ResultTopCard";
import "./Result.css";

import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      {state !== null ? <ResultTopCard data={state}></ResultTopCard> : ""}

      <div className="result-section">
        <div className="container">
          {state !== null ? (
            state.map((data, key) => {
              return <ResultCard key={key} data={data}></ResultCard>;
            })
          ) : (
            <div className="">
              <h2 className="text-center">No Tickets Found</h2>
              <h2 className="text-center">:(</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
