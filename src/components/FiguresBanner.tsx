"use client";

import {useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const figures = [
  { name: "गौतम बुद्ध", title: "तथागत", image: "/images/buddha.png" },
  { name: "शिवाजी महाराज", title: "छत्रपती", image: "https://images." },
  { name: "जोतिबा फुले", title: "महात्मा", image: "https://images." },
  { name: "शाहू महाराज", title: "राजर्षी", image: "https://images." },
  { name: "डॉ. आंबेडकर", title: "भारतरत्न", image: "/images/ambedkar.png" },
  { name: "माता जिजाऊ", title: "राजमाता", image: "https://images." },
  { name: "सावित्रीबाई फुले", title: "क्रांतिज्योति", image: "https://images." },
  { name: "माता रमाई", title: "त्यागमूर्ती", image: "https://images." },
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
              <div className="relative w-20 h-24 md:w-24 md:h-32 rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-gold/20 transition-all duration-500 mb-3 bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm">
                <Image
                  src={figure.image}
                  alt={figure.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-0.5">
                  {figure.title}
                </span>
                <span className="text-sm font-bold text-primary-navy dark:text-white group-hover:text-accent-blue transition-colors text-center">
                  {figure.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
