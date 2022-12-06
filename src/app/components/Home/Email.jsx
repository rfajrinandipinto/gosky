import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div>
      <div className="email-section">
        <div className="container">
          <h2 className="email-title">Never Miss an offer again!</h2>
          <h2 className="email-title">Send us your email</h2>
          <div className="card">
            <div className="card-body">
              <div className="email-input">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email Address" />
              </div>
              <a href="#" className="btn btn-primary">
                SEND
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
