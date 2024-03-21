import React from 'react'
import{Outlet , Navigate} from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import Loader from '@/utils/Loader'

const AuthRoutes = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  if(!isLoaded){
    return <Loader/>
  }
  return (
    <>  
    {isSignedIn ? <Outlet/>: <Navigate to="/sign-in"/>}
    </>
  )
}



export  {AuthRoutes}