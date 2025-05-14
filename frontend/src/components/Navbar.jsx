import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CreateJobModal from './createJob';
import { FaSearch } from "react-icons/fa";
import jt2 from '../assets/jt2.svg'
import loc from '../assets/loc.svg'

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="
    absolute 
    top-[21px] 
    left-[275px] 
    w-[890px] 
    h-[80px] 
    border 
    border-gray-200 
    rounded-[122px] 
    bg-white 
    shadow-lg 
    px-6 
    py-3 
    flex 
    items-center 
    justify-between 
    gap-8
    ms-8
  "
      >

        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8"
        />

        <ul className="flex flex-row  gap-18 text-sm font-medium text-gray-800">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Find Jobs</Link></li>
          <li><Link to="/talents">Find Talents</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-[#A128FF] to-[#6100AD] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md"
        >
          Create Jobs
        </button>
      </nav>

      <CreateJobModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="w-full h-auto mt-[120px] px-4 md:px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white font-medium shadow-sm">
        {/* Search Input */}
        <div className="flex items-center gap-2 border-r-2 p-3 h-[48px] border-gray-300 p-3">
          <FaSearch className="text-gray-500 me-2" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="outline-none text-sm w-full"
          />
        </div>

        {/* Location Filter */}
        <div className="flex items-center gap-2 border-r-2 p-3 h-[48px] border-gray-300 p-3">
          <img src={loc} className="text-gray-500 w-4 me-3" />
          <input type="text" placeholder="Preferred Location" className="outline-none text-sm w-full" />
        </div>

        {/* Job Type Filter */}
        <div className="flex items-center gap-2 border-r-2 p-3 h-[48px] border-gray-300 p-3">
          <img src={jt2} className="text-gray-500 me-1 w-4" />
          <select className="text-sm outline-none w-full text-gray-500">
            <option>Job type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
        </div>

        {/* Salary Range Filter */}
        <div className="w-full p-3">
          {/* Label Row */}
          <div className="flex justify-between text-sm  font-medium mb-2">
            <span>Salary Per Month</span>
            <span>₹50k - ₹80k</span>
          </div>

          {/* Single Range Slider with Static Labels */}
          <div className="flex items-center gap-2 w-full">
            {/* <span className="text-xs text-gray-700">₹50k</span> */}
            <input
              type="range"
              min="50000"
              max="80000"
              className="w-full appearance-none bg-transparent
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-black
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-webkit-slider-thumb]:-mt-1
        [&::-webkit-slider-runnable-track]:h-1
        [&::-webkit-slider-runnable-track]:bg-gray-300
        [&::-webkit-slider-runnable-track]:rounded-full"
            />
            {/* <span className="text-xs text-gray-700">₹80k</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
