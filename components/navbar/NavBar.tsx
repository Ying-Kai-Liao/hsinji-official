'use client'

import React from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import NavLinks from "./NavLinks"
import Button from "@/components/Button"

const NavBar = () => {
    return (
        <nav className="bg-white">
            <div className="flex items-center font-small justify-around text-[#686563]">
                <Link href={"/"} className="">
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