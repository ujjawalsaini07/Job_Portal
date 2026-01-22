import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api.js";
import SkillSelector from "./SkillSelector"; // Import the new component

const JobPostForm = () => {
  const navigate = useNavigate();
  
  // State
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    experience: "",
    description: "",
  });
  
  // Manage skills in a separate state array
  const [skills, setSkills] = useState([]); 

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMsg("");

    try {
      const payload = {
        ...formData,
        skillsRequired: skills, // Pass the array directly!
        experience: Number(formData.experience),
      };

      const response = await api.post("/recruiter/job-post", payload);

      if (response.data.success) {
        setSuccessMsg("Job posted successfully!");
        setFormData({
          title: "",
          company: "",
          location: "",
          experience: "",
          description: "",
        });
        setSkills([]); // Clear skills
      }
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || "Something went wrong.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Post a New Job</h2>

      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      {successMsg && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Location & Experience */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* NEW SKILL SELECTOR */}
        <SkillSelector 
          selectedSkills={skills} 
          setSelectedSkills={setSkills} 
        />

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors ${
            isLoading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Posting Job..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default JobPostForm;