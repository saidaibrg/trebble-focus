import Navbar from "/components/Navbar";
import About from "/components/About";
import RedirectSpotify from "/components/RedirectSpotify";

export default function Page() {
    return (
    <div>
      <div className="max-w-2xl min-h-screen mx-auto">
        <Navbar />
        <h1 className="mt-8 text-rose text-2xl">[Timer Placeholder]</h1>
        <RedirectSpotify />
        <About />
      </div>
     
    </div>
    )
  }