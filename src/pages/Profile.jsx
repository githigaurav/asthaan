import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { UserProfile,UserButton } from "@clerk/clerk-react";
const Profile = () => {
    const { isSignedIn, user, isLoaded  } = useUser();
    console.log(user)
  return (
    <>
        <section>
            <UserButton afterSignOutUrl='/'/>            
        </section>
    </>
  )
}

export default Profile