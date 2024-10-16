import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/animationVariants'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [message, setMessage] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            message
        }
        if(!data){
            alert("Please fill all the fields");
            return;
        }
        setShowModal(true)
    }

    const closeModal = () =>{
        
        setName("")
        setEmail("")
        setPhone("")
        setCountry("")
        setMessage("")
        setShowModal(false)
    }

  return (
    <div id='contact' className='bg-heroBg flex items-center justify-center py-28 px-8'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 '>
            {/* left side */}
            <motion.div
             variants={fadeIn('right', 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
            className='space-y-8'>
                <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffff1a] p-3'>
                            <FaUser  className='text-primary'/>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>24 Hours Service</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur error doloremque.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffff1a] p-3'>
                            <FaUser  className='text-primary'/>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>24 Hours Service</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur error doloremque.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffff1a] p-3'>
                            <FaUser  className='text-primary'/>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>24 Hours Service</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur error doloremque.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffff1a] p-3'>
                            <FaUser  className='text-primary'/>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>24 Hours Service</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur error doloremque.</p>
                        </div>
                    </div>
                    
                </div>
            </motion.div>

            {/* right side */}
            <motion.div
             variants={fadeIn('left', 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
            className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
                <form onSubmit={handleSubmit} className='space-y-8'>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input
                        onChange={e => setName(e.target.value)}
                        type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-primary shadow' />
                        <input
                        onChange={e => setEmail(e.target.value)}
                        type="email" placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-primary shadow' />
                    </div>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input
                        onChange={e => setPhone(e.target.value)}
                        type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-primary shadow' />
                        <input
                        onChange={e => setCountry(e.target.value)}
                        type="text" placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-primary shadow' />
                    </div>
                    <textarea 
                    onChange={e => setMessage(e.target.value)}
                        rows="5"
                        placeholder='Write your message...'
                        className='w-full p-4 rounded-md focus:outline-none focus:ring-primary shadow'
                    ></textarea>

                    <button
                        type='submit'
                        className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80'
                    >Send Message</button>
                </form>
            </motion.div>
        </div>
      </div>
      {
        showModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
                <div className='bg-white p-8 rounded-md shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4'>Thank you!</h2>
                    <p >Thank you, {name}, for submiting your query.</p>
                    <button
                    onClick={closeModal}
                    className='mt-4 px-4 py-2 bg-primary text-white rounded-md'
                    >Close</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Contact
