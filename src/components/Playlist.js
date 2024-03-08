// import { useEffect, useState } from "react";
import "../styles/Playlist.css";
import Track from "./Track";

const Playlist = ({
  playlist,
  playlistName,
  playlistNameHandler,
  createPlaylist,
  removeTrack,
  playlistrecord,
  handleKeyDown,
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

          {playlistrecord !== undefined && (
            <div>
              <div key={playlistrecord.id}>
                <input
                  type="text"
                  name="playlistName"
                  defaultValue={playlistrecord.playlistName}
                  onChange={(event) => handleKeyDown(event)}
                />
              </div>
              <h3>Modified Object:</h3>
              <pre>{JSON.stringify(playlistrecord, null, 2)}</pre>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Playlist;
