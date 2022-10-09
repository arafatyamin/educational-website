import React from 'react';
import { BellAlertIcon, BuildingLibraryIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className="">
            
            <div>
                <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a  href='/'>HOME</a></li>
                    <li><a  href='/'>ABOUT</a></li>
                    <li><a  href='/'>COURSES</a></li>
                    <li><a  href='/'>ADVISOR</a></li>
                    <li><a  href='/'>EVENT</a></li>
                    <li><a  href='/'>BLOG</a></li>
                    <li><a  href='/'>CONTACT</a></li>
                </ul>
             </div>
            <div className='flex justify-center'>
                <BuildingLibraryIcon className="md:h-10 h-6 w-6  md:w-8 text-yellow-500 ml-8"></BuildingLibraryIcon>
                <h1 className='md:text-4xl text-xl text-blue-500 font-bold'>Edu-Success</h1>
            </div>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            <li><a  href='/'>HOME</a></li>
            <li><a  href='/'>ABOUT</a></li>
            <li><a  href='/'>COURSES</a></li>
            <li><a  href='/'>ADVISOR</a></li>
            <li><a  href='/'>EVENT</a></li>
            <li><a  href='/'>BLOG</a></li>
            <li><a  href='/'>CONTACT</a></li>
        </ul>
    </div>
    <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <MagnifyingGlassIcon className='h-6 w-6'></MagnifyingGlassIcon>
    </button>
    <button className="btn btn-ghost btn-circle">
      <BellAlertIcon className="h-6 w-6 "></BellAlertIcon>
    </button>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Header;