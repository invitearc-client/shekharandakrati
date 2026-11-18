"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({ from = "bottom", className = "", children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = from === "top" ? "-translate-y-full" : "translate-y-full";

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
          show ? "translate-y-0 opacity-100" : `${hidden} opacity-0`
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
      {/* Carnival event */}
      <div className="flex scroll-mt-6 flex-col  items-center bg-[url('/assets/carnival.webp')] bg-cover bg-no-repeat h-140">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20  mt-30">
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[50px] md:text-5xl lg:text-[70px]">
            Carnival
          </h2>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base lg:text-[25px]">
            13 December 2026 · Sunday
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            12:00 PM
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            At Our Residence
          </p>
        </div>
      </div>

      {/* Ring Ceremony event */}
      <div className="flex scroll-mt-6 flex-col  items-center bg-[url('/assets/ring.webp')] bg-cover bg-no-repeat h-170">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20  mt-35">
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[45px] md:text-5xl lg:text-[70px]">
            Ring Ceremony
          </h2>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base lg:text-[25px]">
           13 December 2026 · Sunday
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            4:30 PM
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            At Our Residence
          </p>
        </div>
      </div>

      {/* Sangeet event */}
      <div className="flex scroll-mt-6 flex-col  items-center bg-[url('/assets/sangeet.webp')] bg-cover bg-no-repeat h-170">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20  mt-30">
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[45px] md:text-5xl lg:text-[70px]">
            Ladies Sangeet
          </h2>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base lg:text-[25px]">
           13 December 2026 · Sunday
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            7:00 PM
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            At Our Residence
          </p>
        </div>
      </div>

      {/* Ghur Chadi event */}
      <div className="flex scroll-mt-6 flex-col  items-center bg-[url('/assets/ghurchadi.webp')] bg-cover bg-no-repeat h-170">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20  mt-30">
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[45px] md:text-5xl lg:text-[70px]">
             Ghurchadi
          </h2>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base lg:text-[25px]">
           14 December 2026 · Monday
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            8:30 AM
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            At Our Residence
          </p>
        </div>
      </div>

      {/* Pheras event */}
      <div className="flex scroll-mt-6 flex-col  items-center bg-[url('/assets/phere.webp')] bg-cover bg-no-repeat h-170">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20  mt-30">
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[45px] md:text-5xl lg:text-[70px]">
           Pheras
          </h2>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base lg:text-[25px]">
           14 December 2026 · Monday
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            6:00 PM
          </p>
          <p className="text-black font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            At Our Residence
          </p>
        </div>
      </div>

      {/* Reception event */}
      <div className="flex scroll-mt-6 flex-col  items-center bg-[url('/assets/reception.webp')] bg-cover bg-no-repeat h-170">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20  mt-35">
          <h2 className="text-[#fff] font-cormorant-upright font-semibold  text-[45px] md:text-5xl lg:text-[70px]">
            Reception Night
          </h2>
          <p className="text-white font-cormorant-garamond text-[18px] md:text-base lg:text-[25px]">
              14 December 2026 · Monday
          </p>
          <p className="text-white font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            8:00 PM
          </p>
          <p className="text-white font-cormorant-garamond text-[18px] md:text-base text-center lg:text-[25px]">
            At Our Residence
          </p>
        </div>
      </div>
    </>
  );
}
