import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
            <div className='text-2xl font-extrabold'>
                E-Learning Platform
            </div>
            <div className='hidden md:flex space-x-4'>
                <a href="/courses" className='hover:text-orange-400 transition-colors'>Courses</a>
                <a href="/about" className='hover:text-orange-400 transition-colors'>About</a>
                <a href="/contact" className='hover:text-orange-400 transition-colors'>Contact</a>
            </div>
            <div className='text-white px-4 py-2 rounded flex  items-center space-x-4'>
                <a href="/register" className='px-4 py-2 bg-orange-500 text-white font-semibold rounded transition duration-300'>Register</a>
                <a href="/login" className='px-4 py-2 bg-orange-500 text-white font-semibold rounded transition duration-300'>Login</a>

            </div>
        </nav>
    </div>
  )
}

export default Navbar