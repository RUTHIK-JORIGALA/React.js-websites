import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/animationVariants'

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'></div>
      <div className='relative container mx-auto px-4 py-20'>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='text-white text-center mb-20'>
            <h2 className='text-4xl font-bold font-secondary mb-4'>How It works</h2>
            <p className='text-lg md:w-1/2 w-full mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum atque maiores, quisquam qui doloremque non obcaecati placeat repudiandae aspernatur libero sunt fuga? Iure doloribus repellendus expedita consectetur consequuntur? Vel.</p>
        </motion.div>
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
            <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>1
                </div>
                <h3>Fill a form</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed natus quaerat, quidem doloribus dolorum corporis maiores eaque autem dicta? Commodi architecto quasi officia dignissimos iure labore eius saepe et aliquid.</p>
            </div>
            <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>2
                </div>
                <h3>Get Matched</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed natus quaerat, quidem doloribus dolorum corporis maiores eaque autem dicta? Commodi architecto quasi officia dignissimos iure labore eius saepe et aliquid.</p>
            </div>
            <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>3
                </div>
                <h3>Schedule</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed natus quaerat, quidem doloribus dolorum corporis maiores eaque autem dicta? Commodi architecto quasi officia dignissimos iure labore eius saepe et aliquid.</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkingStep
