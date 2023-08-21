import React from 'react'
import { motion } from "framer-motion"
import heroImage from "../assets/hero.png"

const Hero = () => {
  return (
    <section
    id="home" 
    className="md:flex md:justify-between md:items:center md:h-full gap:10px py-10 w-5/6 mx-auto"
    >
        <div className="md:flex  justify-between md:items-center mx-auto mt-8  ">
            {/* Image Section */ }
            <motion.div 
                initial = "hidden"
                whileInView = "visible"
                viewport = {{once: true, amount: 0.5}}
                transition= {{duration: 1}} 
                variants = {{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                }}
                className="max-w-[400px] md:max-w-[600px] basis-[40%] md:order-last">
                <img  
                src={heroImage} 
                alt="hero-img" 
                />
            </motion.div>

            {/* Hero Text */ }
            <div className="flex flex-col  basis-[55%] mt-[25px] md:mt-0">
                <motion.h1
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{once: true, amount: 0.5}}
                    transition= {{duration: 1, delay: 1}} 
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                    className="text-black text-[30px] md:text-[45px] font-bold font-Inter"
                >
                    Providing a smart way to <span className='text-blue'>schedule and update</span> events.
                </motion.h1>
                <motion.p 
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{once: true, amount: 0.5}}
                    transition= {{duration: 1, delay:2}} 
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                    className="text-grey text-15px font-[500] py-3"
                >
                    Create and send reminder about your event with ease using Eventee
                </motion.p>
                <motion.button
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{once: true, amount: 0.5}}
                    transition= {{duration: 1, delay: 3}} 
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }} 
                    className="w-[125px] py-3 text-white bg-blue outline-none border-none font-[600]  hover:bg-[#ABB2D9] hover:text-blue"
                >
                    Get Started
                </motion.button>
            </div>
        </div>
    </section>
  )
}

export default Hero