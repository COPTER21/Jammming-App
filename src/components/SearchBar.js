// import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ searchTerm ,searchTracks, handleSearchInput }) => {
  
  return (
    <div className="search-bar">
      <form className="search-bar-container">
        <input
          type="text"
          id="search"
          placeholder="Enter Song Title, Album or Artist's Name"
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <button className="search-butt" type="submit" onClick={searchTracks}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
