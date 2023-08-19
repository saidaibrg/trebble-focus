'use client'

import {Button} from '@nextui-org/button'; 
import { signIn} from "next-auth/react"

export default function RedirectSpotify() {
  return (
    <div>
      <Button onClick={() => signIn('spotify')} className='bg-dogwood text-rose mt-6 text-xl'>
        Sign in
      </Button>
    </div>
  )
}

 // if (session) {
  //   return (
  //   <div>
  //     Signed in as {session.user.email};
  //     <Button onClick={() => signOut()} className='bg-dogwood text-rose mt-6 text-xl'>
  //       Sign out
  //     </Button>
  //   </div>
  //   )
  // }
