import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        fixed bottom-5 right-5 z-50
        p-3 rounded-full
        bg-white dark:bg-[#0F1E3A]
        text-black dark:text-white
        shadow-lg hover:shadow-xl
        border border-gray-300 dark:border-gray-700
        transition-all duration-300
        hover:scale-110
        backdrop-blur-md
      "
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400 text-xl" />
      ) : (
        <FiMoon className="text-gray-800 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;