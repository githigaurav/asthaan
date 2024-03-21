import React from 'react'

const NoInternet = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <section className='w-full max-w-[1440px] flex flex-col justify-center items-center p-3'>
            <h1 className='font-bold text-2xl text-red-500'>Opps ! No Internet</h1>
            <img src="./assets/noInternet.jpg" alt="no_internet" className='w-full min-w-[200px] max-w-[600px] ' />
        </section>
    </div>
  )
}

export default NoInternet