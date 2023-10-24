"use client";

import Image from "next/image";
import { serifKorean, sansKorean } from "@/fonts/Fonts";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="flex items-center justify-center flex-col w-full"
    >
      <motion.div style={{y: backgroundY}} className="w-full">
        <div className="bg-radial-gradient absolute w-full h-[56.3vw]"></div>
        {/* <div className="bg-white/40 absolute w-full h-[56.3vw]"></div> */}
        <Image
          src="/bg_home.jpeg"
          alt="home"
          width={1600}
          height={900}
          className="w-full"
        />
      </motion.div>
      {/* <div className="bubble absolute left-1/2 top-3/4 transform -translate-x-1/2 w-65 h-65 bg-[#2e6c4b] rounded-full animate-bubble"></div> */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity}}
        className="min-h-500px text-[#4D4A47] text-center my-[35vh] absolute rounded-xl p-20"
      >
        <div className={`${serifKorean.className} mb-7`}>
          <p className="text-2xl md:text-6xl font-bold">
            生命有基督 · 生病有信基
          </p>
        </div>
        <div className={`${sansKorean.className}`}>
          <p className="text-xl">喜樂的心乃是良藥</p>
        </div>
      </motion.div>
    </section>
  );
}
