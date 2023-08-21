import React from 'react'
import { motion } from "framer-motion"
import Check from '../assets/check.png'
import Message from '../assets/message.png'


const About = () => {
  return (
    <section
    id="about"
    className='pt-10 pb-8 w-5/6 mx-auto'
    >
        <h1 className=" text-[25px] md:text-[40px]  text-dark font-Inter font-bold  text-center ">
            Seamless way to send update and reminder
        </h1>
        <p className="text-grey font-inter font-[500] text-[12px] md:text-[15px] text-center">
            We provide more than just creating an event.
        </p>
        {/*Section A*/}
        <div className="md:flex justify-between items-center py-20 mx-auto">
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
                className='bg-[#F9F9F9] py-10 px-4 md:px-14 mb-10 md:mb-0 basis-2.5/5'
            >
                <img src={Check} alt="" className="w-[320px]" />
                <h3 className="text-dark font-Inter text-[20px] font-bold py-3">
                    Update Schedule
                </h3>
                <div className="w-[300px]">
                    <p className="text-grey font-Inter text-[12px] font-[500]">
                    With Eventee, users can update the details of an
                    event and get attendees notified as the update happens.
                    </p>
                </div>
            </motion.div>


            {/* Second Frame */}
            <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport = {{once: true, amount: 0.5}}
                transition= {{duration: 1, delay: 1}} 
                variants = {{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                }}
                className='bg-[#F9F9F9] py-10 px-4 md:px-14 basis-2.5/5'
            >
                <h3 className="text-dark font-Inter text-[20px] font-bold py-3">
                    Send Reminders
                </h3>
                <div className="w-[300px] ">
                    <p className="text-grey font-Inter text-[12px] font-[500] py-2">
                    Send reminder messages to event attendees reminding
                     them about an upcoming events with ease.
                    </p>
                </div>
                <img src={Message} alt="" className="w-[350px]" />
            </motion.div>
        </div>
    </section>
  )
}

export default About