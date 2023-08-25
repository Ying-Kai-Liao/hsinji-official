"use client";

import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";
import { serifKorean } from "@/app/layout";

const Footer = () => {
  return (
    <footer className="bg-white text-[#686563] w-full">
      <div className="container mx-auto py-20 max-w-[1170px]">
        <div className={`flex flex-row justify-start items-start gap-4 font-extralight`}>
          <div className="w-40 mr-16">
            <Link href={"/"} >
              <Logo />
            </Link>
          </div>
          <div className="mb-4 px-4 w-96">
            <h3 className={`${serifKorean.className} text-base font-semibold mb-4 text-[#4D4A47]`}>開診時間</h3>
            <div className="grid grid-cols-3 gap-y-4">
              <p className="text-sm font-light col-span-1">週一至週五</p>
              <p className="text-sm font-light col-span-2">11:00-20:00<br />中午12:00-13:00休息</p>

              <p className="text-sm font-light col-span-1">週六/日</p>
              <p className="text-sm font-light col-span-2">休診</p>
            </div>
          </div>
          <div className="mb-4 px-4">
            <h3 className={`${serifKorean.className} text-base font-semibold mb-2 text-[#4D4A47]`}>聯絡我們</h3>
            <ul className="">
              <li><Link href="/products">Product 1</Link></li>
              <li><Link href="/products">Product 2</Link></li>
              <li><Link href="/products">Product 3</Link></li>
            </ul>
          </div>
          <div className="mb-4 px-4">
            <h3 className={`${serifKorean.className} text-base font-semibold mb-2 text-[#4D4A47]`}>追蹤我們</h3>
            <ul>
              <li><Link href="/products">Product 1</Link></li>
              <li><Link href="/products">Product 2</Link></li>
              <li><Link href="/products">Product 3</Link></li>
            </ul>
          </div>
        {/* Add more sections with links here */}
        </div>
      </div>
      <div className="bg-[#4d4a47] text-gray-50 text-xs py-3 font-normal text-xs">
        <div className="container mx-auto container flex justify-between max-w-[1170px]">
          <ul className="flex space-x-6">
            <li>Terms</li>
            <li>Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="">
            © Hsinji Clinic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
