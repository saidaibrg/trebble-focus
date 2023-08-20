'use client'

import {Button} from '@nextui-org/button'; 
import {signIn, useSession, signOut} from "next-auth/react"

// CallbackURL - /logged - is the URL to redirect to after a successful sign in

export default function RedirectSpotify() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        Signed in as {session.user.email}
        <br />
        <Button onClick={() => signOut('spotify')} className='bg-dogwood text-rose mt-6 text-xl'>
          Sign Out 
        </Button>
      </div>
    );
  }
  else {
    return (
      <div>
        Not signed in yet 
        <br />
        <Button onClick={() => signIn('spotify', { callbackUrl: "/logged"})} className='bg-dogwood text-rose mt-6 text-xl'>
          Sign in
        </Button>
      </div>
    )
  }
}

// TODO: better styling for the display of user's data after they are signed in 