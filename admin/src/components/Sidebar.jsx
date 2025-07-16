import React from 'react'
import { NavLink } from 'react-router-dom'
import { CirclePlus, ClipboardList, Package } from "lucide-react";

const Sidebar = () => {
  const activeLinkClasses =
    'bg-[#ffebf5] border-[#C586A5] dark:bg-[#362936] dark:border-[#AD6A8A]';

  const baseClasses =
    'flex items-center gap-3 px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-700 rounded-l text-gray-700 dark:text-gray-200';

  const iconClasses = 'w-5 h-5 text-gray-700 dark:text-gray-200';

  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeLinkClasses : ''}`
          }
        >
          <CirclePlus className={iconClasses} />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeLinkClasses : ''}`
          }
        >
          <ClipboardList className={iconClasses} />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeLinkClasses : ''}`
          }
        >
          <Package className={iconClasses} />
          <p className='hidden md:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
