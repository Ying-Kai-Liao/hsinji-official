"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"], //center of target meets end of container(default as screen)
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "50%"]);
  const fontSize = useTransform(scrollYProgress, [0, 0.8, 1], ["20px", "100px", "5px"])

  return (
    <section ref={ref} className="flex flex-col items-center justify-center text-center ">
      <motion.div style={{opacity}} className="flex flex-col items-center justify-center text-center text-5xl h-screen">
        <ul>
          <li>Intro</li>
          <li>Intro</li>
          <li>Intro</li>
          <li>Intro</li>
          <li>Intro</li>
        </ul>
      </motion.div>

    </section>
  );
}