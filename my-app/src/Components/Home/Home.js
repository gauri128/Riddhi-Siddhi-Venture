import React from "react";
import "./home.css";
import Button from "../../layouts/button";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Empowering Health Choices for a Vibrant Life. Your Trusted..
        </h1>
        <p className="home-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>
         <Button title={"hello"}/>
      </div>
    </div>
  );
};

export default Home;