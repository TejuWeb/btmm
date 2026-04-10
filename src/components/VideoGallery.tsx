"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const videos = [
  {
    title: "संयुक्त जयंती महोत्सव 2025 - विशेष झलक",
    id: "dQw4w9WgXcQ", // Example placeholder
    thumbnail: "https://youtu.be/56B827-PyAs?si=lPatqHIBnVB6MK4L",
  }
];

export const VideoGallery = () => {
  return (
    <section id="videos" className="section-padding bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6"
        >
          <Youtube size={32} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-6"
        >
          व्हिडिओ <span className="text-red-500">गॅलरी</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 max-w-xl text-lg"
        >
          आमच्या कार्यक्रमांचे खास क्षण व्हिडिओ स्वरूपात पहा.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200 dark:shadow-none bg-slate-100 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>
              <a
                href={`https://youtu.be/56B827-PyAs?si=lPatqHIBnVB6MK4L${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-primary-navy dark:text-white group-hover:text-red-500 transition-colors line-clamp-2">
              {video.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
