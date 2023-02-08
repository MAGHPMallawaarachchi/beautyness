import {useState } from 'react'

import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

import { navLinks, socialMedia } from "./constants";
import { logo_header, reservation, telephone, menu, close } from './assets';
import styles from "./style";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <div className='bg-white w-full overflow-hidden'>
      <div className={`sm:px-16 px-6 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <nav className='w-full py-6 navbar flex justify-between items-center'>

            <div className='flex items-center gap-8'>
              <img src={logo_header} alt="logo" className='min-w-[190px] min-h-[35px]' />

              {/* <div className='flex items-center gap-3 mt-1'>
                    <img src={telephone} alt="telephone" className='h-[21px] w-[21px]' />
                    <p className='font-manrope text-[18px] font-semibold'>Call Us - 011 22 48 131</p>
                  </div> */}
            </div>

            <div className='lt:flex gap-6 items-center hidden'>
              <ul className='list-none gap-8 font-manrope font-[18px] leading-[125%] text-dimWhite flex'>
                {navLinks.map((nav, index) => (
                  <li key={nav.id}>
                    <Link to={nav.link}>{nav.title}</Link>
                  </li>
                ))}
              </ul>

              <ul className='flex gap-6 items-center'>
                {socialMedia.map((sm, index) => (
                  <li key={sm.id}>
                    <Link to="">
                      <img src={sm.icon} alt={sm.id} className='max-h-[19px]' />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link to="" className={`bg-dullBlue1 w-[200px] h-[50px] ${styles.buttonText} flex justify-center items-center gap-2`}>
                <img src={reservation} alt="" className='w-[13.5px] h-[15px]' />
                Reservation
              </Link>
            </div>

            <div className='lt:hidden flex'>
              <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px]' onClick={() => setToggle((prev) => !prev)} />

              <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-6  min-w-[100px] bg-dullBlue2`}>
                <ul className='list-none gap-3 font-manrope font-[18px] text-white flex flex-col text-center'>
                  {navLinks.map((nav, index) => (
                    <li key={nav.id}>
                      <Link to={nav.link}>{nav.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </div>
    <Routes>
      <Route path="/beautyness" element={<Home/>}/>
      <Route path="/beautyness/about" element={<About/>}/>
      <Route path="/beautyness/services" element={<Services/>}/>
      <Route path="/beautyness/contact" element={<Contact/>}/>
      <Route path="/beautyness/error" element={<ErrorPage/>}/>
    </Routes>
    </>

  )
};

export default App