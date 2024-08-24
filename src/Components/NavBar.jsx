import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-b-2 p-4 lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center">
        <Link to="/" className="text-lg font-bold text-blue-700">Home</Link>
        <div className="hidden lg:flex md:flex space-x-4">
          <Link to="/form" className="text-lg font-bold text-blue-700">Patient Form</Link>
          <Link to="/patients" className="text-lg font-bold text-blue-700">Patients</Link> 
        </div>
        <div className="lg:hidden md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-lg font-bold text-[#f70070]">
            Menu
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden md:hidden flex flex-col space-y-2 p-4">
          <Link to="/form" className="text-lg text-blue-700 font-bold">Patient Form</Link>
          <Link to="/patients" className="text-lg text-blue-700 font-bold">Patients</Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default NavBar;

