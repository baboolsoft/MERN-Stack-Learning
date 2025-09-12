import { useState } from "react";

export default function ControlPanel({ onFilterChange }) {
  const [active, setActive] = useState("all");

  const handleClick = (filter) => {
    setActive(filter);
    onFilterChange(filter);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex space-x-4 mb-6">
      {["all", "active", "completed"].map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded transition ${
            active === filter
              ? "bg-brand-500 text-black"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => handleClick(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
