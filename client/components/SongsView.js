
import {ArrowLeftCircleIcon} from '@heroicons/react/24/solid'

export default function SongsView({setView, playlistID}) {
	return (
		<div className="max-w-2xl text-dogwood mt-6 mx-auto">
			<span className="text-xl font-medium">Songs for each playlist </span>
			<div>
				<button onClick={() => setView("playlists")}>
					<ArrowLeftCircleIcon className="h-8 w-8 mt-6 text-dogwood" />
					<p>Playlists</p>
				</button>
			</div>
		</div>
	);
}
