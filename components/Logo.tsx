'use client'

import React from "react"
import Image from "next/image"

const Logo = () => {
    return (
        <div>
            <Image src='/logo.png' alt='LOGO.png' width={250} height={250}></Image>
        </div>
    )
}

export default Logo;