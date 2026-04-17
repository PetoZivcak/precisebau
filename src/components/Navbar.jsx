import React from 'react'
import logo from "../assets/PreciseBauLogo.png"
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">

      {/* hidden checkbox */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <a href="#home" className="hover:text-gray-500">
            <img className="w-28 md:w-32" src={logo} alt="logo" />
          </a>

        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium ">
          <a href="#home" className="hover:text-gray-500">HOME</a>
          <a href="#about" className="hover:text-gray-500">NAŠA PRÁCA</a>
          <a href="#projects" className="hover:text-gray-500">REFERENCIE</a>
          <a href="#contact" className="hover:text-gray-500">KONTAKT</a>
        </div>

        {/* Socials desktop */}
        <div className="hidden md:flex items-center gap-4 text-2xl">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
          <FaSquareXTwitter />
        </div>

        {/* Mobile hamburger */}
        <label htmlFor="menu-toggle" className="md:hidden text-3xl cursor-pointer">
          <HiMenu className="peer-checked:hidden" />
          <HiX className="hidden peer-checked:block" />
        </label>
      </div>

      {/* Mobile menu */}
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96 md:hidden bg-white border-t px-6 peer-checked:py-4">
        <a href="#home" className="block py-2">HOME</a>
        <a href="#about" className="block py-2">NAŠA PRÁCA</a>
        <a href="#projects" className="block py-2">REFERENCIE</a>
        <a href="#contact" className="block py-2">KONTAKT</a>

        <div className="flex gap-4 text-2xl pt-3">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
          <FaSquareXTwitter />
        </div>
      </div>
    </nav>
  )
}

export default Navbar