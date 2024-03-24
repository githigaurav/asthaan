import React from "react";


const Card = ({data}) => {

    return (
        <>

            {
                data?.map((data , index)=>{
                    return(
                    <>
                        <div className="max-w-[324px] min-w-[324px] p-3 border ">
                        <section>
                            <section className="overflow-hidden">
                                <img src={data.image} alt="" className="hover:scale-125 transition-all duration-150 ease-in-out" />
                            </section>
                            <section className="text-primaryTxt flex flex-col gap-1">
                                <span className="text-primaryHead text-lg">&#8377; {data.price}</span>
                                <hr className="max-w-[100px]" />
                                <span>{data.landmark}</span>
                                <h3 className="font-bold text-xl text-primaryHead">{data.location}</h3>
                                <section  className="flex gap-3"  key={index} >
                                    {data?.amities.map((avail)=> <span>{avail}</span>)}
                                </section>
                                <button className="font-semibold hover:text-primaryBtn transition-all ease-in-out duration-150 mt-3">See more details</button>
                            </section>
                        </section>
                    </div>
                    </>
                    )
                })
            }

        </>
    );
};

export default Card;
