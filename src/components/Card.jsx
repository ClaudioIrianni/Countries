import React from "react";
import { Link } from "react-router-dom";



const Card = ({ flag, name, population, region, capital }) => {
  return (
    <div className="card">
      <Link to={`/${name}`}>
        <img src={flag} alt="flag"></img>
        <h2>{name}</h2>
        <h3>{population}</h3>
        <h3>{region} </h3>
        {capital &&<h3>{capital} </h3>}
      </Link>
    </div>
  );
};

export default Card;
