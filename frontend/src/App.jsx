import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobList from './components/jobList';
import img from './assets/image77.svg';
import tl from './assets/tl.svg';
import sw from './assets/sw.svg';

const allJobs = [
  { image: img, title: "Full Stack Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "8", location: "Bangalore" },
  { image: tl, title: "Node.js Developer", company: "Tesla", experience: "1-3", workType: "Remote", salary: "5", location: "hyderabad" },
  { image: img, title: "UX/UI Designer", company: "Swiggy", experience: "1-3", workType: "Hybrid", salary: "9", location: "hyderabad" },
  { image: tl, title: "Frontend Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "10", location: "chennai" },
  { image: tl, title: "Backend Developer", company: "Tesla", experience: "1-3", workType: "Remote", salary: "5", location: "Chennai" },
  { image: img, title: "Python Developer", company: "Swiggy", experience: "1-3", workType: "Hybrid", salary: "4", location: "Bangalore" },
  { image: img, title: "Web Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "10", location: "hyderabad" },
  { image: tl, title: "Java Developer", company: "Tesla", experience: "1-3", workType: "Remote", salary: "8", location: "Chennai" },


];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [minSalary, setMinSalary] = useState(0); 
  const [maxSalary, setMaxSalary] = useState(90000); 


  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      locationFilter === "" ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesJobType =
      jobTypeFilter === "" ||
      job.workType.toLowerCase() === jobTypeFilter.toLowerCase();

     const jobMonthlySalary = (parseFloat(job.salary) * 100000) / 12; // Convert LPA to monthly salary in ₹
  const matchesSalary = jobMonthlySalary >= minSalary && jobMonthlySalary <= maxSalary;

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  return (
    <div>
      <Navbar
        setSearchTerm={setSearchTerm}
        setLocationFilter={setLocationFilter}
        setJobTypeFilter={setJobTypeFilter}
        minSalary={minSalary}
        maxSalary={maxSalary}
        setMinSalary={setMinSalary}
        setMaxSalary={setMaxSalary}
      />
      <JobList jobs={filteredJobs} />
    </div>
  );
}
