'use client'

import React from "react"
import Image from "next/image"

const Logo = () => {
    return (
        <div id="navbarLogo" className="max-w-[250px]">
            <Image src='/LOGO.svg' alt='LOGO.svg' width={500} height={566}></Image>
        </div>
    )
}

export default Logo;