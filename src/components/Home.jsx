import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import Darkmode from "./Darkmode";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Card from "./Card";
import Filter from "./Filter";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const [filteredCountrie, setFilteredCountrie] = useState("");

  //Fetch
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const handleSearch = () => {
    let inputValue = searchInput;
    setFilteredCountrie(inputValue)
  };

  return (
    <Container maxW="1980px">
      <Darkmode />
      <div className="SearchFilterContainer">
        {/* Envio data a Searchbox y CardList */}
        <SearchBox
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSubmit={handleSearch}
        />
        <Filter />
      </div>
      <CardList countries={data}  filteredCountrie={filteredCountrie}/>
      <Card />
    </Container>
  );
}

export default Home;
