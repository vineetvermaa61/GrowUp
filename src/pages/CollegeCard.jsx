import React from "react";
import { useNavigate } from "react-router-dom";

const CollegeCard = ({ college, onClick }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
  return (
    
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden " onClick={onClick}>
        
        <div className="relative cursor-pointer ">

            <img className="w-full" src={college.college_image_link}
        alt={college.college_name} />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
            
            {/* Rectangle shape */}
            <div className="absolute bottom-0 left-0 bg-green-700 px-4 py-2 text-white text-sm hover:bg-white 
                hover:text-green-700 transition duration-500 ease-in-out">
                {college.college_type}
            </div>
            
            {/* Ball Icon */}
            <div className="text-sm absolute top-0 right-0 bg-green-700 px-4 text-white rounded-full h-16 w-16 flex flex-col   
                items-center justify-center mt-3 mr-3 hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
                <span className="font-bold">NIRF</span>
                <small>{college.NIRF_ranking}</small>
            </div>
            
        </div>

        <div className="px-6 py-4">
        
            <a href="#" className="font-semibold text-lg inline-block hover:text-gray-600 transition duration-500 ease-in-out">{college.college_name}</a>
            <p className="text-gray-500 text-sm">
            {college.location}
            </p>
        </div>

        <div className="px-6 pt-4 flex flex-row items-center justify-between">
            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <img className="w-4" src="./book-svgrepo-com.svg" />
            <span className="ml-1 truncate"> {college.program.join(", ")}</span>
            </span>


            
            <a className="text-[0.8rem] text-gray-600 hover:text-green-900 hover:underline truncate cursor-pointer">See details</a>


        </div>



    </div>
  );
};

export default CollegeCard;
