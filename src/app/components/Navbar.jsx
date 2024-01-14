"use client";
import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    },
];

function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='mx-auto border border-[#33353F] fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100'>
            <div className="container lg:py-4 flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
                
                {/* Menu for small screens or mobile screens */}
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            onClick={() => setNavbarOpen(true)}
                            >
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        ) : (
                            <button 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            onClick={() => setNavbarOpen(false)}
                            >
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                        )
                    }
                </div>
                {/* Menu for medium screens and above */}
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10'>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink title={link.title} href={link.path}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
};

export default NavBar;