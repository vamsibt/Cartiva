import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600 dark:text-gray-300'>Our Store</p>
          <p className='text-gray-500 dark:text-gray-300'>54709 Willms Station <br/> Suite 350, Washington, USA</p>
          <p className='text-gray-500 dark:text-gray-300'>Tel: (415) 555‑0132 <br/> Email: greatstackdev@gmail.com</p>
          <p className='text-xl font-semibold text-gray-600 dark:text-gray-300'>Careers at Forever</p>
          <p className='text-gray-500 dark:text-gray-300'>Learn more about our teams and job openings.</p>
          <button className='px-8 py-4 text-sm duration-500 border border-black hover:bg-black active:bg-gray-600 hover:text-white transition-app dark:hover:bg-white dark:hover:text-black' >Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
