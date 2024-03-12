import axios from "axios";

import Spotify from "./Spotify";

// const headers = {
//   Authorization: `Bearer ${Spotify.accessToken}`,
//   "Content-Type": "application/json",
// };

const searchTracksOnSpotify = async (searchTerm) => {
  try {
    const headers = { Authorization: `Bearer ${Spotify.accessToken}` };
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
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

const getUserID = async () => {
  try {
    const headers = { Authorization: `Bearer ${Spotify.accessToken}` };
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers,
    });

    const resultId = response.data.id;
    console.log(`getId: `, resultId);
    return resultId;
  } catch (error) {
    console.log("Id is not found");
  }
};

const createPlaylistInSpotify = async (req, id) => {
  console.log("createPlaylistInSpotify");
  try {
    console.log("create got token: ", Spotify.accessToken);
    console.log("create got id: ", id);
    const headers = {
      Authorization: `Bearer ${Spotify.accessToken}`,
      "Content-Type": "application/json",
    };

    console.log("header: ", headers);
    const response = await axios.post(
      `
    https://api.spotify.com/v1/users/${id}/playlists`,
      req,
      {
        headers: headers,
      }
    );

    console.log(`res: `, response.data.id);
    return response.data.id
  } catch (error) {
    console.log(`ERROR: `, error);
  }
};


const addToPlaylistInSpotify = async (playlist_id, reqForAdd) => {
  console.log('added is work!!!!');
  try {
    const headers = {
      Authorization: `Bearer ${Spotify.accessToken}`,
      "Content-Type": "application/json",
    };
    const response = axios.post(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, reqForAdd, {headers: headers})
    console.log('add res: ', response);
  } catch(error) {
    console.log(`ERROR: `, error)
  }

};

export { searchTracksOnSpotify, getUserID, createPlaylistInSpotify, addToPlaylistInSpotify };
