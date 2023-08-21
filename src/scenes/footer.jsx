import React from 'react'
import footerLogo from '../assets/footer.png'
import { FaInstagram, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="mt-10 pt-10 pb-5 bg-[#0B0D17]">
        <div className="md:flex justify-between my-5 w-4/5 mx-auto">
            <div className="flex md:justify-between md:w-[40%] pb-16 md:pb-0 ">
                <div>
                    <a href="/">
                        <img src={footerLogo} alt="" className="w-40px cursor-pointer" />
                    </a>
                    <p className="text-[#ABB2D9] text-[14px] w-[70%] md:w-[50%] py-5">
                     We provide a smart way to schedule and update your events.
                    </p>
                    <div className="flex items-center justify-start gap-2 md:gap-5">
                        <div className="p-2 rounded-[50%] bg-[#fffcfc0c]">
                            <FaInstagram className=" text-white cursor-pointer" />
                        </div>
                        <div className="p-2 rounded-[50%] bg-[#fffcfc0c]">
                            <FaFacebook className=" text-white cursor-pointer" />
                        </div>
                        <div className="p-2 rounded-[50%] bg-[#fffcfc0c]">
                            <FaLinkedinIn className=" text-white cursor-pointer" />
                        </div>
                        <div className="p-2 rounded-[50%] bg-[#fffcfc0c]">
                            <FaTwitter className=" text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-[18px] font-[500]">Company</h3>
                    <p className="text-[#ABB2D9] text-[14px] py-5 cursor-pointer">
                    About us
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] cursor-pointer">
                    Blog
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] py-5 cursor-pointer">
                    Careers
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] cursor-pointer">
                    Contact Us
                    </p>
                </div>
            </div>
            <div className="flex justify-between  md:w-[40%]">
                <div >
                    <h3 className="text-white text-[18px] font-[500]">Support</h3>
                    <p className="text-[#ABB2D9] text-[14px] py-5 cursor-pointer">
                    Help Center
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] cursor-pointer">  
                    Safety Center
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] py-5 cursor-pointer">
                    Community Guidelines
                    </p>
                </div>
                <div>
                    <h3 className="text-white text-[18px] font-[500] ">Legal</h3>
                    <p className="text-[#ABB2D9] text-[14px] py-5 cursor-pointer">
                    Cookies Policy
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] cursor-pointer">
                    Privacy Policy
                    </p>
                    <p className="text-[#ABB2D9] text-[14px] py-5 cursor-pointer">
                    Law Enforcement
                    </p>
                </div>
            </div>
        </div>
        <hr className="py-[0.5px] bg-white opacity-[0.08]" />
        <p className="text-[#ABB2D9] text-[14px] cursor-pointer text-center pt-5">
        © 2023 Eventee. All rights reserved 
        </p>
    </section>
  )
}

export default Footer