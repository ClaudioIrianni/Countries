import React from "react";
import "../components/Card.css";

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <div className="card">
      <div>
        <img src={`https://restcountries.com/v3.1/all${flag}`} alt="flag"></img>
        <h2>{name}</h2>
        <h3>{population}</h3>
        <h3>{region} </h3>
        <h3>{capital} </h3>
      </div>
    </div>
  );
};

export default Card;
