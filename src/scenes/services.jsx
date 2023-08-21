import React from 'react'
import { motion } from "framer-motion"
import Upload from '../assets/X Mockup.png'
import Data from '../assets/Y Mockup.png'

const Services = () => {
  return (
    <section
    id="services"
    className='py-5 w-5/6 mx-auto'
    >
        {/*Section A*/}
        <div className="md:flex justify-between items-center pt-0 pb-5 mx-auto">
            {/* First Frame */}
            <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport = {{once: true, amount: 0.5}}
                transition= {{duration: 1}} 
                variants = {{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                className='flex flex-col basis-[50%] py-10 px-4 md:px-14 mb-10 md:mb-0 basis-2.5/5'
            >
                <h1 className="text-black text-[25px] md:text-[35px] font-bold font-Inter">
                 Easy data upload.
                </h1>
                <p className="text-grey text-15px font-[500] py-3">
                Upload attendees data with ease. You can upload and 
                store the collective attendee data on Eventee for future use.
                </p>
                <button className="w-[155px] py-3 text-white bg-blue outline-none border-none font-[600]  hover:bg-[#ABB2D9] hover:text-blue">
                    Get Started Now
                </button>
            </motion.div>


            {/* Second Frame */}
            <div className=" pt-[50px] pb-[30px] px-[60px] md:pt-[65px] md:pb-[40px] md:px-[90px] bg-[#F9F9F9] rounded-[50%] overflow-hidden">
                <motion.img
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{once: true, amount: 0.5}}
                    transition= {{duration: 1, delay: 2}} 
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                
                    src={Upload} alt="" className="w-[240px] -mb-8 " 
                />
            </div>
        </div>

        {/*Section B*/}
        <div className="md:flex justify-between items-center py-5 mx-auto">
            {/* First Frame */}
            <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport = {{once: true, amount: 0.5}}
                transition= {{duration: 1}} 
                variants = {{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                className='flex flex-col basis-[50%] py-10 px-4 md:px-14 mb-10 md:mb-0 md:order-last basis-2.5/5'
            >
                <h1 className="text-black text-[25px] md:text-[35px] font-bold font-Inter">
                 Send Multiple Reminders.
                </h1>
                <p className="text-grey text-15px font-[500] py-3">
                Provide an easy way to send reminder messages to attendees. 
                Eventee allows you to send reminders to multiple people at a go.
                </p>
                <button className="w-[155px] py-3 text-white bg-blue outline-none border-none font-[600]  hover:bg-[#ABB2D9] hover:text-blue">
                    Get Started Now
                </button>
            </motion.div>

            {/* Second Frame */}
            <div className=" pt-[50px] pb-[30px] px-[60px] md:pt-[65px] md:pb-[40px] md:px-[90px] bg-[#F9F9F9] rounded-[50%] overflow-hidden">
                <motion.img
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{once: true, amount: 0.5}}
                    transition= {{duration: 1, delay: 1}} 
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                
                    src={Data} alt="" className="w-[240px] -mb-8 " 
                />
            </div>

            
        </div>
    </section>
  )
}

export default Services