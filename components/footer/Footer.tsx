"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/Logo";
import { serifKorean } from "@/app/fonts/Fonts";

const Footer = () => {
  const [enlarge, setEnlarge] = useState<boolean>(false);

  const handleClick = () => {
    setEnlarge(!enlarge);
  };

  return (
    <footer className="bg-white text-[#686563] w-full">
      <div className="container mx-auto py-20 max-w-[1170px]">
        <div
          className={`flex flex-row justify-start items-start gap-4 font-extralight`}
        >
          <div className="w-40 mr-16">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="mb-4 px-4 w-72">
            <h3
              className={`${serifKorean.className} text-base font-semibold mb-4 text-[#4D4A47]`}
            >
              開診時間
            </h3>
            <div className="grid grid-cols-3 gap-y-4">
              <p className="text-sm font-normal col-span-1">週一至週五</p>
              <p className="text-sm font-normal col-span-2">
                11:00-20:00
                <br />
                中午12:00-13:00休息
              </p>

              <p className="text-sm font-normal col-span-1">週六/日</p>
              <p className="text-sm font-normal col-span-2">休診</p>
            </div>
          </div>
          <div className="mb-4 px-4 ">
            <h3
              className={`${serifKorean.className} text-base font-semibold mb-4 text-[#4D4A47]`}
            >
              聯絡我們
            </h3>
            <ul className="text-sm font-normal space-y-4">
              <li className="underline">
                <Link href="https://www.google.com/maps/place/106%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%AE%89%E5%8D%80%E4%BB%81%E6%84%9B%E8%B7%AF%E5%9B%9B%E6%AE%B5112%E5%B7%B79%E5%BC%843%E8%99%9F1/@25.0368535,121.5473343,17z/data=!3m1!4b1!4m5!3m4!1s0x3442abce473ef9cb:0xd1dd4c23e51b0578!8m2!3d25.0368487!4d121.5499092?hl=zh-TW&entry=ttu">
                  <span className="decoration-solid">
                    106台北市大安區仁愛路四段112巷9弄3號1
                  </span>
                </Link>
              </li>
              <li className="underline">
                <a href={`tel:${"0922087179"}`}>0922087179</a>
              </li>
              <li>
                <span>亦可於官方 LINE@留言，客服將儘速與您聯繫</span>
              </li>
            </ul>
          </div>
          <div className="mb-4 px-4">
            <h3
              className={`${serifKorean.className} text-base font-semibold mb-4 text-[#4D4A47]`}
            >
              LINE 諮詢
            </h3>
            <ul className="space-y-4 text-sm font-normal">
              <li>
                <Link href="https://lin.ee/OqQ6VuO">
                  掃描 QRCODE 或點此加入 LINE 線上預約
                </Link>
              </li>
              <li onClick={handleClick}>
                <Image
                  src="https://qr-official.line.me/gs/M_789ngczz_BW.png?oat_content=qr"
                  alt="LINE QR Code"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          {/* Add more sections with links here */}
        </div>
      </div>
      {enlarge && (
        <div className="fixed top-0 w-screen h-screen bg-gray-300/70 flex justify-center items-center" onClick={handleClick}>
          <Image
            src="https://qr-official.line.me/gs/M_789ngczz_BW.png?oat_content=qr"
            alt="LINE QR Code"
            width={300}
            height={300}
          />
        </div>
      )}
      <div className="bg-[#4d4a47] text-gray-50 text-xs py-3 font-normal">
        <div className="container mx-auto flex justify-between max-w-[1170px]">
          <ul className="flex space-x-6">
            <li>Terms</li>
            <li>Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="">© Hsinji Clinic. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
