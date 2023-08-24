'use client'

import React from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import NavLinks from "./NavLinks"
import Button from "@/components/Button"

const NavBar = () => {
    return (
        <nav className="bg-white font-light w-full">
            <div className="container mx-auto max-w-[1170px] flex items-center font-small justify-between text-[#686563]">
                <Link href={"/"} className="w-[150px]">
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