'use client'

// Session object allows access for the user's Spotify data
import { useSession } from "next-auth/react";
import { headers } from "next/dist/client/components/headers";
import { useState, useEffect } from "react";

export default function Page() {
  // In the case of successful authentication, data will be Session object
  // In the case of unsuccessful authentication, data will be null
  const { data: session, status } = useSession();
  const [token, setToken]= useState('')
  const [playlists, setPlaylists]= useState([])

  useEffect(() => {
    async function fetchPlaylists() {
      if (session && session.accessToken) {
        setToken(session.accessToken)
        const response=await fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${session.accessToken}`
          }
        })
        const data=await response.json()
        setPlaylists(data.items)
      }
    }
    fetchPlaylists()
  },[session])

  return (
    <div>
      access token: {token}
      {playlists.map((playlist) => <div key={playlist.id}>{playlist.name}</div>)}
    </div>)
}




// UI unique for the route: localhost:3000/logged 
// This file makes the above route publically accessible
