import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { getUser } = useContext(ShopContext);
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchUser = async () => {
      const res = await getUser(token);
      if (res?.success) {
        setUser({ name: res.name, email: res.email });
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Avatar */}
      <div className="flex items-center justify-center text-3xl font-semibold text-gray-600 bg-gray-100 border-4 border-gray-400 rounded-full shadow-md w-28 h-28 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
      </div>

      {/* Name & Email */}
      <p className="mt-6 text-2xl font-semibold">{user.name}</p>
      <p className="mb-6 text-base text-gray-500 dark:text-gray-400">{user.email}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/orders")}
          className="px-6 py-2 text-sm font-medium text-white transition-all bg-black rounded-full hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          My Orders
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="px-6 py-2 text-sm font-medium text-white transition-all bg-black rounded-full hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          My Cart
        </button>
      </div>
    </div>
  );
};

export default Profile;
