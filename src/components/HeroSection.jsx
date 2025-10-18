"use client"

import React, { useEffect, useRef, useState } from "react";
import 'animate.css';
function HeroSection({ text }) {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    // Observer for the header animation
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      });
    }, {
      threshold: 0,
      rootMargin: "0px 0px -20% 0px"
    });

    // Attach observers
    if (headerRef.current) headerObserver.observe(headerRef.current);

    // 🔹 Cleanup observers on unmount
    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
    };
  }, []);
  return (
    <section className="w-full text-center overflow-hidden lg:min-h-[250px] flex items-center justify-center">
      <h1 ref={headerRef} className={`${headerVisible ? "top-0 opacity-100" : "top-[3rem] opacity-0"} relative uppercase font-bold lg:text-[10.5rem] text-[4rem] lg:scale-[1.4] scale-[1.2] transition-all duration-500`}>
        {text}
      </h1>
    </section>
  );
}

export default HeroSection;
