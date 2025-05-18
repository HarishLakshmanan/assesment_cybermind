import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CreateJobModal from './createJob';
import { FaSearch } from "react-icons/fa";
import jt2 from '../assets/jt2.svg';
import loc from '../assets/loc.svg';
import * as Slider from '@radix-ui/react-slider';

export default function Navbar({ setSearchTerm,
  setLocationFilter,
  setJobTypeFilter,
  minSalary,
  maxSalary,
  setMinSalary,
  setMaxSalary }) {
  const [showModal, setShowModal] = useState(false);
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(90000);

  return (
    <>
      <div className="w-[1440px] h-[214px] grid grid-cols-4 lg:flex-1 gap-4 mt-30 mx-auto">
        {/* Navigation */}
        <nav className="absolute top-[21px] left-[275px] w-[890px] h-[80px] border border-gray-200 rounded-[122px] bg-white shadow-lg px-6 py-3 flex items-center justify-between gap-8 ms-8">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <ul className="flex flex-row gap-18 text-sm font-medium text-gray-800">
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

        {/* Search Input */}
        <div className="flex items-center gap-2 border-r-2 p-3 h-[48px] border-gray-300">
          <FaSearch className="text-gray-500 me-2" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="outline-none text-sm w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Location Filter */}
        <div className="flex items-center gap-2 border-r-2 p-3 h-[48px] border-gray-300">
          <img src={loc} className="text-gray-500 w-4 me-3" />
          <input
            type="text"
            placeholder="Preferred Location"
            className="outline-none text-sm w-full"
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>

        {/* Job Type Filter */}
        <div className="flex items-center gap-2 border-r-2 p-3 h-[48px] border-gray-300">
          <img src={jt2} className="text-gray-500 me-1 w-4" />
          <select
            className="text-sm outline-none w-full text-gray-500"
            onChange={(e) => setJobTypeFilter(e.target.value)}
          >
            <option value="">Job type</option>
            <option value="Onsite">Full-time</option>
            <option value="Remote">Part-time</option>
            <option value="Hybrid">Contract</option>
            <option value="Hybrid">Internship</option>
          </select>
        </div>

        {/* Salary Range - for future implementation */}
        <div className="w-full p-3">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Salary Per Month</span>
            <span>₹{(minSalary / 1000).toFixed(0)}k - ₹{(maxSalary / 1000).toFixed(0)}k</span>
          </div>
          <div className="flex items-center gap-2 w-full">
            <Slider.Root
              min={0}
              max={90000}
              step={1000}
              value={[minSalary, maxSalary]}
              onValueChange={(val) => {
                setMinSalary(val[0]);
                setMaxSalary(val[1]);
              }}
              className="relative flex items-center w-full h-5"
            >
              <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
                <Slider.Range className="absolute bg-black rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-3 h-3 bg-black rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </Slider.Thumb>
              <Slider.Thumb className="block w-3 h-3 bg-black rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </Slider.Thumb>
            </Slider.Root>
          </div>
        </div>
      </div>
    </>
  );
}
