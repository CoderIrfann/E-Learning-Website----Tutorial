import React, { useState } from 'react'

function Feedback() {

    const [currentTestimonils, setCurrentTestimonils] = useState(0);
    const testimonials = [
        { name: "Coder Irfan", role: "Web Developer", content: "This Platform has been instrumental in advance my career." },
        { name: "Rohan", role: "Andriod Developer", content: "Wow this web site is amazing.." }
    ];
    const nextTestimonials = () => {
        setCurrentTestimonils((prev) => (prev + 1) % testimonials.length);
    }

    const prevTestimonials = () => {
        setCurrentTestimonils((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    return (
        <div>
            <div className='conatiner mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-12'>What Our Students Say</h2>
                <div key={currentTestimonils} className='max-w-2xl mx-auto  rounded-lg shadow-lg  p-8 text-center'>
                    <div className=' items-center justify-center mb-3'>
                        <p className='font-semibold'>{testimonials[currentTestimonils].name}</p>
                    </div>

                    <div className='items-center justify-center mb-3'>
                    <p className='font-semibold'>{testimonials[currentTestimonils].role}</p>
                    <p className='text-gray-600 mb-4'>{testimonials[currentTestimonils].content}</p>


                    </div>
                    <div className='flex justify-center mt-6 space-x-4'>
                        <button onClick={prevTestimonials} className='px-4 py-2 border rounded'>Left</button>
                        <button onClick={nextTestimonials} className='px-4 py-2 border rounded'>Right</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Feedback