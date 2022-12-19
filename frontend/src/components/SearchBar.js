import React, { useState } from "react";

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
          style={{ padding: "15px", borderRadius: "5px" }}
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: "15px", borderRadius: "5px" }}>
          Search
        </button>
      </form>
    </center>
  );
}

export default SearchBar;
