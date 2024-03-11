import { useEffect, useState } from "react";
import "../styles/App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Spotify from "../service/Spotify";

import { searchTracksOnSpotify } from "../service/Service";

function App() {
  // initiate data
  const getAccessToken = () => {
    Spotify.getAccessToken();
  };
  useEffect(() => {
    getAccessToken();
  }, []);

  // track,addedPlaylist
  const [tracks, setTracks] = useState([]);

  const searchTracks = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const result = await searchTracksOnSpotify(searchTerm);
      setTracks(result);
    }
  };


  // search
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  // add playlist
  const [addedPlaylist, setAddedPlaylist] = useState([]);

  const addToPlaylist = (track) => {
    const isExisted = addedPlaylist.some((v) => v.id === track.id);

    if (!isExisted) setAddedPlaylist((prevState) => [...prevState, track]);
  };
  const removeTrack = (track) => {
    const newAddedPlaylist = addedPlaylist.filter((v) => v.id !== track.id);
    setAddedPlaylist(newAddedPlaylist);
  };

  // playlist
  const [playlistName, setPlaylistName] = useState("New Playlists");

  const playlistNameHandler = (e) => {
    setPlaylistName(e.target.value);
  };


  // on submit
  const createPlaylist = (e) => {
    e.preventDefault();
    console.log(`addedPlaylist:`, addedPlaylist);
    console.log(`playlistName:`, playlistName);
  };

  return (
    <div className="App">
      <nav></nav>
      <h1>
        Ja<span className="sp-text">mmm</span>ing
      </h1>
      <SearchBar
        searchTerm={searchTerm}
        searchTracks={searchTracks}
        handleSearchInput={handleSearchInput}
      />
      <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
      <Playlist
        playlist={addedPlaylist}
        playlistName={playlistName}
        playlistNameHandler={playlistNameHandler}
        createPlaylist={createPlaylist}
        removeTrack={removeTrack}
      />
    </div>
  );
}

export default App;
