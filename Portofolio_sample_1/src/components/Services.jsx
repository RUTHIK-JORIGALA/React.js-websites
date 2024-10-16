import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import graphic from '../assets/graphic.jpg'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/animationVariants'

const Services = () => {
  return (
    <section className='bg-[#f7f8fc]' id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What can we do together</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt error provident distinctio illo quo ad quidem labore molestiae neque, unde soluta quas, impedit tempore alias corrupti ipsum quibusdam! Vero, officiis!</p>
        </motion.div>

        {/* service category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <motion.TabList
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
              <Tab>Service 1</Tab>
              <Tab>Service 2</Tab>
              <Tab>Service 3</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary'>Service 1</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti sequi maiores molestiae nostrum consequuntur libero consequatur repellendus blanditiis earum vitae id, suscipit, amet autem tenetur? Beatae, dolor reiciendis. Nihil!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Good</li>
                    <li>Better</li>
                    <li>Best</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={graphic} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary'>Service 2</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti sequi maiores molestiae nostrum consequuntur libero consequatur repellendus blanditiis earum vitae id, suscipit, amet autem tenetur? Beatae, dolor reiciendis. Nihil!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Good</li>
                    <li>Better</li>
                    <li>Best</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={graphic} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary'>Service 3</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti sequi maiores molestiae nostrum consequuntur libero consequatur repellendus blanditiis earum vitae id, suscipit, amet autem tenetur? Beatae, dolor reiciendis. Nihil!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Good</li>
                    <li>Better</li>
                    <li>Best</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={graphic} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </motion.div>
            </TabPanel>
            
          </Tabs>
        </div>
      </div>
      
    </section>
  )
}

export default Services
