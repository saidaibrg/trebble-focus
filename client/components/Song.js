
import {PlayIcon, PauseIcon, ArrowLeftCircleIcon} from '@heroicons/react/24/solid'
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Song({track}) {
    const {data: session, status} = useSession();
	const [token, setToken]= useState(null)
	const [isSongPlaying, setIsSongPlaying]= useState(false)
    const [currentSong, setCurrentSong]= useState(null)


    async function playSong(track) {
        setCurrentSong(track.id)
        setIsSongPlaying(true)
        if (session && session.accessToken) {
            setToken(session.accessToken)
            const response = await fetch("https://api.spotify.com/v1/me/player/play", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${session.accessToken}`
                },
                body: JSON.stringify({
                    uris: [track.uri]
                })
            })
            console.log("on play", response.status)
        }
    }

    return (
        <div onClick={async () => await playSong(track)} className='grid grid-cols-2 hover:bg-rose hover:cursor-pointer'>
            <div  className='flex flex-row m-2'>
                <img className="h-14 w-14" src={track.album.images[0].url} />
                <p className='my-4 mx-2'>{track.name} </p>
            </div>	
        </div>	    
    );
}



// const [hover, setHover]=useState(false)
//     async function pauseSong(track){
//         setIsSongPlaying(false)
//         if (session && session.accessToken) {
// 			setToken(session.accessToken)
//             const response = await fetch("https://api.spotify.com/v1/me/player/pause", {
//                 method: "PUT",
//                 headers: {
//                     Authorization: `Bearer ${session.accessToken}`
//                 },
//                 body: JSON.stringify({
//                     uris: [track.uri]
//                 })
//             })
//             console.log("on pause", response.status)
//         }
// 	}

// 	async function playSong(track) {
//         setCurrentSong(track.id)
//         setIsSongPlaying(true)
//         if (session && session.accessToken) {
// 			setToken(session.accessToken)
//             const response = await fetch("https://api.spotify.com/v1/me/player/play", {
//                 method: "PUT",
//                 headers: {
//                     Authorization: `Bearer ${session.accessToken}`
//                 },
//                 body: JSON.stringify({
//                     uris: [track.uri]
//                 })
//             })
//             console.log("on play", response.status)
//         }
//     }
    
// 	return (
// 		<div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}  className='flex flex-row m-2'>
// 			{/* In the case the value of isSongPlaying is true, the pause icon is displayed */}
// 			{/* In the case the value of isSongPlaying is false, the play icon is displayed */}
// 			{isSongPlaying===true && <PauseIcon onClick={async () => await pauseSong(song.track)} className="h-6 w-6 m-4 text-dogwood hover:text-mint-cream" />}
// 			{hover? <PlayIcon onClick={async () => await playSong(song.track)} className="h-6 w-6 m-4 text-dogwood hover:text-mint-cream" />: <PlayIcon className='hidden'/>}
// 			<img className="h-14 w-14" src= {song.track.album.images[0].url} />
// 			<div className='my-4 mx-2' key={song.track.id}>{song.track.name} </div>		
// 		</div>					
// 	);
// }



