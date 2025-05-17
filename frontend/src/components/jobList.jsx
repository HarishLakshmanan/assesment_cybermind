import React from "react";
import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  return (
<div className="ms-8 grid grid-cols-4 gap-[16px] absolute top-[265px] left-[64px] w-[1312px] h-[360px] ">
      {jobs.length > 0 ? (
        jobs.map((job, index) => <JobCard key={index} job={job} />)
      ) : (
        <p className="col-span-4 text-center text-gray-500 mt-10">No jobs found.</p>
      )}
    </div>
  );
}
