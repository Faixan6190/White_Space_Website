"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-[92px] py-4 px-6 md:px-[220px] bg-[#043873] flex justify-between items-center">
      {/* Logo */}
      <div className="w-[191px] h-[34px]">
        <Image src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-[737.5px] h-[60px] justify-between items-center">
        <ul className="flex space-x-8 text-white">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <button className="px-7 py-2 rounded-lg bg-[#FFE492] md:ml-4">Login</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[92px] left-0 w-full bg-[#043873] text-white flex flex-col items-center space-y-4 py-6">
          <ul className="flex flex-col space-y-4">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <button className="px-10 py-4 rounded-lg bg-[#FFE492]">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
