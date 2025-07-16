import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import { Moon, Sun, Search, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
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

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const logout = () => {
    navigate("./login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
      <img
        src={isDarkMode ? assets.logo_dark : assets.logo}
        className="w-36"
        alt="Logo"
      />
    </Link>
      <ul className="hidden gap-5 text-sm text-gray-700 dark:text-gray-300 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
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
        <Link to="/collection" onClick={() => setShowSearch(true)}>
          <Search className="w-5 h-5 text-black cursor-pointer dark:text-white" />
        </Link>
        <div className="relative group">
          <User
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 h-5 text-black cursor-pointer dark:text-white"
          />
          {token && (
            <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
              <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100 dark:bg-slate-800 dark:text-gray-200">
                <p className="cursor-pointer hover:text-black dark:hover:text-white" onClick={() => (token ? navigate("/profile") : null)}>
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black dark:hover:text-white"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-black dark:hover:text-white"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <ShoppingCart className="w-5 h-5 text-black dark:text-white" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white dark:bg-white dark:text-black aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      {/* Sidebar menu for smaller screens */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-gray-900 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 dark:text-gray-300">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180 cursor-pointer"
              alt=""
            />
            <p className="cursor-pointer">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
