import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-start mt-20">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start mt-10">
        <div className="flex gap-4 mb-4">
          <a href="#"><FaLinkedin className="text-[#0A66C2] bg-white rounded-full p-2" size={40} /></a>
          <a href="#"><FaTwitter className="text-[#1DA1F2] bg-white rounded-full p-2" size={40} /></a>
          <a href="#"><FaYoutube className="text-[#FF0000] bg-white rounded-full p-2" size={40} /></a>
          <a href="#"><FaInstagram className="text-[#E4405F] bg-white rounded-full p-2" size={40} /></a>
          <a href="#"><FaFacebook className="text-[#1877F2] bg-white rounded-full p-2" size={40} /></a>
        </div>
        <p className="text-gray-300">Copyright 2025 © SmartUni</p>
      </div>

      {/* Right Section */}
      <div className="text-white mt-8 md:mt-0 text-center md:text-right space-y-2">
        <p className="underline underline-offset-4 cursor-pointer">Features We Provide</p>
        <p className="underline underline-offset-4 cursor-pointer">Blogs</p>
        <p className="underline underline-offset-4 cursor-pointer">Our Student’s Voice</p>
        <p className="underline underline-offset-4 cursor-pointer">Our Teachers</p>
      </div>
    </footer>
  );
};

