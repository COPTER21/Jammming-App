import "../styles/SearchResults.css";
import Tracklist from "./Tracklist";

const SearchResults = ({ searchResults, addToPlaylist }) => {
  return (
    <div className="search-results">
      <div className="search-results-container">
        <h2 className="results-text">Results</h2>
        <Tracklist tracks={searchResults} addToPlaylist={addToPlaylist} />
      </div>
    </div>
  );
};

export default SearchResults;
