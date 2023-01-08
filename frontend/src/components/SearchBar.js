import React, { useState } from "react";
import './Searchbar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search here, using the search term
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          style={{ width: "30%", padding: "15px 20px", borderRadius: "5px" }}
          placeholder="Search for Cases, Legal Bodies etc. "
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="searchbar-btn" type="submit" style={{ padding: "15px", borderRadius: "5px" }}>
          Search
        </button>
      </form>
    </center>
  );
}

export default SearchBar;