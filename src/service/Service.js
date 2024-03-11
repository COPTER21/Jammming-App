import axios from "axios";

import Spotify from "./Spotify";

const searchTracksOnSpotify = async (searchTerm) => {
  try {
    const headers = { Authorization: `Bearer ${Spotify.accessToken}` };
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=${10}`,
      { headers }
    );

    const resultSearchTracks = response.data.tracks.items.map((v) => ({
      id: v.id,
      song: v.name,
      artist: v.artists[0].name,
      album: v.album.name,
      uri: v.uri,
    }));

    return resultSearchTracks;
  } catch (error) {
    return [];
  }
};

export { searchTracksOnSpotify };