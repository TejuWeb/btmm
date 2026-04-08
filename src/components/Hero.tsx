"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      {/* Ashok Chakra Pattern (Mocked) */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x2 = (50 + 45 * Math.cos(angle)).toFixed(6);
            const y2 = (50 + 45 * Math.sin(angle)).toFixed(6);
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold font-bold text-xs tracking-widest uppercase mb-6"
          >
            <Star size={12} fill="currentColor" />
            समाज • सेवा • संघर्ष
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-primary-navy dark:text-white">बौद्ध तरुण</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-accent-blue to-accent-blue font-heading">
              मित्र मंडळ
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-10 leading-relaxed">
            डॉ. बाबासाहेब आंबेडकर आणि तथागत गौतम बुद्ध यांच्या विचारांनी प्रेरित होऊन गावाच्या सर्वांगीण विकासासाठी अथकपणे कार्यरत संघटन.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-navy text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary-navy/20 hover:bg-accent-blue transition-colors group"
            >
              कार्यक्रम पहा
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl font-bold border-2 border-primary-navy/10 hover:border-primary-navy transition-all flex items-center justify-center"
            >
              आमच्याबद्दल अधिक
            </motion.button>
          </div>

          <div className="mt-12 inline-flex flex-wrap gap-8 items-center bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-sm">
            <div>
              <div className="text-2xl font-bold text-primary-navy dark:text-white">150+</div>
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">सक्रिय सदस्य</div>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-primary-navy dark:text-white">12</div>
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">वार्षिक कार्यक्रम</div>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-accent-blue">8+</div>
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">वर्षांचा अनुभव</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-accent-blue/20 bg-gradient-to-tr from-primary-navy to-accent-blue group">
             {/* Lord Buddha Image */}
             <div className="absolute inset-0">
                <Image 
                  src="/images/buddha.png" 
                  alt="Tathagat Gautam Buddha" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out opacity-80"
                />
             </div>
             {/* Overlay pattern */}
             <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
             <div className="absolute bottom-10 left-10 p-8 glass-dark rounded-3xl max-w-[280px] z-10">
                <h3 className="text-white font-bold text-xl mb-2">जय भीम! 🙏</h3>
                <p className="text-white/70 text-sm">समाज परिवर्तनासाठी कटिबद्ध तरुणांचे संघटन.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
