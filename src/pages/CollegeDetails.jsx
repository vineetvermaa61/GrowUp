import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CollegeDetails = () => {
  const navigate = useNavigate();
  const { college_name } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const response = await fetch('/college_data.json');
        const data = await response.json();
        const selectedCollege = data.colleges.find(col => col.college_name === college_name);
        setCollege(selectedCollege);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the college details:", error);
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [college_name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!college) {
    return <div>College not found.</div>;
  }

  return (
    <div className="mt-14 xl:mx-10">


<div className="college-details container mx-auto sm:my-10 my-0 p-8 bg-white shadow-2xl rounded-lg relative">
      {/* Header Section with College Image and Name */}


      
{/* Back Button */}
<button
        onClick={handleBack}
        className="md:absolute top-[30%] left-[85%] flex items-center justify-center p-2 shadow-md  text-gray-500 rounded-full transition duration-300 ease-in-out group bg-gray-300 hover:bg-gray-400 hover:text-gray-900
        border-gray-400 border-2"
      >
        {/* Back Icon */}
        <svg
          className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300 ease-in-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>

        {/* Back Text (Hidden by default, shown on hover) */}
        <span className="ml-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back
        </span>
      </button>

      <div className="flex flex-col justify-between sm:flex-row items-center sm:items-start">
       

        {/* College Name and Type */}
        <div className="college-name-container text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-900">{college.college_name}</h1>
          <p className="text-xl font-semibold text-gray-600 mt-2">{college.college_type}</p>
          <p className="text-md font-medium text-gray-500 mt-1 italic">{college.institute_type}</p>
        </div>

         {/* Passport Size College Image */}
         <div className="college-image-container mb-6 sm:mb-0 sm:mr-8">
          <img
            src={college.college_image_link}
            alt={college.college_name}
            className="w-56 h-44 object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

      {/* College Description */}
      <div className="college-description md:-mt-8 mt-2">
        <h2 className="text-2xl font-semibold text-gray-800">About the College</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">{college.college_description}</p>
      </div>

      {/* College Info */}
      <div className="college-info grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div>
          <p><strong>Location:</strong> {college.location}</p>
          <p><strong>Campus Area:</strong> {college.campus_area} </p>
          <p><strong>Established:</strong> {college.establish_year}</p>
        </div>
        <div>
          <p><strong>NIRF Ranking:</strong> {college.NIRF_ranking}</p>
          <p><strong>Median Package:</strong> ₹{college.college_median_package}</p>
          <p><strong>Average Package:</strong> ₹{college.college_average_package}</p>
        </div>
      </div>

      {/* Programs and Courses Offered */}
      <div className="programs-courses mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Programs Offered</h2>
        <p className="text-gray-700 mt-2">{college.program.join(", ")}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Courses Offered</h2>
        <ul className="text-gray-700 mt-2 list-disc list-inside">
          {college.courses_offering.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      {/* Facilities */}
      <div className="facilities mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Facilities</h2>
        <p className="text-gray-700 mt-2">{college.facilities.join(", ")}</p>
      </div>

      {/* Admission and Eligibility */}
      <div className="admission-eligibility mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Mode of Admission</h2>
          <p className="text-gray-700 mt-2">{college.mode_of_admission}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Eligibility Criteria</h2>
          <p className="text-gray-700 mt-2">{college.eligibility_criteria}</p>
        </div>
      </div>

      {/* Placement Highlights */}
      <div className="placement-highlights mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Placement Highlights</h2>
        <p className="mt-4"><strong>Highest Package:</strong> ₹{college.placement_highlights.highest_package}</p>
        <p><strong>Placement Rate:</strong> {college.placement_highlights.placement_rate}%</p>
        <p><strong>Top Recruiters:</strong> {college.placement_highlights.top_recruiters.join(", ")}</p>
      </div>
    </div>


  </div>
  );
};

export default CollegeDetails;
