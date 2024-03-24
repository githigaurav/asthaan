import React, { useState } from "react";

const AddProperty = () => {
  const [open, setOpen] = useState(false);
  const [amenities, setAmenities] = useState("");
  const [amenitiesVal, setAmenitiesVal] = useState(0);
  const [data, setData] = useState({
    propertyName: "",
    listingType: "",
    propertyType: "",
    buildingType: "",
    view: "",
    facingDirection: "",
    plotNo: 0,
    loanAvailability: "",
    amenities: [
      { name: "Bedroom", value: 0 },
      { name: "Bathroom", value: 0 },
    ],
    area: 0,
    price: 0,
    city: "",
    locality: "",
  });

  const handleAmenitiesChange = (e) => {
    setOpen(true);
    setAmenities(e.target.value);
  };

  const handleAmenitiesVal = (e) => {
    setAmenitiesVal(e.target.value);
  };

  const handleAmenitiesClear = () => {
    setAmenities("");
    setAmenitiesVal(0);
    setOpen(false);
  };

  const handleAmenitiesSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const dataIndex = data.amenities.findIndex(
      (data) => data.name === amenities
    );

    if (dataIndex !== -1) {
      const updateAmenities = [...data.amenities];
      updateAmenities[dataIndex] = {
        ...updateAmenities[dataIndex],
        value: amenitiesVal,
      };
      setData((prev) => ({ ...prev, amenities: updateAmenities }));
    }

    setAmenities("");
    setAmenitiesVal(0);
    setOpen(false);
  };

  const handleDeleteAmenities = (index) => {
    console.log(index);
    return () => {
      const exAmenities = [...data.amenities];
      exAmenities[index] = { ...exAmenities[index], value: 0 };
      console.log(exAmenities[index]);
      setData((prev) => ({ ...prev, amenities: exAmenities }));
    };
  };

  return (
    <div className="flex justify-center items-center transition-all w-full p-3  ">
      <section className=" w-full max-w-[600px] h-fit   p-5 mt-5 grid grid-cols-2 gap-x-2 gap-y-3 sm:gap-y-5 shadow-lg border border-gray-200">
        {open && (
          <>
            <div
              className="bg-black h-screen w-full absolute top-0 left-0 bg-opacity-50 justify-center flex  "
              onClick={handleAmenitiesClear}
            >
              <div className="relative z-20 flex flex-col h-fit w-full gap-5 max-w-[400px] border py-20 px-10 bg-black bg-opacity-50">
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  className="border py-2 px-3"
                  onChange={handleAmenitiesVal}
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={handleAmenitiesSave}
                  className="bg-primaryBtn py-2 px-3 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </>
        )}

        <input
          type="text"
          placeholder="Property name"
          className="border py-2 px-3 col-span-2 sm:col-span-1"
        />

        <select
          name="listingType"
          id=""
          className="border py-2 px-3 text-secondaryTxt  col-span-2 sm:col-span-1"
        >
          <option value="">Select Listing Type</option>
          <option value="Sale">Sale</option>
        </select>

        <select
          name="propertyType"
          id=""
          className="border py-2 px-3 text-secondaryTxt  col-span-2 sm:col-span-1"
        >
          <option value="">Property Type</option>
          <option value="Residential">Residential</option>
          <option value="Commerial">Commerial</option>
        </select>

        <select
          name="buildingType"
          id=""
          className="border py-2 px-3 text-secondaryTxt  col-span-2 sm:col-span-1"
        >
          <option value="">Building Type</option>
          <option value="Residential">Plot</option>
          <option value="Commerial">Standalone</option>
          <option value="Apartment">Apartment</option>
        </select>

        <input type="text" placeholder="View" className="border py-2 px-3  col-span-2 sm:col-span-1" />

        <select
          name="facingDirection"
          id=""
          className="border py-2 px-3 text-secondaryTxt  col-span-2 sm:col-span-1"
        >
          <option value="">Facing Direction</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="North-East">North-East</option>
          <option value="North-West">North-West</option>
          <option value="South-East">South-East</option>
          <option value="South-West">South-West</option>
        </select>

        <section className={`col-span-2 flex gap-2`}>
          {data?.amenities?.map((item, index) =>
            item.value !== 0 ? (
              <button
                key={index}
                onClick={handleDeleteAmenities(index)}
                className="cursor-pointer hover:bg-red-500 transition-all text-sm  bg-primaryHead py-2 px-2 rounded-full flex gap-2 text-white"
              >
                {item.name}
                <span className="bg-primaryBg rounded-full text-primaryHead px-2 text-sm">
                  {item.value}
                </span>
              </button>
            ) : null
          )}
        </section>
        <select
          id=""
          name="Amenities"
          className="border py-2 px-3 text-secondaryTxt  col-span-2 sm:col-span-1"
          onChange={handleAmenitiesChange}
        >
          <option value="">Select Amenities</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
        </select>

        <input
          type="number"
          placeholder="Plot No"
          className="border py-2 px-3  col-span-2 sm:col-span-1"
        />
        <input type="number" placeholder="Area" className="border py-2 px-3  col-span-2 sm:col-span-1" />
        <input type="text" placeholder="City" className="border py-2 px-3  col-span-2 sm:col-span-1" />
        <input
          type="locality"
          placeholder="Locality"
          className="border py-2 px-3  col-span-2 sm:col-span-1 "
        />
        <input type="number" placeholder="Price" className="border py-2 px-3  col-span-2 sm:col-span-1" />
        <select
          name="loanAvailbility"
          id=""
          className="border py-2 px-3 text-secondaryTxt  col-span-2 "
        >
          <option value="">Loan Availablity</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea name="" id="" cols="30" rows="10" placeholder="Other information of property " className=" border p-3  col-span-2 "></textarea>
        <button className="bg-primaryBtn p-2 hover:bg-primaryHead transition-all duration-150  text-white  col-span-2">
          Add Property
        </button>
      </section>
    </div>
  );
};

export default AddProperty;
