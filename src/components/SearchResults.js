import "../styles/SearchResults.css";
import Tracklist from "./Tracklist";

const SearchResults = ({ tracks, addToPlaylist }) => {
  return (
    <div className="search-results">
      <div className="search-results-container">
        <h2 className="results-text">Results</h2>
        <Tracklist tracks={tracks} addToPlaylist={addToPlaylist} />
      </div>
    </div>
  );
};

export default SearchResults;
