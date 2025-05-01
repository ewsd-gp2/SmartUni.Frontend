import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-15 flex justify-between items-center md:items-start mt-20">
  
      <div className="flex flex-col items-center mt-10">
        <div className="flex gap-3 md:gap-4 mb-4">
          <a href="#"><FaLinkedin className="text-[#0A66C2] bg-white rounded-full p-2"  size={32}/></a>
          <a href="#" className=""><FaTwitter className="text-[#1DA1F2] bg-white rounded-full p-2" size={32}/></a>
          <a href="#"><FaYoutube className="text-[#FF0000] bg-white rounded-full p-2" size={32}/></a>
          <a href="#"><FaInstagram className="text-[#E4405F] bg-white rounded-full p-2" size={32}/></a>
          <a href="#"><FaFacebook className="text-[#1877F2] bg-white rounded-full p-2" size={32}/></a>
        </div>
        <p className="text-gray-300 md:text-base text-sm">Copyright 2025 © SmartUni</p>
      </div>


      <div className="text-white mt-8 md:mt-0 text-left space-y-2">
        <p className="underline underline-offset-4 cursor-pointer md:text-base text-sm">Features We Provide</p>
        <p className="underline underline-offset-4 cursor-pointer md:text-base text-sm">Blogs</p>
        <p className="underline underline-offset-4 cursor-pointer md:text-base text-sm">Our Student’s Voice</p>
        <p className="underline underline-offset-4 cursor-pointer md:text-base text-sm">Our Teachers</p>
      </div>
    </footer>
  );
};