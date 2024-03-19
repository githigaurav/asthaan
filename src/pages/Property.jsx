import {listing} from './data.js'
import React, { useEffect, useState } from 'react'
import Card from './Card';
const Property = () => {
    const [property , setProperty]=useState([])
    const [data, setData]=useState(4)


    const loadMore = ()=>{
      setData(data + 4)
    }

  
useEffect(()=>{
    const proper = listing?.slice(0, data)
    setProperty(proper)
},[data])

  return (
    <>
         <div className="flex justify-center items-center p-3 flex-col gap-5 py-10 bg-primaryBg ">
            <section className='w-full max-w-[1440px]'>
                    <section className='text-primaryHead flex flex-col sm:flex-row justify-between items-center py-5'>
                    <h3 className='font-bold text-2xl'>Latest propteries</h3>
                    <section className='flex'>
                        <button className='bg-primaryBtn text-white py-2 px-5 border'>All</button>
                        <button className='bg-primaryBtn text-white py-2 px-5 border'>For Sale</button>
                        <button className='bg-primaryBtn text-white py-2 px-5 border'>For Rent</button>
                    </section>
                    </section>
                    <section  className='shadow-sm flex flex-wrap gap-3 justify-center items-center w-full'>
                        <Card data={property} className="transition-all ease-in-out duration-700"/>
                    </section>   
                    <section className='w-full flex items-center justify-center  mt-5'>
                        {
                            property?.length == 4 ? <button onClick={loadMore} className='hover:text-primaryBtn font-semibold text-primaryHead transition-all ease-in-out'>Load more</button> : null
                        }
                    </section> 
            </section>    
        </div>
    </>
  )
}

export default Property