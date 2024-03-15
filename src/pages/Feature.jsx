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
      <div className="flex justify-center items-center p-3 flex-col gap-5">
        <section ref={userRef} className=' max-w-[1440px] flex overflow-y-hidden overflow-x-auto gap-3 scroll-smooth scrollControl'>
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