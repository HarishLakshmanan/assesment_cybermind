import React from "react";
import img from '../assets/image77.svg';
import lpa from '../assets/lpa.svg';
import exp from '../assets/exp.svg';
import jt from '../assets/jt.svg';

export default function JobCard({ job }) {
    return (
        <div className="relative p-4 border-none w-[316px] h-[360px] rounded-[12px] shadow-md bg-white">
            {/* Top-right badge */}
            <p className="absolute top-[16px] left-[222px] w-[75px] h-[33px] bg-[#B0D9FF] text-xs px-[10px] py-[8px] rounded-[10px] text-center ">
                24h Ago
            </p>


            <img src={job.image} alt="Job Image" className="rounded-md mb-2 shadow bg-[#F1F1F1]" />
            <h3 className="font-semibold text-lg mb-1 mt-4">{job.title}</h3>

            {/* Experience, Work Type, and Salary in One Line */}
            <div className="flex items-center text-sm text-gray-700 ms-1 mt-5 mb-2 space-x-4">
                <div className="flex items-center ms-1">
                    <img src={exp} alt="Experience Icon" className="w-4" />
                    <span className="ml-1">{job.experience}yrs</span>
                </div>

                <div className="flex items-center ms-2">
                    <img src={jt} alt="Work Type Icon" className="w-4" />
                    <span className="ml-1">{job.workType}</span>
                </div>

                <div className="flex items-center ms-2">
                    <img src={lpa} alt="Salary Icon" className="w-4" />
                    <span className="ml-1">{job.salary}LPA</span>
                </div>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-500 mt-6">
                <li>A user-friendly interface lets you browse stunning photos and videos.</li>
                <li>Filter destinations based on interests and travel style, and create personalized.</li>
            </ul>


            <div className="mt-8">
                <button className="w-full py-2 bg-[#00AAFF] text-white rounded-lg">
                    Apply Now
                </button>
            </div>
        </div>
    );
}
