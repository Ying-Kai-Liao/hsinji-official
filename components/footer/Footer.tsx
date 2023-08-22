"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-[#686563]">
      <div className="container mx-auto flex flex-row justify-center py-20">
        <div className="mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <ul>
            <li><Link href="/products">Product 1</Link></li>
            <li><Link href="/products">Product 2</Link></li>
            <li><Link href="/products">Product 3</Link></li>
          </ul>
        </div>
        <div className="mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul>
            <li><Link href="/products">Product 1</Link></li>
            <li><Link href="/products">Product 2</Link></li>
            <li><Link href="/products">Product 3</Link></li>
          </ul>
        </div>
        {/* Add more sections with links here */}
      </div>
      <div className="bg-[#4d4a47] text-gray-50 text-xs py-2">
        <div className="container flex justify-end">
          <div className="max-w-[1170px]">
            © ĒSEN Medical. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
