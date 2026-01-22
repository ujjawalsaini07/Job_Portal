import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react"; // Optional: Use an icon library, or just use text "x"

// You can fetch this from an API or keep a static list
const PREDEFINED_SKILLS = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "Python", "Django", 
  "Java", "Spring Boot", "AWS", "Docker", "Kubernetes", 
  "HTML", "CSS", "Tailwind CSS", "Redux", "GraphQL"
];

const SkillSelector = ({ selectedSkills, setSelectedSkills }) => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Filter skills based on input, excluding ones already selected
  const availableSkills = PREDEFINED_SKILLS.filter(
    (skill) => 
      skill.toLowerCase().includes(inputValue.toLowerCase()) && 
      !selectedSkills.includes(skill)
  );

  const handleAddSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setInputValue("");
      setIsDropdownOpen(false);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    // Allow user to add custom skills by pressing Enter
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      handleAddSkill(inputValue.trim());
    }
    // Remove last skill with Backspace if input is empty
    if (e.key === "Backspace" && !inputValue && selectedSkills.length > 0) {
      handleRemoveSkill(selectedSkills[selectedSkills.length - 1]);
    }
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Skills Required
      </label>
      
      {/* Input Container */}
      <div className="flex flex-wrap items-center gap-2 border rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        
        {/* The "Bricks" (Selected Skills) */}
        {selectedSkills.map((skill) => (
          <span 
            key={skill} 
            className="flex items-center gap-1 bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
          >
            {skill}
            <button
              type="button"
              onClick={() => handleRemoveSkill(skill)}
              className="text-blue-600 hover:text-blue-900 focus:outline-none"
            >
              {/* If you don't have Lucide icons, replace <X size={14} /> with <span>&times;</span> */}
              <X size={14} /> 
            </button>
          </span>
        ))}

        {/* The Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsDropdownOpen(true);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
          className="grow min-w-30 outline-none text-sm text-gray-700 bg-transparent"
          placeholder={selectedSkills.length === 0 ? "Select or type skills..." : ""}
        />
      </div>

      {/* The Dropdown */}
      {isDropdownOpen && inputValue && availableSkills.length > 0 && (
        <ul 
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto"
        >
          {availableSkills.map((skill) => (
            <li
              key={skill}
              onClick={() => handleAddSkill(skill)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
      
      {/* Click overlay to close dropdown if clicking outside (simple version) */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsDropdownOpen(false)} 
        />
      )}
    </div>
  );
};

export default SkillSelector;