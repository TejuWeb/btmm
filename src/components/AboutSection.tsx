"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Droplets, Heart, Users } from "lucide-react";
import Image from "next/image";

const pillars = [
  { icon: <BookOpen />, title: "शिक्षण", desc: "शिष्यवृत्ती व करिअर मार्गदर्शन मेळावे.", color: "bg-blue-500" },
  { icon: <Droplets />, title: "रक्तदान", desc: "वार्षिक रक्तदान शिबिर व आरोग्य तपासणी.", color: "bg-red-500" },
  { icon: <Heart />, title: "धम्म", desc: "बुद्ध जयंती व धम्म संस्कार कार्यक्रम.", color: "bg-gold" },
  { icon: <Users />, title: "एकता", desc: "गाव विकास आणि समाज बांधणी उपक्रम.", color: "bg-teal-600" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue font-bold text-xs tracking-widest uppercase mb-4">
            आमची ओळख
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-6 leading-tight">
            बौद्ध तरुण मित्र मंडळ: <br />
            <span className="text-accent-blue">स्वाभिमान आणि समाजसेवा</span>
          </h2>
          <p className="text-foreground/70 dark:text-slate-300 text-lg mb-8 leading-relaxed">
            आम्ही गावातील तरुणांनी एकत्र येऊन स्थापन केलेले एक सेवाभावी संघटन आहोत. डॉ. बाबासाहेब आंबेडकरांच्या "शिका, संघटित व्हा आणि संघर्ष करा" या महामंत्राला अनुसरून आम्ही शैक्षणिक, सामाजिक आणि सांस्कृतिक क्षेत्रात कार्य करतो.
          </p>
          <p className="text-foreground/70 dark:text-slate-300 text-lg mb-10 leading-relaxed">
            केवळ उत्सव साजरे करणे हा आमचा उद्देश नसून, समाजातील शेवटच्या घटकापर्यंत प्रगतीची दारे उघडणे हे आमचे ध्येय आहे.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl hover:shadow-accent-blue/5 transition-all"
              >
                <div className={`w-12 h-12 ${pillar.color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary-navy dark:text-white uppercase tracking-tight">{pillar.title}</h4>
                <p className="text-sm text-foreground/60 dark:text-slate-400">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group bg-primary-navy">
            <Image
              src="/images/ambedkar.png"
              alt="Dr. Babasaheb Ambedkar"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[3000ms] ease-out opacity-90"
            />
            {/* Text Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/20 to-transparent flex items-end p-12">
              <div className="text-left">
                <span className="text-4xl block mb-4 opacity-40 grayscale brightness-0 invert">☸️</span>
                <p className="text-white text-2xl font-bold leading-relaxed mb-4">"शिका, संघटित व्हा आणि संघर्ष करा".</p>
              </div>
            </div>
            <div className="absolute inset-0 border-[16px] border-white/10 rounded-[3rem] pointer-events-none" />
          </div>
          {/* Floating glass card */}
          <div className="absolute -bottom-10 -left-10 p-8 glass rounded-[2.5rem] shadow-2xl max-w-[240px] hidden md:block">
            <div className="text-4xl font-bold text-accent-blue mb-1">26+</div>
            <p className="text-sm font-semibold text-primary-navy dark:text-indigo-900 opacity-80 uppercase tracking-widest">यशाची वर्षे</p>
            <div className="mt-4 flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200" />
              ))}
              <div className="w-10 h-10 rounded-full border-4 border-white bg-accent-blue text-white flex items-center justify-center text-[10px] font-bold">+150</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
