import React from 'react'

import './experience.css'

import tiktok from '../../assets/Tiktok.jpg'
import amazon from '../../assets/Amazon.jpg'
import va from '../../assets/VA.jpg'

import { motion } from 'framer-motion'

import { fadeIn } from '../../utils/animationVariants'

const Experience = () => {
  return (
    <section className='experience-container' id='experience'>
        <h1 className='heading-experience'>Experience</h1>
        
        <div className="experience-box">
            <h1>Amazon Seller Account Manager</h1>
            <div className='experience-inner-box'>

            
                <div
                 className='experience-text'
                 >
                    <p> <span>Product Management: </span>
                        <ul>
                            <li>Managed product listings, flat files, images, and videos.</li>
                            <li>Conducted keyword research to optimize listings.</li>
                        </ul>
                    </p>
                    <p> <span>Inventory Management: </span>
                        <ul>
                            <li>Oversaw inventory for both account and FBA.</li>
                            <li>Handled shipments, label creation, stock updates, and reimbursements.
                            </li>
                        </ul>
                    </p>
                    <p> <span> Order Management:</span>
                        <ul>
                            <li>Processed manual orders, returns, and refunds.</li>
                            <li>Created and managed virtual bundles.
                            </li>
                        </ul>
                    </p>
                    <p> <span>Advertising: </span>
                        <ul>
                            <li>Managed campaigns, including A+ content and Data Vine.
                            </li>
                            <li>Implemented price discounts, Prime offers, and promotions.
                            </li>
                        </ul>
                    </p>
                    <p> <span>Store Management: </span>
                        <ul>
                            <li>Ensured effective product presentation and organization.</li>
                            
                        </ul>
                    </p>
                    <p> <span>Reporting: </span>
                        <ul>
                            <li>Generated and analyzed business, fulfillment, ad, custom, inventory, CLR, and MOM reports.
                            </li>
                            <li>Developed necessary inventory dashboards.</li>
                        </ul>
                    </p>
                    <p> <span>Performance Monitoring:</span>
                        <ul>
                            <li>Monitored account performance, managed feedback, and addressed Voice of the Customer concerns.</li>
                            <li>Handled customer reviews and ratings.</li>
                        </ul>
                    </p>
                    <p> <span>Customer Support:</span>
                        <ul>
                            <li>Provided chat support, resolved account issues, filed cases, and maintained case logs.</li>
                        </ul>
                    </p>
                </div>
                <div 
                className='experience-image-container'
                >
                    <img src={amazon} alt="amazon image" />
                </div>  
            </div>
        </div>
        
        <div className="experience-box">
            <h1>TikTok Shop Specialist</h1>
            <div className='experience-inner-box'>
                <div className='experience-text'>
                    <p> <span>Operations Management </span>
                    <ul>
                        <li>
                        Optimized end-to-end operations, including listings, sales, and inventory.
                        </li>
                    </ul>
                    </p>
                    <p><span>Promotional Campaigns</span>
                    <ul>
                        <li>Orchestrated campaigns and collaborated with creators to boost product visibility and sales.</li>
                    </ul>
                    
                    </p>
                    <p><span>Customer Satisfaction</span>
                    <ul>
                        <li>Addressed product delays, ensuring customer satisfaction and maintaining brand reputation.</li>
                    </ul>
                    
                    </p>
                    <p><span>Affiliate Marketing </span>
                    <ul>
                        <li>Drove traffic and sales through targeted TikTok affiliate marketing initiatives.</li>
                    </ul>
                    
                    </p>
                    <p><span>Process Execution</span>
                    <ul><li>Ensured compliance and efficiency in executing TikTok seller central processes.</li></ul>
                    
                    </p>
                    <p><span>Marketing Activities </span>
                    <ul>
                        <li>Managed shop ads, promotions, sales campaigns, and discounts.</li>
                    </ul>
                    
                    </p>
                    <p><span>Order Management:</span>
                    <ul>
                        <li>Handled orders, returns, and fulfillment settings on TikTok Shop.</li>
                    </ul>
                    
                    </p>
                    <p><span>Collaboration Management:</span>
                    <ul>
                        <li>Managed collaboration invites, commissions, and partnerships with creators in the TikTok Affiliate Center.</li>
                    </ul>
                    
                    </p>
                    <p><span>Data Analysis:</span>
                    <ul>
                        <li>Generated and analyzed sales reports, affiliate orders, and business analytics.</li>
                    </ul>
                    
                    </p>
                </div>
                <div className='experience-image-container'>
                    <img src={tiktok} alt="" />
                </div>
            </div>
        </div>
        <div className="experience-box">
            <h1>Virtual Assisstant</h1>
            <div className='experience-inner-box'>
                <div className='experience-text'>
                    <p> <span> Nexonia Reporting</span>
                        <ul>
                            <li>Managed accurate and timely financial documentation.</li>
                        </ul>
                    </p>
                    <p> <span>LinkedIn Lead Generation </span>
                        <ul>
                            <li>Identified and engaged potential clients.</li>
                        </ul>
                    </p>
                    <p> <span> Calendar Maintenance</span>
                        <ul>
                            <li>Organized and scheduled appointments and meetings.</li>
                        </ul>
                    </p>
                    <p> <span>PowerPoint</span>
                        <ul>
                            <li>Developed impactful presentations for meetings and conferences.</li>
                        </ul>
                    </p>
                    <p> <span>Data Mining & Cleaning </span>
                        <ul>
                            <li> Maintained database accuracy through data mining and cleaning.</li>
                        </ul>
                    </p>
                    <p> <span> PDF to Excel/PPT</span>
                        <ul>
                            <li>Converted PDFs for better data accessibility and presentation.</li>
                        </ul>
                    </p>
                    <p> <span>LinkedIn Emails</span>
                        <ul>
                            <li>Managed email lists for targeted communication.</li>
                        </ul>
                    </p>
                    <p> <span>Microsoft Excel </span>
                        <ul>
                            <li>Applied advanced Excel skills for data analysis and reporting.</li>
                        </ul>
                    </p>
                    <p> <span>Market Research</span>
                        <ul>
                            <li>Conducted research to support business strategies.</li>
                        </ul>
                    </p>
                    <p> <span>Email Management </span>
                        <ul>
                            <li>Scheduled emails for organized communication and managed email accounts efficiently.</li>
                        </ul>
                    </p>
                    <p> <span>Lead Generation </span>
                        <ul>
                            <li>Executed effective strategies to generate leads.</li>
                        </ul>
                    </p>
                    <p> <span>Data Entry & Reporting</span>
                        <ul>
                            <li>Supported operations through accurate data entry and reporting.</li>
                        </ul>
                    </p>
                   
                </div>
                <div className='experience-image-container'>
                    <img src={va} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
