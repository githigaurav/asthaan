import React, { useRef, useState } from 'react';
import Card from './Card'

const Feature = () => {
  const userRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(360);

  const handlePrev = () => {
    userRef.current.scrollLeft -= scrollWidth
  }

  const handleNext = () => {
    userRef.current.scrollLeft += scrollWidth;
  }

  const handleDrag =()=>{
    console.log("working")
  }
  return (
    <>
      <div className="flex justify-center items-center p-3 flex-col gap-5 py-10 bg-primaryBg">
        <section className='text-primaryHead flex flex-col sm:flex-row justify-between items-center py-5 w-full max-w-[1440px]'>
          <h3 className='font-bold text-2xl'>Latest propteries</h3>
          <section className='flex'>
            <button className='bg-primaryBtn text-white py-2 px-5 border'>All</button>
            <button className='bg-primaryBtn text-white py-2 px-5 border'>For Sale</button>
            <button className='bg-primaryBtn text-white py-2 px-5 border'>For Rent</button>
          </section>
        </section>
        <section ref={userRef} className='w-full max-w-[400px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]  flex overflow-y-hidden overflow-x-hidden gap-3 scroll-smooth scrollControl shadow-sm '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <section className='max-w-[1440px] flex gap-5 w-full justify-between'>
          <button onClick={handlePrev} className='bg-primaryBtn  py-2 px-5'>Prev</button>
          <button onClick={handleNext} className='bg-primaryBtn  py-2 px-5'>Next</button>
        </section>

      </div>
    </>
  )
}

export default Feature