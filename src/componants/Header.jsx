import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const useAppstate = useContext(Appstate);
  const imageUrl = 'https://tse2.mm.bing.net/th?id=OIP.7DWXljTMZ9WRrQA-nIJd_gHaHa&pid=Api&P=0&h=220';
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='header shadow-2xl sticky z-10 top-0 text-3xl flex justify-between items-center text-red-400 font-bold p-3 border-b-2 border-gray-400'>
      <Link to='/'>
        <img className='w-12 rounded-full' src={imageUrl} alt='Logo' />
      </Link>

      {useAppstate.login ? (
    
        <Link to={'/home'}>
          <div className='container mx-auto flex gap-4 md:justify-evenly text-sm items-center'>
            <div className='flex md:hidden'>
              <button onClick={toggleMobileMenu}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`h-6 w-6 cursor-pointer ${isMobileMenuOpen ? 'text-orange-500' : 'text-black'}`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  transition='color 0.3s ease-in-out'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                </svg>
              </button>
            </div>

            {/* Search Bar and Navigation Links */}
            <div className='md:flex items-center flex-col md:flex-row justify-center'>
              <div className='relative mr-4'>
                <input
                  type='search'
                  placeholder='Search...'
                  className='border-2 hover:border-sky-500 bg-transparent w-60 rounded-2xl py-1 px-1 outline-none text-black'
                />
                <button className='absolute right-0 top-0 mt-2 mr-2'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}

              <div className={`md:flex ${isMobileMenuOpen ? 'flex' : 'hidden'} lg:bg-transparent bg-gray-300 absolute md:relative text-black w-full left-0 top-[80px] md:top-0 flex-col md:flex-row justify-center lg:gap-0 md:gap-0 items-center space-x-4`}>
                <Link to='LabTests' className='transition-all duration-300 ease-in-out transform hover:scale-105'>
                  Lab Tests
                </Link>
                <Link to='DoctorAp' className='transition-all duration-300 ease-in-out transform hover:scale-105'>
                  Doctor Appointment
                </Link>
                <Link to='Offier' className='transition-all duration-300 ease-in-out transform hover:scale-105'>
                  Offers
                </Link>
                <Link to='Cart' className='transition-all duration-300 ease-in-out transform hover:scale-105'>
                <FaCartPlus size={30}  />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link to='/log'>
          {/* Login Button */}
          <h1 className='text-lg cursor-pointer capitalize flex items-center '>
            <button className='text-white font-medium text-center bg-green-500 rounded-md p-1'>Login</button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
