'use client'

import Playlist from "../../components/Playlist"
import Countdown from "../../components/Countdown"

export default function Page() {
  return (
    <div>
      <Countdown />
      <Playlist />
    </div>
  )
}




// UI unique for the route: localhost:3000/logged 
// This file makes the above route publically accessible
