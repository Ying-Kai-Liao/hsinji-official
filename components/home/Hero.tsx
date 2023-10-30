"use client";

import React, { useEffect, useState } from "react";
import OpeningAnimation from "@/components/animations/HeroAnimation";
import LogoAnimation from "@/components/animations/LogoAnimation";

export default function HeroComponent() {
  const [activeAnimation, setActiveAnimation] = useState(false);

  return ( 
    <section>
      <LogoAnimation onComplete={() => setActiveAnimation(true)}/>
      <OpeningAnimation activate={activeAnimation}/>
    </section>
  );
}
