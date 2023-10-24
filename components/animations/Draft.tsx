'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function App() {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      controls.start({ opacity: 1 - scrollY / 1000 }); // Adjust as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, scrollY]);

  return (
    <motion.div animate={controls}className=''>
      Draft
    </motion.div>
  );
}

export default App;
