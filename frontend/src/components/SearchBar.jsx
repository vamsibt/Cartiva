import React, { useEffect, useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="text-center border-t border-b bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <div className="inline-flex items-center justify-center w-3/4 px-5 py-2 mx-3 my-5 bg-white border border-gray-400 rounded-full dark:border-gray-600 sm:w-1/2 dark:bg-gray-800">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 text-sm text-gray-800 outline-none bg-inherit dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
          type="text"
          placeholder="Search"
        />
        <img className="w-4 invert dark:invert-0" src={assets.search_icon} alt="search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer invert dark:invert-0"
        src={assets.cross_icon}
        alt="close"
      />
    </div>
  ) : null;
};

export default SearchBar;
