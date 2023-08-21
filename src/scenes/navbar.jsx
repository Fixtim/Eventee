import React from 'react';
import {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import navLogo from '../assets/nav.png'



const Link = ({ page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
 /* const position = useRef(null)

  const scrollToPosition = (eleRef) => {
    window.scrollTo({top: eleRef.current.offsetTop, behaviour: "smooth" })
  }*/

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-blue" : "text-gray"}
      hover:text-blue transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick = {() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>  
  )
}

const Navbar = ({selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const [fix, setFixed] = useState(false);

  const fixedNav = () => {
    if (window.scrollY >= 16) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  
  window.addEventListener('scroll', fixedNav)
  return (
    <nav className= {fix ? `${"w-full bg-white py-4 shadow-sm fixed"}` : `${"w-full bg-white py-4"}` } >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <a href="/">
          <img src={navLogo} alt="logo" className='cursor-pointer' />
        </a>

        {/* Desktop Menu */}
        {isAboveSmallScreens ?(
          <div className="flex justify-between items-center gap-14 w-3.9/6">
             <div className="flex gap-10 font-Inter text-sm text-gray font-semibold">
                 <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                 />
                 <Link 
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                 /> 
                 <Link 
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                 /> 
                 <Link 
                 page="Testimonials"
                 selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage}
                 />    
                 <Link 
                  page="Download"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                 /> 
             </div>
             <div className="flex justify-between gap-5">
              <button className="px-6 py-2 bg-none outline-none border-solid border-2  border-blue text-blue font-semibold">
                Login
              </button>
              <button className="px-6 py-2 bg-blue outline-none border-none text-white font-semibold  hover:bg-[#ABB2D9] hover:text-blue">
                Create Account
              </button>
             </div>
          </div>
         
        ):(
          <FaBars className='cursor-pointer' onClick = {() => setIsMenuToggled(!isMenuToggled)} />
          ) }
          {/* Mobile Menu */}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-black w-[300px] transition duration-5000">
              {/* close Menu Icon */}
              <div className="flex justify-end p-12">
              <FaTimes className='cursor-pointer text-white' onClick = {() => setIsMenuToggled(!isMenuToggled)} />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-6 ml[33px] text-2xl text-grey">
                <div className="flex flex-col font-Inter text-sm gap-6 ml-5 text-gray font-semibold">
                  <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link 
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> 
                  <Link 
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                 /> 
                  <Link 
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />    
                  <Link 
                    page="Download"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> 
                </div>
                <div className="flex flex-col justify-between gap-5 mx-auto">
                  <button className="px-3 py-2 bg-none outline-none border-solid border-2 text-[16px] border-blue text-blue font-[500]">
                    Login
                  </button>
                  <button 
                   className="px-3 py-2 bg-blue outline-none border-none text-[16px] text-white font-[500] hover:bg-[#ABB2D9] hover:text-blue"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar