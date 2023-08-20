import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

const BASE_URL="http://accounts.spotify.com/authorize?"

// Spotify permissions to request from the user 
// Join scopes into a comma separated string
const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-modify-playback-state",
    "user-read-currently-playing"
].join(",")

// Generate query for scopes
const parameters = {
    scope: scopes,
}

// Construct LOGIN_URL from above queires
const LOGIN_URL = BASE_URL + new URLSearchParams(parameters).toString()

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
  try {
    const url =
      "https://accounts.spotify.com/api/token?" +
      new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}


// Configure Spotify authentication providers
// Default routes for signin, signout are: api/auth/signin and api/auth/signout

// App router specific configuration for NextAuth
const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    // Saving the data from the Spotify API response to the JWT
    async jwt({ token, account, user }) {
      // Save the access token and refresh token in the JWT on the initial login
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }
      // If access token is not expired, return current token
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      // If access token is expired, return updated token
      return refreshAccessToken(token);
    },
    // Sending token properties to the client
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    }
  }
})

export { handler as GET, handler as POST }
