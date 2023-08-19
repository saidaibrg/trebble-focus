// UI unique for the route: localhost:3000/logged 
// This file makes the above route publically accessible
import RedirectSpotify from "../../components/RedirectSpotify"

export default function Page() {
    return (
        <div>
            <RedirectSpotify />
            <h1>add SIGN IN AND SIGNOUT from next auth here, redirect to spotify should direct users here</h1>
        </div>
    )

  }