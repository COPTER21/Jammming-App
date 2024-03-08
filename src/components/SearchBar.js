import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ tracks, handleSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      const results = tracks.filter(
        (track) =>
          track.song.toLowerCase().includes(term) ||
          track.artist.toLowerCase().includes(term) ||
          track.album.toLowerCase().includes(term)
      );

      handleSearchSubmit(results);
    } else {
      handleSearchSubmit([]);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-bar-container">
        <input
          type="text"
          id="search"
          placeholder="Enter Song Title, Album or Artist's Name"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-butt" type="submit" onClick={handleSearch}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
