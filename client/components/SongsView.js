
import {ArrowLeftCircleIcon} from '@heroicons/react/24/solid'
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function SongsView({setView, playlistID}) {
	const {data: session, status} = useSession();
	const [token, setToken]= useState(null)
	const [songs, setSongs]= useState(null)

	useEffect(() => {
		async function fetchPlaylist() {
		if (session && session.accessToken) {
			setToken(session.accessToken)
			const response=await fetch(`https://api.spotify.com/v1/playlists/${playlistID}`, {
			headers: {
				Authorization: `Bearer ${session.accessToken}`
			}
			})
			const data=await response.json()
			setSongs(data)
		}
		}
		fetchPlaylist()
	},[session])
  
	return (
		<div className="max-w-2xl text-dogwood mt-6 mx-auto">
			{/* Displays selected playlist name */}
			<span className="text-xl font-medium">{songs?.name} </span>
			{/* Displays songs in playlist */}
			<div className="pt-4">
				{songs?.tracks.items.map((song, i) => {
					return (
						<div key={song.track.id}>{song.track.name} </div>
						
					)}
				)}
			</div>
			<div>
				<button onClick={() => setView("playlists")}>
					<ArrowLeftCircleIcon className="h-8 w-8 mt-6 text-dogwood" />
					<p>Playlists</p>
				</button>
			</div>
			
		</div>
	);
}



