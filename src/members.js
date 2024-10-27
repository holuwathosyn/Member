import React, { useState } from "react";
import "./App.css"; 


const users = [
  { id: 1, name: "James Helen", image: "/prewoman2.jpg" },
  { id: 2, name: "Solape Akinpelu", image: "/Solape Akinpelu.png" },
  { id: 3, name: "Olivia Lily", image: "/Woman.jpeg" },
  { id: 4, name: "Temitope Chritabel", image: "/shutterstock_628029770-1024x68433.webp" },
  { id: 5, name: "Emma Churchill", image: "/fourth.jpeg" },
  { id: 6, name: "Samuel Smith", image: "/thirdmen.webp" },
  { id: 7, name: "Thomas Leo", image: "/fifthx.webp" },
  { id: 8, name: "Thomas Alfie", image: "/thirdmen.webp" },
  { id: 9, name: "Smart Janet", image: "embedded-finance-icon.jpg" },
  { id: 10, name: "Will Jackson", image: "/Reasons-Why-You-Should-Invest-in-Fintech-Industry_inner.jpg" },
  { id: 11, name: "Nelson Oliv", image: "/1689601136132.jpeg" },
  { id: 12, name: "Tim Wale", image: "/152010012163403.jpeg" }
];

export default function Application() {
  const [currentPage, setCurrentPage] = useState(0); 
  const usersPerPage = 3; 
  const totalPages = Math.ceil(users.length / usersPerPage); 

  const startIndex = currentPage * usersPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + usersPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
    
      <h1 className="text-3xl font-bold text-blue-600 mb-8 fixed top-0  bg-gray-100 w-full py-4 text-center shadow-md z-10">
        User List
      </h1>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-20">
        {selectedUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mx-auto"
            />
            <h2 className="text-center text-xl font-semibold mt-4">{user.name}</h2>
          </div>
        ))}
      </div>

      
      <div className="mt-8 flex space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
