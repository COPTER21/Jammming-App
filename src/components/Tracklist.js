import "../styles/Tracklist.css";
import Track from "./Track";

const Tracklist = ({tracks, addToPlaylist }) => {
  return (
    <div className="tracklist">
      {tracks.map(track => (
        <Track
          key={track.id}
          track={track}
          handleTrack={addToPlaylist}
          type="track-list"
        />
      ))}
    </div>
  );
};

export default Tracklist;
