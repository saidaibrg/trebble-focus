'use client'

// UI unique for the route: localhost:3000/logged 
// This file makes the above route publically accessible

import Playlist from "../../components/Playlist"
import Countdown from "../../components/Countdown"
import SongsView from "../../components/SongsView"
import { useState } from "react"


export default function Page() {
  const [playlistID, setPlaylistID]=useState(null)

  // State variable that determines which view to display
  // Playlists view (default, shows all playlists) 
  // Songs view (shows songs for a specific playlist)
  const [view, setView]=useState('playlists') 

  return (
    <div>
      <Countdown />
      {/* if view is playlists, display playlist view if view is songs, display songs view */}
      {view==='playlists' && <Playlist setView={setView} setPlaylistID={setPlaylistID} />}
      {view==='songs' && <SongsView setView={setView} playlistID={playlistID} />}
    </div>
  )
}


