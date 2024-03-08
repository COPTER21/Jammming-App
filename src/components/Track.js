import React from "react";

function Track({ track, handleTrack, type, ...props }) {
  return (
    <div className="results-container" key={Math.random()} {...props}>
      <div className="results-cards">
        <p key={track.id}>{track.song}</p>
        <div className="detail-container">
          <p className="authorWithSong">
            {track.artist} <span className="divide-symbol">| </span>
            {track.album}
          </p>
          {type === "track-list" ? (
            <button className="add-butt" onClick={() => handleTrack(track)}>
              <span className="addSymbol">+</span>
            </button>
          ) : (
            <button className="add-butt" onClick={() => handleTrack(track)}>
              <span className="addSymbol">-</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Track;
