import react, { useEffect, useState } from "react";
import "./App.css";
import Darkmode from "./components/Darkmode";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import Card from "./components/Card";

const options = { method: "GET" };

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => {
        setData(json.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <>
      <Darkmode />
      <SearchBox />
      <CardList />
      <Card />
    </>
  );
}

export default App;
