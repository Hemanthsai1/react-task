import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(value) ||
          country.capital.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
      setSelectedFlag(""); 
    }
  };

  const handleSelect = (country) => {
    const selectedCountry = countries.find(
      (c) => c.name.toLowerCase() === country.toLowerCase()
    );
    if (selectedCountry) {
      setSelectedFlag(selectedCountry.flag); 
    }
    setSearchTerm(country);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a country or capital..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() =>
            (document.querySelector(".search-bar").style.top = "20%")
          } 
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelect(suggestion.name)}
                style={{ backgroundImage: `url(${suggestion.image})` }}
              >
                <div className="overlay">
                  <span>{suggestion.name}</span> -{" "}
                  <span>{suggestion.capital}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        {selectedFlag && (
          <div className="flag-container">
            <img
              src={selectedFlag}
              alt="Selected Flag"
              className="flag-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
