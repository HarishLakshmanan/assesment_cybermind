import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobList from './components/jobList';
import img from './assets/image77.svg';
import tl from './assets/tl.svg';
import sw from './assets/sw.svg';

const allJobs = [
  { image: img, title: "Full Stack Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "12", location: "Bangalore" },
  { image: tl, title: "Node.js Developer", company: "Tesla", experience: "1-3", workType: "Remote", salary: "12", location: "Remote" },
  { image: sw, title: "UX/UI Designer", company: "Swiggy", experience: "1-3", workType: "Hybrid", salary: "12", location: "Mumbai" },
  { image: img, title: "Frontend Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "10", location: "Delhi" },
  { image: tl, title: "Backend Developer", company: "Tesla", experience: "1-3", workType: "Remote", salary: "14", location: "Chennai" },
  { image: sw, title: "UX/UI Designer", company: "Swiggy", experience: "1-3", workType: "Hybrid", salary: "12", location: "Mumbai" },
  { image: img, title: "Frontend Developer", company: "Amazon", experience: "1-3", workType: "Onsite", salary: "10", location: "Delhi" },
  { image: tl, title: "Backend Developer", company: "Tesla", experience: "1-3", workType: "Remote", salary: "14", location: "Chennai" },


];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesJobType = jobTypeFilter === "" || job.workType.toLowerCase() === jobTypeFilter.toLowerCase();
    return matchesSearch && matchesLocation && matchesJobType;
  });

  return (
    <div>
      <Navbar
        setSearchTerm={setSearchTerm}
        setLocationFilter={setLocationFilter}
        setJobTypeFilter={setJobTypeFilter}
      />
      <JobList jobs={filteredJobs} />
    </div>
  );
}
