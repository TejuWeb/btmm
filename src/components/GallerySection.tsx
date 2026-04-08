"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  { title: "आंबेडकर जयंती", image: "https://images.unsplash.com/photo-1590059345003-887413550884?q=80&w=2070&auto=format&fit=crop", color: "bg-blue-600" },
  { title: "रक्तदान शिबिर", image: "https://images.unsplash.com/photo-1536856789559-1cb4942aae3c?q=80&w=2070&auto=format&fit=crop", color: "bg-red-500" },
  { title: "शैक्षणिक मेळावा", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", color: "bg-teal-500" },
  { title: "सांस्कृतिक कार्यक्रम", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", color: "bg-amber-500" },
  { title: "धम्म कार्यक्रम", image: "https://images.unsplash.com/photo-1588652136009-847e3a985558?q=80&w=1974&auto=format&fit=crop", color: "bg-purple-500" },
  { title: "सामाजिक उपक्रम", image: "https://images.unsplash.com/photo-1559027615-cd946440db7f?q=80&w=2074&auto=format&fit=crop", color: "bg-emerald-600" },
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
            {/* Background Image */}
            <div className="absolute inset-0">
               <Image 
                 src={item.image} 
                 alt={item.title}
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700" 
               />
            </div>
            
            <div className={`absolute inset-0 ${item.color} opacity-20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700`} />

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
