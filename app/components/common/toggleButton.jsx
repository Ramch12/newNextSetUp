import { useState } from "react";

export default function Toggle({ onToggle }) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    setEnabled((prev) => !prev);
    onToggle && onToggle(!enabled);
  };

  return (
    <button
      onClick={handleChange}
      className={`
        relative inline-flex items-center h-6 w-11
        transition-colors duration-300
        focus:outline-none
        ${enabled ? "bg-blue-600" : "bg-gray-300"}
        rounded-full
      `}
    >
      <span
        className={`
          inline-block w-5 h-5 transform
          bg-white rounded-full
          transition-transform duration-300
          ${enabled ? "translate-x-5" : "translate-x-1"}
        `}
      />
    </button>
  );
}
