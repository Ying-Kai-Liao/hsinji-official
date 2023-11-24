"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 1.5 },
  },
};

const circleVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: [1, 50],
    transition: { duration: 2.0 },
  },
};

const backgroundVariants = {
  visible: { opacity: 1 },
  fadeOut: { opacity: 0, transition: { duration: 1.5 } },
};

type LogoAnimationProps = {
    onComplete: () => void;
  };

const LogoAnimation:React.FC<LogoAnimationProps> = ({ onComplete }) => {
  const [logoState, setLogoState] = useState({
    targetPosition: { x: 0, y: 0 },
    scaleValues: { x: 1, y: 1 },
  });
  const [moveLogo, setMoveLogo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationLogoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const targetElement = document.getElementById("navbarLogo");
    if (targetElement && animationLogoRef.current) {
      const targetRect = targetElement.getBoundingClientRect();
      const animationLogoRect =
        animationLogoRef.current.getBoundingClientRect();
      // Getting Position Value
      const targetX =
        targetRect.left - animationLogoRect.left - targetRect.width / 2;
      const targetY =
        targetRect.top - animationLogoRect.top - targetRect.height / 2;
      // Getting Size Value
      const scaleX = targetRect.width / animationLogoRect.width;
      const scaleY = targetRect.height / animationLogoRect.height;
      setLogoState((prevState) => ({
        ...prevState,
        targetPosition: { x: targetX, y: targetY },
        scaleValues: { x: scaleX, y: scaleY },
      }));
    }
  }, []);

  return (
    !animationComplete && (
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-[#2E6C4B] z-50 flex items-center justify-center overflow-hidden"
        variants={backgroundVariants}
        initial="visible"
        animate={moveLogo ? "fadeOut" : "visible"}
      >
        {/* White Logo - Always Visible */}
        <motion.img
          src="/LOGO.svg"
          alt="logo"
          className="absolute z-10 w-[300px]"
          ref={animationLogoRef}
          initial="center"
          animate={
            moveLogo
              ? {
                  x: logoState.targetPosition.x,
                  y: logoState.targetPosition.y,
                  scale: logoState.scaleValues.x,
                  transition: { duration: 1 },
                }
              : "center"
          }
          onAnimationComplete={() => {
            if (moveLogo) {
              onComplete()
              setAnimationComplete(true);
            }
          }}
        />

        {/* Original Colored Logo - Fades Out */}
        <motion.img
          src="/LOGO_white.svg"
          alt="logo"
          className="z-10 w-[300px]"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="absolute bg-white rounded-full"
          style={{ width: "100px", height: "100px" }}
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => {
            setMoveLogo(true);
          }}
        />
      </motion.div>
    )
  );
};

export default LogoAnimation;
