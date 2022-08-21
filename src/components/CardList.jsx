import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid } from "@chakra-ui/react";

const CardList = ({ countries, filteredCountrie }) => {
  const [countriesToRender, setCountriesToRender] = useState(countries);

  const resultCountrie = countries.filter((countrie) =>
  countrie.name.common.toLowerCase().includes(filteredCountrie.toLowerCase())
  );

  useEffect(() => {
    if (filteredCountrie) {
      setCountriesToRender(resultCountrie);
    } else {
      setCountriesToRender(countries);
    }
  }, [filteredCountrie]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" justifyContent="center" gap={1}>
      {countriesToRender.map((countrie, i) => {
        return (
          <Card
            key={i}
            flag={countrie.flags.png}
            name={countrie.name.common}
            population={countrie.population}
            region={countrie.region}
            capital={countrie.capital ? countrie.capital[0] : null}
          />
        );
      })}
    </Grid>
  );
};

export default CardList;
