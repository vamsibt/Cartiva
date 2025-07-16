import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ setToken }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logoo} alt="" />
      <div className="flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 p-2 transition border border-black rounded-full dark:border-white"
      >
        {theme === "dark" ? (
          <Sun size={18} className="text-white" />
        ) : (
          <Moon size={18} className="text-black" />
        )}
      </button>
      <button
        onClick={() => setToken("")}
        className="px-5 py-2 text-white bg-gray-600 rounded-full dark:border-white sm:px-7 sm:py-2"
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Navbar;
