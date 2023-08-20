'use client'

import {Button} from '@nextui-org/button'; 
import {signIn, useSession, signOut} from "next-auth/react"

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
        <Button onClick={() => signIn('spotify')} className='bg-dogwood text-rose mt-6 text-xl'>
          Sign in
        </Button>
      </div>
    )
  }
}

