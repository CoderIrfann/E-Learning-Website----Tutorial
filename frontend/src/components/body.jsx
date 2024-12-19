import React from 'react'
import { FiUser, FiUsers } from 'react-icons/fi'
import { motion } from 'framer-motion'

import { FaBookOpen, FaAward } from 'react-icons/fa'
import Feedback from './Feedback'

function Body() {
    return (
        <div>
            <section className='py-16'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-12'>Why choose E-Learning Platform</h2>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {
                        [
                            {
                                icon: (
                                    <FaBookOpen className='w-12 h-12 mx-auto mb-4 text-blue-900'></FaBookOpen>
                                ), title: "Diverse Course Selection",
                                Description: "Choose From thousands of courses in  various fields"

                            },

                            {
                                icon:(
                                    <FiUser className='w-12 h-12 mx-auto mb-4 text-blue-900'></FiUser>
                                ),
                                title:"Expert Instructores",
                                Description:"Learn From industry professionals and academics"
                            },
                            {
                                icon:(
                                    <FaAward className='w-12 h-12 mx-auto mb-4 text-blue-900' ></FaAward>
                                ),
                                title:"Recognized certifications",
                                Description:"Earn certificates upon course completion"

                            }
                        ].map((feature , index)=>(
                           <motion.div key={index} className='bg-white rounded-lg shadow-lg p-6 text-center'>
                            {feature.icon}
                            <h3 className='text-xl'>
                                {feature.title}
                            </h3>
                           </motion.div> 
                        ))
                    }

                </div>



            </section>

            <section>
                <Feedback></Feedback>
            </section>
        </div>
    )
}

export default Body