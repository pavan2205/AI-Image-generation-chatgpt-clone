import React from 'react'
import logos from '../assets/logo.svg'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to='/'>
        <img src={logos} alt='logo' className="w-28 object-contain" />
      </Link>
      <Link to='create-post' className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
        Create
      </Link>
    </header>
  )
}

export default Header
