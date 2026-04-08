"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const figures = [
  { name: "गौतम बुद्ध", title: "तथागत", image: "/images/buddha.png" },
  { name: "शिवाजी महाराज", title: "छत्रपती", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2064" },
  { name: "जोतिबा फुले", title: "महात्मा", image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=2074" },
  { name: "शाहू महाराज", title: "राजर्षी", image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=2070" },
  { name: "डॉ. आंबेडकर", title: "भारतरत्न", image: "/images/ambedkar.png" },
  { name: "माता जिजाऊ", title: "राजमाता", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976" },
  { name: "सावित्रीबाई फुले", title: "क्रांतिज्योति", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974" },
  { name: "माता रमाई", title: "त्यागमूर्ती", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070" },
];

export const FiguresBanner = () => {
  // Multiply for smooth continuous slide
  const items = [...figures, ...figures];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-white/5 py-6 overflow-hidden mt-20">
      <div className="relative flex">
        <motion.div 
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-12 md:gap-20 whitespace-nowrap pl-12 md:pl-20"
        >
          {items.map((figure, i) => (
            <div
              key={i}
              className="flex flex-col items-center flex-shrink-0 group"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-all shadow-md mb-2">
                <Image
                  src={figure.image}
                  alt={figure.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[9px] font-bold text-gold uppercase tracking-tighter">
                {figure.title}
              </span>
              <span className="text-xs font-bold text-primary-navy dark:text-white text-center">
                {figure.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
