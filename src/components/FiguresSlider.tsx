"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const figures = [
  { 
    name: "तथागत गौतम बुद्ध", 
    title: "शांतीदूत", 
    image: "/images/buddha.png",
    color: "from-amber-400 to-orange-600"
  },
  { 
    name: "छत्रपती शिवाजी महाराज", 
    title: "रयत प्रतिपालक", 
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2064",
    color: "from-orange-500 to-red-700"
  },
  { 
    name: "महात्मा जोतिबा फुले", 
    title: "क्रांतिसूर्य", 
    image: "/images/mahapurush/phule.png",
    color: "from-red-500 to-rose-700"
  },
  { 
    name: "राजर्षी शाहू महाराज", 
    title: "आरक्षण जनक", 
    image: "/images/mahapurush/shahu.png",
    color: "from-blue-500 to-indigo-700"
  },
  { 
    name: "डॉ. बाबासाहेब आंबेडकर", 
    title: "भारतीय राज्यघटनेचे शिल्पकार", 
    image: "/images/ambedkar.png",
    color: "from-indigo-600 to-blue-800"
  },
  { 
    name: "राष्ट्रसंत गाडगे बाबा", 
    title: "स्वच्छतादूत", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070",
    color: "from-slate-400 to-slate-600"
  },
  { 
    name: "क्रांतिज्योति सावित्रीबाई फुले", 
    title: "स्त्री शिक्षणाच्या जननी", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2074",
    color: "from-pink-500 to-purple-700"
  },
  { 
    name: "राजमाता जिजाऊ", 
    title: "स्वराज्य प्रेरणा", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070",
    color: "from-amber-600 to-yellow-800"
  },
  { 
    name: "त्यागमूर्ती माता रमाई", 
    title: "सावली", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    color: "from-gray-500 to-gray-700"
  },
  { 
    name: "लोकशाहीर अण्णाभाऊ साठे", 
    title: "साहित्यरत्न", 
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=1974",
    color: "from-emerald-500 to-teal-700"
  },
];

export const FiguresSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % figures.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + figures.length) % figures.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-900 mt-20 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${figures[currentIndex].color} opacity-40`} />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-48 h-64 md:w-64 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0"
            >
              <Image
                src={figures[currentIndex].image}
                alt={figures[currentIndex].name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4"
              >
                {figures[currentIndex].title}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-black mb-6 leading-tight font-heading drop-shadow-lg"
              >
                {figures[currentIndex].name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
              >
                त्यांच्या विचारांना सन्मान देऊन आपण एक आदर्श समाज घडवूया. प्रज्ञा, शील आणि करुणेचा संदेश घरोघरी पोहोचवूया.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {figures.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-gold w-8" : "bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
