import React, { useState } from "react";
import vet from '../assets/Vector.svg'

export default function CreateJobModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        jobType: '',
        salaryMin: '',
        salaryMax: '',
        deadline: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    salaryMin: parseInt(formData.salaryMin),
                    salaryMax: parseInt(formData.salaryMax)
                })
            });

            const result = await response.json();
            console.log("Job posted:", result);
            onClose(); // Close modal after submit
        } catch (error) {
            console.error("Error submitting job:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-sm">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4 text-center">Create Job Opening</h2>

                <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <p>Job Title</p>
                        <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Job Title" className={`border-2 rounded px-4 py-2 transition-colors duration-200 ${formData.title ? 'border-[#222222]' : 'border-[#BCBCBC]'
                            }`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Company Name</p>
                        <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Amazon, Microsoft, Swiggy" className={`border-2 rounded px-4 py-2 transition-colors duration-200 ${formData.company ? 'border-[#222222]' : 'border-[#BCBCBC]'
                            }`} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p>Location</p>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter preferred location"
                            className={`border-2 rounded px-4 py-2 transition-colors duration-200 ${formData.location ? 'border-[#222222]' : 'border-[#BCBCBC]'
                                }`}
                        />
                    </div>


                    <div className="flex flex-col gap-1">
                        <p>Job Type</p>
                        <select name="jobType" value={formData.jobType} onChange={handleChange} className={`border-2  rounded px-4 py-2 transition-colors duration-200 ${formData.jobType ? 'border-[#222222]' : 'border-[#BCBCBC]'
                            }`}>
                            <option value="">Select Type</option>
                            <option value="Internship">Internship</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p>Salary Range</p>
                        <div className="flex gap-2">
                            <input name="salaryMin" value={formData.salaryMin} onChange={handleChange} type="number" placeholder="₹0" className={`border-2 rounded px-4 py-2 w-full transition-colors duration-200 ${formData.salaryMin ? 'border-[#222222]' : 'border-[#BCBCBC]'
                                }`} />
                            <input name="salaryMax" value={formData.salaryMax} onChange={handleChange} type="number" placeholder="₹12,00,000" className={`border-2 rounded px-4 py-2 w-full transition-colors duration-200 ${formData.salaryMax ? 'border-[#222222]' : 'border-[#BCBCBC]'
                                }`} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p>Application Deadline</p>
                        <input name="deadline" value={formData.deadline} onChange={handleChange} type="date" className={`border-2  rounded px-4 py-2 transition-colors duration-200 ${formData.deadline ? 'border-[#222222]' : 'border-[#BCBCBC]'
                            }`} />
                    </div>

                    <div className="col-span-2 flex flex-col gap-1">
                        <p>Job Description</p>
                        <textarea name="description" value={formData.description} onChange={handleChange} className={`w-full h-30 px-4 pt-2 border-2 rounded transition-colors duration-200 ${formData.description ? 'border-[#222222]' : 'border-[#BCBCBC]'
                            }`} placeholder="Please share a description to let the candidate know more about the job role" />
                    </div>

                    <div className="col-span-2 flex justify-between mt-4">
                        <button type="button" className="px-4 py-2 border rounded">Save Draft</button>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded shadow">Publish »</button>
                    </div>
                </form>

                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
}
