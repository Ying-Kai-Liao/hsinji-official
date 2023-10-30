"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type OpenAnimationProps = {
  onComplete?: () => void;
  activate?: boolean;
};

const OpeningAnimation: React.FC<OpenAnimationProps> = ({
  onComplete,
  activate = false,
}) => {
  const controls = useAnimation();
  const width = useWindowWidth();

  useEffect(() => {
    if (activate) {
      controls.start("visible");
    }
  }, [activate, controls]);
  return (
    <section
      id="hero"
      className="flex items-center justify-center flex-col md:w-full h-screen"
    >
      <div className="h-screen w-full relative">
        <div className="bg-radial-gradient absolute w-full h-[56.3vw]"></div>
        {/* <div className="bg-white/40 absolute w-full h-[56.3vw]"></div> */}
        <Image
          src="/bg_home.jpeg"
          alt="home"
          layout="fill" // Adjusted line
          objectFit="cover" // Adjusted line
          className="h-screen md:w-full"
        />
        <div className="bg-radial-gradient absolute w-full h-screen"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="min-h-500px text-[#4D4A47] text-center my-[35vh] absolute rounded-xl p-20"
      >
        {width > 768 && (
          <>
            <div className={`mb-7`}>
              <motion.p
                style={{fontFamily: "'Noto Serif TC', serif"}}
                className="text-4xl md:text-6xl font-bold leading-loose "
                variants={childVariants}
              >
                生命有基督 · 生病有信基
              </motion.p>
            </div>
            <div style={{fontFamily: "'Noto Sans TC', sans-serif"}}>
              <motion.p className="text-xl" variants={childVariants}>
                喜樂的心乃是良藥
              </motion.p>
            </div>
          </>
        )}
        {width <= 768 && (
          <>
            <div 
              style={{fontFamily: "'Noto Serif TC', serif"}}
              className={` mb-7`}
            >
              <motion.p
                className="text-4xl md:text-6xl font-bold leading-loose pr-8"
                variants={childVariants}
              >
                生命有基督
              </motion.p>
              <motion.p
                className="text-4xl md:text-6xl font-bold leading-loose pl-4"
                variants={childVariants}
              >
                   生病有信基
              </motion.p>
            </div>
            <div style={{fontFamily: "'Noto Sans TC', sans-serif"}}>
              <motion.p className="text-xl" variants={childVariants}>
                喜樂的心乃是良藥
              </motion.p>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default OpeningAnimation;
