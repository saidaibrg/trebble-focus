'use client'

import Playlist from "../../components/Playlist"
import Countdown from "../../components/Countdown"
import SongsView from "../../components/SongsView"
import { useState } from "react"


export default function Page() {
  const [playlistID, setPlaylistID]=useState(null)
  // playlists view (default, shows all playlistw) or songs view (shows songs for a specific playlist)
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




// UI unique for the route: localhost:3000/logged 
// This file makes the above route publically accessible
