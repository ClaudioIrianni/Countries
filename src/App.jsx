import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import CountrieDetails from "./components/CountrieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:name"
          element={({ match }) => <CountrieDetails country={match.params.id} />}
        />
      </Routes>
    </>
  );
}

export default App;
