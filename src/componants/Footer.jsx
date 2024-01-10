import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-10 bg-[#314d4e] text-center text-white">
      <div className="container px-6 pt-6">
        <div className='flex justify-center mb-6 gap-4 '>
        <FaFacebook size={30} color="white"  />
          <FaTwitter size={30} color="white"  />
          <FaGooglePlus size={30} color="white"  />
          <FaInstagramSquare size={30} color="white"  />
          <FaLinkedin size={30} color="white"  />
          <FaSquareGithub size={30} color="white"  />

        </div>

       

        <div>
          <form action="">
            <div className="grid-cols-1 grid md:grid-cols-3 items-center justify-center gap-4">
              <div className="md:mb-6 md:ml-auto">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="relative md:mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent border-white px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label>
              </div>
              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Explore</h5>
              <ul className="mb-2 list-none">
                <li>
                  <a href="#!" className="text-white">About us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Contact us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Services</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Support</a>
                </li>
              </ul>
            </div>

          
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Details</h5>
              <ul className="mb-2 list-none">
                <li>
                  <a href="#!" className="text-white">Cart</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Shopping</a>
                </li>
                <li>
                  <a href="#!" className="text-white">COntact</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Email</a>
                </li>
              </ul>
            </div>
        
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Links</h5>
              <ul className="mb-2 list-none">
                <li>
                  <a href="#!" className="text-white">News & Blogs</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Support</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Return Policy</a>
                </li>
              </ul>
            </div>
      


       
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Address</h5>
              <ul className="mb-2 list-none">
                <li>
                  <a href="#!" className="text-white">+1800 000 11111</a>
                </li>
                <li>
                  <a href="#!" className="text-white">yourgmail.com</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Kolkata, India</a>
                </li>
                <li>
                  <a href="#!" className="text-white">710001</a>
                </li>
              </ul>
            </div>
      


        </div>

        



      </div>

      <div className="w-full p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 RinkiMandal:  My Website
        
      </div>
    </footer>
  );
};

export default Footer;