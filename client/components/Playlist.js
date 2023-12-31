'use client'

import React from "react";
// Session object allows access for the user's Spotify data
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Playlist({setView, setPlaylistID}) {
  // In the case of successful authentication, data will be Session object
  // In the case of unsuccessful authentication, data will be null
  const {data: session, status} = useSession();
  const [token, setToken]= useState(null)
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
    <div className="max-w-2xl text-dogwood mt-6 mx-auto">
      {
        playlists.map((playlist) => (
          <div key={playlist.id} className="cursor-pointer mt-1 hover:text-mint-cream" >
            <button onClick={()=>{
                setView('songs') 
                setPlaylistID(playlist.id)
              }}>{playlist.name}</button>
          </div>)
        )
      }
    </div>
  )
}
