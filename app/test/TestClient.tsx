"use client";

import React, { useEffect, useState } from "react";
import OpeningAnimation from "@/components/animations/HeroAnimation";
import LogoAnimation from "@/components/animations/LogoAnimation";

export default function TestClient() {
  const [activeAnimation, setActiveAnimation] = useState(false);

  
  return ( 
    <>
      <LogoAnimation onComplete={() => {
        setActiveAnimation(true)
        console.log('set bool !')
      }}/>
      <OpeningAnimation activate={activeAnimation}/>
    </>
  );
}
