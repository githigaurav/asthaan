import React from "react";

const Card = () => {
    const data = {
        image: "https://nglproperty.com/wp-content/uploads/2023/12/Property.webp",
        price:"50L",
        landmark:"Rajpur road, Dehradun",
        location:"Dehradun , Uttrakhand",
        amities:["2 Bed","2 Bathroom"],

    };

    return (
        <>
            <div className="max-w-[324px] min-w-[324px] p-3 border border-blue-600">
                <section>
                    <section className="overflow-hidden">
                        <img src={data.image} alt="" className="hover:scale-125 transition-all duration-150 ease-in-out" />
                    </section>
                    <section className="text-primaryTxt flex flex-col gap-1">
                        <span className="text-primaryHead text-lg">&#8377; {data.price}</span>
                        <hr className="max-w-[100px]" />
                        <span>{data.landmark}</span>
                        <h3 className="font-bold text-xl text-primaryHead">{data.location}</h3>
                        <section className="flex gap-3">
                            {data?.amities.map((avail)=> <span>{avail}</span>)}
                        </section>
                        <button className="font-semibold hover:text-primaryBtn transition-all ease-in-out duration-150 mt-3">See more details</button>
                    </section>
                </section>
            </div>
        </>
    );
};

export default Card;
