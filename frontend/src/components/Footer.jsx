import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"



function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8'>


        <div>
          <h4 className='font-semibold text-lg mb-4'>
            E-Learning Platform
          </h4>
          <p>E-Learning Platform is a dedicated to empowering learners with quality resoures</p>
        </div>

        <div>
          <h4 className='font-semibold  text-lg mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-sm'>
            <li><a href="/courses" className='hover:text-gray-300'>Courses</a></li>
            <li><a href="/about" className='hover:text-gray-300'>About Us</a></li>
            <li><a href="/contact" className='hover:text-gray-300'>Contact</a></li>
            <li><a href="/fqa" className='hover:text-gray-300'>FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-lg mb-4' >Contact Us</h4>
          <p className='text-sm text-gray-400 '>Email : support@learning@gmail.com</p>
          <p className='text-sm text-gray-400 '>Phone Number : Ruk Jao..</p>
          <p className='text-sm text-gray-400 '>Banguluru</p>
        </div>

        <div>
          <h4 className='font-semibold text-lg mb-4'>
            Follow Us
          </h4>

          <div className='flex space-x-4'>
            <a href="#" aria-label='Facebook' className='text-gray-400'
            >
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </a>

            <a href="#" aria-label='Twitter' className='text-gray-400'
            >
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

            </a>

            <a href="#" aria-label='Instagram' className='text-gray-400'
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>

            <a href="#" aria-label='LinkedIn' className='text-gray-400'
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>

          </div>
        </div>

        <div className='mt-8 border-t border-gray-700  pt-6 text-center text-sm text-gray-500'>
          &copy; 2023 E-Learning Platform, All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer