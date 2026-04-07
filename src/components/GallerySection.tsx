"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2, Image as ImageIcon } from "lucide-react";

const galleryItems = [
  { title: "आंबेडकर जयंती", icon: "☸️", color: "bg-blue-600" },
  { title: "रक्तदान शिबिर", icon: "🩸", color: "bg-red-500" },
  { title: "शैक्षणिक मेळावा", icon: "📖", color: "bg-teal-500" },
  { title: "सांस्कृतिक कार्यक्रम", icon: "🎭", color: "bg-amber-500" },
  { title: "धम्म कार्यक्रम", icon: "🌸", color: "bg-purple-500" },
  { title: "सामाजिक उपक्रम", icon: "🤝", color: "bg-emerald-600" },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-slate-50 dark:bg-white/[0.02]">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-16 h-16 bg-accent-blue/10 text-accent-blue rounded-2xl flex items-center justify-center mb-6"
        >
           <ImageIcon size={32} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-6"
        >
          फोटो <span className="text-accent-blue">गॅलरी</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 max-w-xl text-lg"
        >
          आमच्या उपक्रमांचे आणि अविस्मरणीय क्षणांचे काही फोटो.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer"
          >
            {/* Background Gradient/Placeholder */}
            <div className={`absolute inset-0 ${item.color} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
            
            {/* Content Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:scale-125 transition-transform duration-700">
               {item.icon}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 className="flex justify-between items-end"
               >
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                    <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">पाहण्यासाठी क्लिक करा</span>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                    <Maximize2 size={20} />
                  </div>
               </motion.div>
            </div>
            
            <div className="absolute inset-0 border-8 border-white/5 rounded-[2.5rem] pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
         <button className="px-8 py-4 rounded-2xl border-2 border-accent-blue/20 text-accent-blue font-bold hover:bg-accent-blue hover:text-white transition-all">
            संपूर्ण गॅलरी पहा
         </button>
      </div>
    </section>
  );
};
