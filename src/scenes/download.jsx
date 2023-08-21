import React from 'react'
import googlePlay from '../assets/Google play.png'
import applePlay from '../assets/App Store.png'
import useMediaQuery from '../hooks/useMediaQuery';


const Download = () => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  return (
    <section 
    className="py-5"
    id="download">
        <div className="py-20 rounded-[10px] bg-blue text-center w-5/6 mx-auto">
            <h1 className="font-bold text-[26px] md:text-[30px]  text-white w-[75%] md:w-[45%] mx-auto">
                Download Eventee on Google play or App store
            </h1>
            <p className="font-[300] my-4 text-[17px] text-white w-[62%] md:w-[28%] mx-auto">
                Download our native apps to manage your events
            </p>

            {isAboveSmallScreens ? (
                <div className="flex justify-center items-center gap-5 ">
                    <img src={googlePlay} alt="Google Play" className="w-50px" />
                    <img src={applePlay} alt="Apple Play" className="w-50px" />
                </div>
            ):(
                <div className=" flex flex-col justify-center items-center ">
                    <img src={googlePlay} alt="Google Play" className="w-50px mb-3" />
                    <img src={applePlay} alt="Apple Play" className="w-50px" />
                </div>
            )} 
        </div>
    </section>
  )
}

export default Download