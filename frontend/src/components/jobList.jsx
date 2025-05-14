import React from "react";
import JobCard from "./JobCard";
import img from '../assets/image77.svg';
import tl from '../assets/tl.svg';
import sw from '../assets/sw.svg';



const jobs = [
  { image:img, title: "Full Stack Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:tl,title: "Node.js Developer", company: "Tesla", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:sw,title: "UX/UI Designer", company: "Swiggy", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:img,title: "Full Stack Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:tl,title: "Node.js Developer", company: "Tesla", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:sw,title: "UX/UI Designer", company: "Swiggy", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:img,title: "Full Stack Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "12" },
  { image:tl,title: "Node.js Developer", company: "Tesla", experience: "1-3", workType: "Onsite", salary: "12" },
];

export default function JobList() {
  return (
    <div className="grid grid-cols-4 gap-4 px-5 py-5 absolute left-[104px] top-[230px] w-[1312px] h-[360px]">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}
