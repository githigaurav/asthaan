import React, { useState } from 'react'

const Test = () => {
    const[input, setInput]=useState('')

    

const handleChange =(e)=>{
    e.stopPropagation()
    console.log("setup value")
    setInput(e.target.value)
    }

    const stopPropogation =(e)=>{    
        e.stopPropagation();   
        console.log("Auto generated")
    }

  return (
    <>
        <div>
                <section onClick={stopPropogation} className='bg-green-600 p-10'>
                    <input type="text" placeholder="Enter the value" className='border ' onChange={handleChange} onClick={(e)=> e.stopPropagation()} />
                </section>
        </div>
    </>
  )
}

export default Test