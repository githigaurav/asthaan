import React from 'react'

const Hero = () => {
  return (
    <main className="w-full bg-secondaryBg flex relative justify-center items-center min-h-[500px] bg-[url('/assets/hero_background.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black opacity-50 "></div>
        <div className='flex flex-col gap-10 max-w-[1440px] px-3 relative'>
            <h1 className='text-primaryBg text-5xl font-bold'>Real Estate Made Real Easy</h1>
            <section className='flex flex-col gap-4 sm:flex-row '>
                <input type="text" placeholder='Search by name or location' className='bg-primaryBg text-primaryTxt w-full border rounded-lg py-2 px-5' />
                <button className='bg-primaryBtn rounded-lg py-2 px-5 '>Search</button>
            </section>
        </div>
    </main>
  )
}

export default Hero