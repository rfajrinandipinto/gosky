import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col footer-brand">
              <img src="/img/logo.svg" alt="" />
            </div>
            <div className="col">
              <h3>Contact Us</h3>
              <p>08965738857</p>
              <p>gosky@gmail.com</p>
              <p>@goSky</p>
            </div>
            <div className="col">
              <h3>More Information</h3>
              <p>About</p>
              <p>Procurement Online</p>
              <p>Investor Relation</p>
              <p>Sales Office</p>
            </div>
            <div className="col col-end">
              <p>Group Reservation</p>
              <p>Career</p>
              <p>News</p>
              <p>Customer Care Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
