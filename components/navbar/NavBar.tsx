'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import NavLinks from "./NavLinks"
import Button from "@/components/Button"

const NavBar = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(currentScrollTop < lastScrollTop || currentScrollTop === 0);
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);


    return (
        <nav className={`bg-white font-normal w-full fixed top-0 left-0 z-50 px-2 md:px-4 transition-transform duration-300 ${isVisible ? 'transform-y-0' : 'transform-y-0'}`}>
            <div className="container mx-auto max-w-[1170px] flex items-center font-small justify-between text-[#686563]">
                <Link href={"/"} className="w-[120px] md:w-[150px] py-3 md:py-2">
                    <Logo />
                </Link>
                <ul className="md:flex hidden items-center gap-8">
                    {/* <li><Link href={"/"} className="py-7 px-3">臨床案例</Link></li> */}
                    <NavLinks />
                </ul>
                <div className="md:block hidden">
                    <Button />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;