import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/animationVariants'

const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
        <motion.div
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='space-y-6 mr-14'>
            <div className='flex items-center space-x-2'>
                Logo
            </div>
            <p className='text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam nesciunt vel, voluptatibus molestias in totam deleniti quod quo cum ut, id perspiciatis quas mollitia accusantium et doloremque necessitatibus quaerat?</p>
            <div className='flex space-x-4'>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                <FaFacebookF className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                <FaFacebookF className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                <FaFacebookF className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                <FaFacebookF className='text-xl' />
                </a>
            </div>
        </motion.div>

        <motion.div
         variants={fadeIn('down', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Quick links</h3>
            <ul className='space-y-3'>
                <li><a href="#home" className='hover:underline text-gray-700'>Home</a></li>
                <li><a href="#about" className='hover:underline text-gray-700'>About Us</a></li>
                <li><a href="#services" className='hover:underline text-gray-700'>Services</a></li>
                <li><a href="#contact" className='hover:underline text-gray-700'>Contact Us</a></li>
            </ul>
        </motion.div>
        <motion.div
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul className='space-y-3'>
                <li><a href="#" className='hover:underline text-gray-700'>FAQ</a></li>
                <li><a href="#" className='hover:underline text-gray-700'>Terms of service</a></li>
                <li><a href="#" className='hover:underline text-gray-700'>Privacy Policy</a></li>
                <li><a href="#" className='hover:underline text-gray-700'>Support Center</a></li>
            </ul>
        </motion.div>

        <motion.div
         variants={fadeIn('down', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
            <ul className='space-y-3'>
                <li className='flex items-center gap-2'>
                    <FaFacebookF className='text-primary' />
                    <p className='text-gray-700'>123 Street, City, Country</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaFacebookF className='text-primary' />
                    <p className='text-gray-700'> +91 9876543210</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaFacebookF className='text-primary' />
                    <p className='text-gray-700'>sample@gmail.com</p>
                </li>
            </ul>
        </motion.div>

      </div>
    </div>
  )
}

export default Footer
