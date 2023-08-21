import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import testimonialC from '../assets/testimonialC.png'
import testimonialB from '../assets/testimonialB.png'
import testimonialA from '../assets/testimonialA.png'

const Testimonial = () => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  return (
    <section 
    className="py-10 w-5/6 mx-auto"
    id="testimonials">
        <h1 className=" text-[25px] md:text-[40px]  text-dark font-Inter font-bold  text-center ">
           Testimonials
        </h1>
        <p className="text-grey font-inter font-[500] text-[12px] md:text-[15px] w-[70%] items-center mx-auto text-center pb-5">
            Read a few of the interesting things our client has to say about us.
        </p>

        {/* Testimonial A */}
        {isAboveSmallScreens ? (
            <div className="flex justify-between mb-5 items-center w-full rounded-[10px] p-5 bg-[#F9F9F9]">
                <img src={testimonialC} alt="" w-200px className="basis-2/5"/>
                <div className="basis-[38%]">
                    <p className="text-grey text-10px font-[500] pb-5">
                    Lorem ipsum dolor sit amet consectetur. Velit odio maecenas euismod egestas nulla
                    accumsan leo eget. Nunc lorem dolor tincidunt eget. Ultricies phasellus morbi hendrerit
                    </p>
                    <h3 className="text-dark font-bold py-2 text-20px">Louis Marty</h3>
                    <p className="text-grey text-10px font-[500]">
                     Co-founder & CEO at Merci Handy
                    </p>
                </div>
            </div>
        ): (
            <div className=" w-full rounded-[10px] p-5 bg-[#F9F9F9] mb-10">
                <img src={testimonialC} alt=""  className="w-100px"/>
                <div>
                    <p className="text-grey text-10px font-[400] pt-5 pb-4">
                    Lorem ipsum dolor sit amet consectetur. Velit odio maecenas euismod egestas nulla
                    accumsan leo eget. Nunc lorem dolor tincidunt eget. Ultricies phasellus morbi hendrerit
                    </p>
                    <h3 className="text-dark font-bold py-[6px] text-20px">Louis Marty</h3>
                    <p className="text-grey text-10px font-[400]">
                     Co-founder & CEO at Merci Handy
                    </p>
                </div>
            </div>
        )}

        <div className="md:flex justify-between items-center ">
            {/* Testimonial B */}
            <div className=" w-full rounded-[10px] p-5 bg-[#F9F9F9] basis-[45%] mb-10 md:mb-0 ">
                <img src={testimonialA} alt=""  className="w-100px"/>
                <div>
                    <p className="text-grey text-10px font-[400]  md:font-[500]  md:w-[80%] pt-5 pb-4">
                    Lorem ipsum dolor sit amet consectetur. Velit odio maecenas euismod egestas nulla
                    accumsan leo eget. Nunc lorem dolor tincidunt eget. Ultricies phasellus morbi hendrerit
                    </p>
                    <h3 className="text-dark font-bold py-[6px] text-20px">Louis Marty</h3>
                    <p className="text-grey text-10px font-[400] md:font-[500]">
                     Co-founder & CEO at Merci Handy
                    </p>
                </div>
            </div>

            {/* Testimonial C */}
            <div className=" w-full rounded-[10px] p-5 bg-[#F9F9F9] basis-[45%] ">
                <img src={testimonialB} alt=""  className="w-100px"/>
                <div>
                    <p className="text-grey text-10px font-[400] md:font-[500] md:w-[80%] pt-5 pb-4">
                    Lorem ipsum dolor sit amet consectetur. Velit odio maecenas euismod egestas nulla
                    accumsan leo eget. Nunc lorem dolor tincidunt eget. Ultricies phasellus morbi hendrerit
                    </p>
                    <h3 className="text-dark font-bold py-[6px] text-20px">Louis Marty</h3>
                    <p className="text-grey text-10px font-[400] md:font-[500]">
                     Co-founder & CEO at Merci Handy
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Testimonial