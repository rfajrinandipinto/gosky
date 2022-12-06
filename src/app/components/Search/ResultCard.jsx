import React from "react";
import "./ResultCard.css";
import { ArrowRight } from "react-bootstrap-icons";

const ResultCard = (data) => {
  const ticketData = data.data;
  console.log(ticketData);

  const formatDate = (date) => {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var newDate = new Date(date);
    var dayIndex = newDate.getDay();
    var day = newDate.getDate();
    var monthIndex = newDate.getMonth();
    var year = newDate.getFullYear();

    return dayNames[dayIndex] + ", " + day + " " + monthNames[monthIndex] + " " + year;
  };

  const formatTime = (date) => {
    var newDate = date;
    var result = newDate.match(/\d\d:\d\d/);
    return result[0];
  };

  return (
    <div>
      <div className="resultCard-component">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-3 card-logo">
                <img src="/img/logo.svg" alt="" />
              </div>
              <div className="col-6">
                <div className="from-detail">
                  <p className="card-title">{ticketData.from}</p>
                  <p className="card-time">{formatTime(ticketData.departureTime)}</p>
                  <p className="card-date">{formatDate(ticketData.departureTime)}</p>
                </div>
                <div className="divider">
                  <ArrowRight></ArrowRight>
                  <p className="flight-duration"> 0j 1m</p>
                </div>
                <div className="to-detail">
                  <p className="card-title">{ticketData.to}</p>
                  <p className="card-time">10.42</p>
                  <p className="card-date">{formatDate(ticketData.departureTime)}</p>
                </div>
              </div>
              <div className="col-3">
                <p className="card-price">Rp {ticketData.price.toLocaleString()}</p>
                <button type="button" className="btn btn-primary">
                  Pesan
                </button>
                <p className="card-availability">Tersedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
