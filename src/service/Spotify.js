const Spotify = {
  accessToken: "", // Initialize an empty access token property
  expiresIn: 0,

  //get access token from url
  getAccessToken() {
    if (this.accessToken) {
      return this.accessToken;
    }

    // this two const is will produce array that equal [ (entire matched string, including the "access_token=" part), (matched by the capturing group ([^&]*) )]
    // If access token is not stored, extract it from the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      // index 0 is contains the entire matched string, including the "access_token=" part
      // use index 1 cause it contains only the content matched by the capturing group ([^&]*)
      // Store the access token and expiration time
      this.accessToken = accessTokenMatch[1];
      this.expiresIn = Number(expiresInMatch[1]);

      // clear param from URL
      window.setTimeout(() => (this.accessToken = ""), this.expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return this.accessToken;
    } else {
      // If access token is not found in the URL, redirect user to Spotify authorization page
      const authEndpoint = "https://accounts.spotify.com/authorize";
      const clientId = "a1f83e0eadde413e8107bf9d869e97ca";
      const redirectUri = "http://localhost:3000";
      const scope = 'playlist-modify-private user-read-private user-read-email'

      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
    }
  },

  // make request with the access token
  // async search(term) {
  //   const accessToken = this.getAccessToken(); // get access token
  //   const headers = { Authorization: `Bearer ${accessToken}` }; // set authorization header
  //   const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;

  //   try {
  //     const response = await fetch(endpoint, { headers }); // make request to Spotify API
  //     console.log(`response => `, response);
  //     if (response.ok) {
  //       const jsonResponse = await response.json();

  //       return jsonResponse.tracks.item.map((track) => ({
  //         id: track.id,
  //         name: track.name,
  //         artist: track.artists[0].name,
  //         album: track.album.name,
  //         uri: track.uri,
  //       }));
  //     }
  //     throw new Error("Request failed!");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};


export default Spotify; // Export the Spotify object