'use client';
import React, { useEffect } from 'react';
import './styles/header-styles.css';
import Image from "next/image";
import iconsHome from '../../assets/icons/icons8-home-64.png';
import iconsBlog from '../../assets/icons/icons8-blog-64.png';
import iconsContact from '../../assets/icons/icons8-blog-64.png';
import iconsAbout from '../../assets/icons/icons8-about-64.png';
import iconsClose from '../../assets/icons/icons8-close-64.png';
import Logos from '../../assets/logo/Logo.png';

export default function Header() {

    function toggleDrawer() {
        let drawerCheckbox = document.getElementById("my-drawer-4");
        drawerCheckbox.checked = !drawerCheckbox.checked;
    }

    useEffect(() => {
        const button = document.getElementById('mobile-hamburger-menu');
        button.addEventListener('click', toggleDrawer);

        return () => {
            button.removeEventListener('click', toggleDrawer);
        };
    }, []);

    return (
        <>

            <header className="bg-[#398FCF] text-[#F0DFDF] ">
                <div className="navbar p-4 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div className="flex items-center gap-2">
                                {/* logo */}
                                <Image src={Logos} className='mx-auto' alt="Logo" id='logos' height={35} width={30} />
                                <h3 className="cursor-default text-3xl text-white" id="Title">PepeToons</h3>
                            </div>
                        </div>
                    </div>
                    {/* Large screen menu */}
                    <div className="navbar-center max-md:hidden absolute left-1/2 -translate-x-1/2">
                        <ul className="menu menu-horizontal px-1 flex font-bold text-lg text-white">
                            <li><a className="hover:text-black"> <Image width={15} height={10} src={iconsHome} alt="icons-home" /> Home</a></li>
                            <li><a className="hover:text-black"> <Image width={15} height={10} src={iconsBlog} alt="icons-explore" />Explore </a></li>
                            <li><a className="hover:text-black"> <Image width={15} height={15} src={iconsContact} alt="icons-contact" /> Contact </a></li>
                            <li><a className="hover:text-black"> <Image width={15} height={10} src={iconsAbout} alt="icons-about" /> About </a></li>
                        </ul>
                    </div>

                    <div className="navbar-end md:hidden">
                        <button htmlFor="my-drawer-4" id="mobile-hamburger-menu" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Hamburger side menu */}
            <div className="drawer drawer-end grow text-[#F0DFDF] md:hidden" id="drawer-4">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full w-80 p-4 bg-[#398FCF] text-white font-bold text-lg max-w-md md:max-w-2xl">
                        {/* Sidebar content*/}
                        <li className='inline absolute top-2 right-4 m-auto z-50 hover:text-gray-900 '>
                            <button aria-label="Close Menu" className="drawer-close" onClick={() => {
                                document.getElementById("my-drawer-4").checked = false;
                            }}>
                                <Image width="15" height="15" src={iconsClose} alt="icons-close" />
                            </button>
                        </li>
                        <li><a className="hover:text-gray-900"> <Image width={15} height={10} src={iconsHome} alt="icons-home" /> Home</a></li>
                        <li><a className="hover:text-gray-900"> <Image width={15} height={10} src={iconsBlog} alt="icons-explore" />Explore </a></li>
                        <li><a className="hover:text-gray-900"> <Image width={15} height={15} src={iconsContact} alt="icons-contact" /> Contact </a></li>
                        <li><a className="hover:text-gray-900"> <Image width={15} height={10} src={iconsAbout} alt="icons-about" /> About </a></li>
                    </ul>
                </div>
            </div>

        </>
    );
}