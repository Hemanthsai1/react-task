import React from "react";
import "./components/SearchBar.css";
import countries from "./data/countries.json";
import SearchBar from "./components/SearchBar";
import "/src/components/SearchBar.css";

function App() {
  return (
    <div className="App">
      <h3>Countries - Capitals</h3>
      <SearchBar countries={countries} />
    </div>
  );
}

export default App;
