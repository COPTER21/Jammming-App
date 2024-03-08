import { useEffect, useState } from "react";
import "../styles/App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Spotify from "./Spotify";

function App() {
  Spotify.getAccessToken();

  // track,addedPlaylist
  const [tracks, setTracks] = useState([]);
  const [addedPlaylist, setAddedPlaylist] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTracks(data.tracks))
      .catch((error) => console.log("Error fetching tracks:", error));
    
  }, []);

  const addToPlaylist = (track) => {
    const isExisted = addedPlaylist.some((v) => v.id === track.id);

    if (!isExisted) setAddedPlaylist((prevState) => [...prevState, track]);
  };
  const removeTrack = (track) => {
    const newAddedPlaylist = addedPlaylist.filter((v) => v.id !== track.id);
    setAddedPlaylist(newAddedPlaylist);
  };

  // search
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (results) => {
    setSearchResults([]);
    setSearchResults(results);
  };

  // playlist
  const [playlistName, setPlaylistName] = useState("New Playlists");
  const [playlistrecord, setPlaylistrecord] = useState();

  const playlistNameHandler = (e) => {
    setPlaylistName(e.target.value);
  };
  const addPlaylistObjWithArray = (playlistName, addedPlaylist) => {
    const uriTrack = addedPlaylist.map((obj) => obj.uri);
    let obj = {
      id: Math.random(),
      playlistName,
      addedPlaylist: uriTrack,
    };
    setPlaylistrecord(obj);
  };

  const createPlaylist = (e) => {
    e.preventDefault();
    // console.log(`add-length:`, addedPlaylist.length);
    if (addedPlaylist.length > 0) {
      addPlaylistObjWithArray(playlistName, addedPlaylist);
      setAddedPlaylist([]);
      setPlaylistName("New Playlists");
    } else {
      console.log("Play list is Empty");
    }
  };

  //--------
  const handleKeyDown = (event) => {
    const { name, value } = event.target;
    if (name.trim() !== "") {
      if (name in playlistrecord) {
        setPlaylistrecord({ ...playlistrecord, [name]: value });
      } else {
        console.log(`${name} does not exist in the object.`);
      }
    }
  };
  useEffect(() => {
    setPlaylistrecord(playlistrecord);
    setPlaylistName(playlistName);
  }, [playlistrecord, playlistName]);

  return (
    <div className="App">
      <nav></nav>
      <h1>
        Ja<span className="sp-text">mmm</span>ing
      </h1>
      <SearchBar tracks={tracks} handleSearchSubmit={handleSearchSubmit} />
      <SearchResults
        searchResults={searchResults}
        addToPlaylist={addToPlaylist}
      />
      <Playlist
        playlist={addedPlaylist}
        playlistName={playlistName}
        playlistNameHandler={playlistNameHandler}
        createPlaylist={createPlaylist}
        removeTrack={removeTrack}
        playlistrecord={playlistrecord}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;
