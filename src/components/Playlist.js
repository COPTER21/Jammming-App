// import { useEffect, useState } from "react";
import "../styles/Playlist.css";
import Track from "./Track";

const Playlist = ({
  playlist,
  playlistName,
  playlistNameHandler,
  createPlaylist,
  removeTrack,
}) => {
  return (
    <div className="playlist">
      <form className="playlist-container" onSubmit={createPlaylist}>
        <div>
          <input
            className="playlist-name"
            type="text"
            value={playlistName}
            onChange={playlistNameHandler}
          />

          {playlist.map((track) => (
            <Track
              key={track.id}
              track={track}
              handleTrack={removeTrack}
              type="play-list"
            />
          ))}

          <button className="save-butt">SAVE TO SPOTIFY</button>
        </div>
      </form>
    </div>
  );
};

export default Playlist;
