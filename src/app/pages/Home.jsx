import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header";
import Departure from "../components/Home/Departure";
import Email from "../components/Home/Email";
import Featured from "../components/Home/Featured";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Form></Form>
      <Featured></Featured>
      <Departure></Departure>
      <Email></Email>
      <Footer></Footer>
    </div>
  );
};

export default Home;
