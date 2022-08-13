import React from "react";
import App from "../App";


const CardList = ({json}) => {
  return (
    <div>
       {countrie.map((countrie, i) => {
        return (
          <Card
            key={i}
            flag={countrie[i].flag}
            name={countrie[i].name}
            population={countrie[i].population}
            region={countrie[i].region}
            capital={countrie[i].capital}
          />
        );
      })}
    </div>
  );
};

export default CardList;
