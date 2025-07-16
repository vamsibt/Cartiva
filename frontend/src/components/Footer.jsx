import React from 'react'
import { assets } from '../assets/assets'
import { useState, useEffect } from 'react'
const Footer = () => {
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
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div >
            <img className='w-32 mb-5' src={isDarkMode ? assets.logo_dark : assets.logo} alt="" />
            <p className='w-full text-gray-600 dark:text-gray-300 md:w-2/3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <div>
            <p className='mb-5 text-xl font-medium'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 dark:text-gray-300'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600 dark:text-gray-300'>
                <li>+1-123-456-7899</li>
                <li>contact@forever.com</li>
            </ul>
        </div>
      </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ cartiva.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
