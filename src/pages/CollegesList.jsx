import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollegeCard from "./CollegeCard";

const CollegesList = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate();

//   // Fetch data from data.json when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('./college_data.json');
//         const data = await response.json();
//         setColleges(data.colleges);
//         setFilteredColleges(data.colleges); // Default to showing all colleges
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching the college data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/college_data.json'); // Use absolute path starting from public folder
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setColleges(data.colleges);
        setFilteredColleges(data.colleges); // Default to showing all colleges
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the college data:", error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  // Handle filter change when a button is clicked
  const handleFilterChange = (type) => {
    setSelectedFilter(type);
    if (type === "All") {
      setFilteredColleges(colleges);
    } else {
      const filtered = colleges.filter((college) => college.college_type === type);
      setFilteredColleges(filtered);
    }
  };

  const handleCollegeClick = (college_name) => {
    navigate(`/colleges/${college_name}`);  // Use college_name for navigation
  };

  if (loading) {
    return <div className="w-36 h-36">
            <p>Loading...</p>
         </div>;
  }

  return (
    <div className="college-list pt-16 bg-[#F0F0EE]">

      <div className="text-center pt-10 pb-4">
        <h1 className="font-bold text-4xl">Top Indian Engineering Colleges</h1>
    </div>
      
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("All")} className={selectedFilter === "All" ? "active" : ""}>All</button>
        <button onClick={() => handleFilterChange("IIT")} className={selectedFilter === "IIT" ? "active" : ""}>IIT</button>
        <button onClick={() => handleFilterChange("NIT")} className={selectedFilter === "NIT" ? "active" : ""}>NIT</button>
        <button onClick={() => handleFilterChange("IIIT")} className={selectedFilter === "IIIT" ? "active" : ""}>IIIT</button>
        <button onClick={() => handleFilterChange("Other")} className={selectedFilter === "Other" ? "active" : ""}>Other</button>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {filteredColleges.map((college, college_name) => (
          <CollegeCard
             key={college.college_name} 

            college={college}
            onClick={() => handleCollegeClick(college.college_name)}
          />
        ))}
      </div>
    </div>
  );
};

export default CollegesList;


