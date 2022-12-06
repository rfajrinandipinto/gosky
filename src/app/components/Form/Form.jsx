import React from "react";
import "./Form.css";
import { AirplaneFill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const todayDate = new Date();
  let tommorrowDate = new Date();

  tommorrowDate.setDate(tommorrowDate.getDate() + 1);

  const [formData, setFormData] = useState({
    category: "ONE_WAY",
    from: "JAKARTA",
    to: "DENPASAR",
    departureTime: todayDate.toISOString().split("T")[0],
    returnTime: tommorrowDate.toISOString().split("T")[0],
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    return event.target.value;
  };

  const filterDataDate = (data) => {
    let filteredData = [];

    data.map((data) => {
      if (formData.category == "ONE_WAY") {
        if (data.departureTime.split("T")[0] == formData.departureTime) {
          filteredData.push(data);
        }
      } else if (formData.category == "ROUND_TRIP") {
        if (data.departureTime.split("T")[0] == formData.departureTime && data.returnTime.split("T")[0] == formData.returnTime) {
          filteredData.push(data);
        }
      } else {
        console.log("no data");
      }
    });

    if (filteredData.length == 0) {
      return false;
    }

    return filteredData;
  };

  const handleSubmit = async () => {
    const res = await fetch(`https://gosky.up.railway.app/api/tickets?category=${formData.category}&from=${formData.from}&to=${formData.to}`);
    const result = await res.json();

    if (result.data.length !== 0) {
      const dataResult = filterDataDate(result.data);
      if (dataResult) {
        navigate("/search", { state: dataResult });
      } else {
        navigate("/search", { state: null });
      }
    }
  };

  // useEffect(() => {
  //   console.log(dataResult);
  // }),
  //   [dataResult];

  return (
    <div>
      <div className="form-component">
        <div className="container">
          <div className="card">
            <div className="card-body d-flex">
              <div className="row ">
                <div className="col form-floating form-group">
                  <div className="icon-container">
                    <AirplaneFill className="form-control-icon dari-icon"></AirplaneFill>
                  </div>
                  <select className="form-select form-control" aria-label="Default select example" onChange={handleChange} name="from" value={formData.from}>
                    <option value="JAKARTA">JAKARTA</option>
                    <option value="DENPASAR">DENPASAR</option>
                    <option value="YOGYAKARTA">YOGYAKARTA</option>
                    <option value="SURABAYA">SURABAYA</option>
                  </select>

                  <label htmlFor="dariDataList" className="form-label">
                    Dari
                  </label>
                </div>
                <div className="col form-floating">
                  <div className="icon-container">
                    <AirplaneFill className="form-control-icon dari-icon"></AirplaneFill>
                  </div>
                  <select className="form-select form-control" aria-label="Default select example" onChange={handleChange} name="to" value={formData.to}>
                    <option value="DENPASAR">DENPASAR</option>
                    <option value="YOGYAKARTA">YOGYAKARTA</option>
                    <option value="SURABAYA">SURABAYA</option>
                    <option value="MEDAN">MEDAN</option>
                    <option value="SOLO">SOLO</option>
                    <option value="SEMARANG">SEMARANG</option>
                    <option value="PADANG">PADANG</option>
                    <option value="MAKASSAR">MAKASSAR</option>
                    <option value="PONTIANAK">PONTIANAK</option>
                    <option value="BANJARMASIN">BANJARMASIN</option>
                    <option value="PALEMBANG">PALEMBANG</option>
                    <option value="BANDUNG">BANDUNG</option>
                    <option value="JAYAPURA">JAYAPURA</option>
                    <option value="PALEMBANG">PALEMBANG</option>
                    <option value="JAKARTA">JAKARTA</option>
                  </select>

                  <label htmlFor="dariDataList" className="form-label">
                    Ke
                  </label>
                </div>
                <div className="col d-flex align-items-center flight-radio">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="category" id="oneWayRadio" onChange={handleChange} value="ONE_WAY" checked={formData.category == "ONE_WAY"} />

                    <label className="form-check-label" htmlFor="twoWayRadio">
                      Sekali Jalan
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="category" id="twoWayRadio" onChange={handleChange} value="ROUND_TRIP" checked={formData.category == "ROUND_TRIP"} />
                    <label className="form-check-label" htmlFor="oneWayRadio">
                      Pergi Pulang
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col form-floating">
                  <input type="date" className="form-control" id="startDate" name="departureTime" onChange={handleChange} value={formData.departureTime} />

                  <label htmlFor="startDate" className="form-label">
                    Pergi
                  </label>
                </div>
                <div className="col form-floating">
                  <input type="date" className="form-control" id="startDate" name="returnTime" onChange={handleChange} value={formData.returnTime} disabled={formData.category !== "ROUND_TRIP"} />

                  <label htmlFor="startDate" className="form-label">
                    Pulang
                  </label>
                </div>
                <div className="col d-flex align-items-end">
                  <button type="button" className="btn btn-primary w-100 h-100" onClick={handleSubmit}>
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
