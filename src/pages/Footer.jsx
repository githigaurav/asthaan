import React from 'react'

const Footer = () => {
    const show=[
        { heading : "Company",
            details : ['Careers', 'Services', 'Contact Us', 'Terms& Conditions','Policy of Use']
        },

        {
            heading: "Network Sites",
            details: ["Asthaan India" ,"Asthaan Canada","Asthaan Singapore","Asthaan Australia","Interior Company"]
        },

        {
            heading: "Solutions",
            details:[ "Asthaan Connect", "Asthaan Prime Connect", "Smart Agent", "Realizing", "Rent Agreement"]
        },
        
        {
            heading: "Resources",
            details: ["Data Intelligence","Asthaan Reviews","Real Estate","Cities Real Estate","Awards & Recognition"]
        }

    ]
  return (
   <>
    <footer className='text-primaryTx w-full flex flex-col justify-center items-center '>
        <section className='w-full max-w-[1440px]  grid grid-cols-2 lg:grid-cols-4 place-content-center gap-10 place-items-left py-10 px-5'>
            
            {show?.map((topic, head) =>(
                
                <div className='flex flex-col gap-3' key={head}>
                    <h2 className='font-semibold text-primaryHead text-start uppercase'>{topic.heading}</h2>

                    {(topic?.details).map((subkey, count)=>(
                        <div className='' key={count}>{subkey}</div>
                    ))}
                </div>
              
            ))}  
        </section>
        <hr className='w-full max-w-[1440px]' />
        <section className='py-2'>
                    <span className='font-semibold italic text-secondaryTxt'>@Copy rights reserved</span>
            
        </section>
        </footer>
   </>
  )
}

export default Footer