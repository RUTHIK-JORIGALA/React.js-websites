import React from 'react'
import graphic from '../assets/graphic.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/animationVariants'

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'Nwe york',
    review: 'This is awsome Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi, minus deserunt saepe reiciendis praesentium sint repellendus at explicabo odit delectus, eius iusto molestiae',
    image: graphic
  },
  {
    name: 'Ruthik Raj',
    location: 'Green Which',
    review: 'This is awsome Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi, minus deserunt saepe reiciendis praesentium sint repellendus at explicabo odit delectus, eius iusto molestiae',
    image: graphic
  },
]
const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] py-12'>
      <div className='container mx-auto'>
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect for Small & Large Brands</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi, minus deserunt saepe reiciendis praesentium sint repellendus at explicabo odit delectus, eius iusto molestiae expedita, quidem amet. Magni, velit consequatur.</p>
        </motion.div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {
            testimonials.map((testimonial, index) =>(
              <motion.div
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                  <RiDoubleQuotesL className='size-12 text-primary' />
                </div>

                <div className='flex flex-col space-y-3'>
                  <p className='text-lg mb-2'>{testimonial.review}</p>
                  <div className='flex gap-1'>
                    <img src={testimonial.image} alt="Testimonial" className='size-16 rounded-full object-cover mr-4' />
                    <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-600'>{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonial
