import React from 'react'
import { useUser , UserButton , useAuth } from "@clerk/clerk-react";

const Profile = () => {
  const {userId, sessionId}=useAuth()
    const { isSignedIn, user, isLoaded  } = useUser();
    console.log(userId)
    console.log(sessionId)
  return (
    <>
        <section>
            <UserButton afterSignOutUrl='/'/>            
        </section>
    </>
  )
}

export default Profile