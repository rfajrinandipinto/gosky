import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div>
      <div className="featured-section">
        <div className="container">
          <h2 className="featured-title">Featured Destination</h2>
          <div className="row">
            <div className="col">
              <div className="card featured-card-1">
                <div className="card-body">
                  <h5 className="card-title">Bukittinggi</h5>

                  <a href="#" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card featured-card-2">
                <div className="card-body">
                  <h5 className="card-title">Jogjakarta</h5>

                  <a href="#" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card featured-card-3">
                <div className="card-body">
                  <h5 className="card-title">Jakarta</h5>

                  <a href="#" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card featured-card-4">
                <div className="card-body">
                  <h5 className="card-title">Bali</h5>

                  <a href="#" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
