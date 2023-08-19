import About from "/components/About";
import RedirectSpotify from "/components/RedirectSpotify";
import Playlist from "/components/Playlist";

export default function Page() {
    return (
    <div>
      <div className="max-w-2xl min-h-screen mx-auto">
        <RedirectSpotify />
        <About />
      </div>
    </div>
    )
  }