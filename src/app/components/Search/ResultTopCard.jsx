import React from "react";
import "./ResultTopCard.css";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const ResultTopCard = (data) => {
  const navigate = useNavigate();

  const formData = data.data[0];

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

  return (
    <div>
      <div className="resultTopCard-component">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {formData.from} <ArrowRight></ArrowRight> {formData.to}
              </h5>
              <p className="card-text">
                {formatDate(formData.departureTime)} | {formData.category == "ONE_WAY" ? "Sekali Jalan" : "Pergi Pulang"}
              </p>
            </div>
            <a href="/" className="btn btn-primary">
              Ganti Pencarian
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTopCard;
