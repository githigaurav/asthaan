import React, { useState } from "react";

const AddProperty = () => {
  const [open, setOpen] = useState(false);
  const [amenities, setAmenities] = useState("");
  const [drag, setDrag]=useState(false)
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
    images:[
      
    ]
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


  const handleDragOver = (e)=>{
      e.preventDefault()
      setDrag(true)
  }

  const handleDragEnter = (e) => {
    e.preventDefault();
   
};

const handleDragLeave = () => {
  setDrag(false);
};

const handleDrop = (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  handleFiles(files);
};

const handleFiles = (files) => {
  const newImages = [...data.images, ...files];
  setData((prev) => ({ ...prev, images: newImages }));
};

const handleFileInput = (e) => {
  const file = Array.from(e.target.files)
  const exData = [...data.images , ...file.map((file)=> file)]
  setData((prev)=> ({...prev, images:exData})) 
};

const handleDelete = (fileIndex) =>{
  return()=>{
    const exData=[...data.images]
    const updateData=exData.filter((_, index)=> index !== fileIndex)
    setData({...data, images:updateData})
  }
}
console.log(data.images)
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


    
              {/* dropping zone for file upload  */}
          <label htmlFor="uploadFile" className={`border py-5 px-3  col-span-2 flex justify-center items-center  border-dashed ${drag ? "border-blue-300 bg-blue-300 shadow-lg" : "border-gray-300"} w-full`}
           onDragOver={handleDragOver}
           onDragEnter={handleDragEnter}
           onDragLeave={handleDragLeave}
           onDrop={handleDrop}
          >
            <input type="file" id="uploadFile" className="hidden" multiple
            onChange={handleFileInput}
            />
            <div className="flex justify-center items-center ">
                <img src="./assets/upload.png" className="max-w-[100px]" alt="" />
            </div>
          </label>

          {/* uploaded file bar */}
          {
        data.images.map((file , index)=>{
          return    <section  className=" border p-3  col-span-2 bg-blue-600 rounded-md flex gap-3">
          <img src={URL.createObjectURL(file) || "./assets/upload.png"} alt="" className="max-w-[50px] border rounded-md"/>
          <section className="w-full flex  justify-center items-center flex-col gap-2 " >
            <div className="w-full flex  justify-between    text-white">
              <span>{file.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-500 cursor-pointer"
              onClick={handleDelete(index)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>

            </div>
            {/* loading progress */}
            <div className="bg-white w-full rounded-full flex items-center p-0 m-0 h-[10px] overflow-hidden">
              <div className="bg-green-600 w-1/2 rounded-full px-5 text-white text-sm h-[10px]">
                  
              </div>
            </div>
          </section>
      </section>
        })
       }
       
       
        <textarea name="" id="" cols="30" rows="10" placeholder="Other information of property " className=" border p-3  col-span-2 "></textarea>
        <button className="bg-primaryBtn p-2 hover:bg-primaryHead transition-all duration-150  text-white  col-span-2">
          Add Property
        </button>
      </section>
    </div>
  );
};

export default AddProperty;
