import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Body from './body';


function Header() {
    return (
        <div>


            <header className="bg-gradient-to-r from-blue-900 to-teal-800 text-white">
                <Navbar />
                <div className="container mx-auto px-6 py-24 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Welcome to Learning Platform
                    </motion.h1>

                    <motion.p
                        className="mb-8"
                        initial={{ opacity: 0, y: -50, scale: 0.9, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeOut',
                            delay: 0.4,
                        }}
                    >
                        Take online courses from the world’s top universities for free.
                        Below, you will find 1,700 free online courses from universities like Yale, MIT, Harvard, Oxford, and more.
                    </motion.p>

                    <motion.input
                        type="text"
                        placeholder="Search for courses"
                        className="w-full max-w-md px-4 py-3 mb-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 text-black"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileFocus={{
                            scale: 1.1,
                            boxShadow: '0px 0px 10px rgba(255,165,0,0.7)',
                        }}
                    />

                    <motion.button
                        className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileTap={{
                            scale: 0.9,
                            rotate: 2,
                            boxShadow: '0px 0px 10px rgba(255,165,0,0.7)',
                        }}
                    >
                        Get Started
                    </motion.button>


                </div>

            </header>

            <main>
                <Body></Body>
            </main>

        </div>



    );
}

export default Header;
