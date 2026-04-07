"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    title: "डॉ. आंबेडकर जयंती महोत्सव",
    date: "14 एप्रिल 2025",
    location: "मुख्य चौक, गाव",
    tag: "आगामी",
    icon: "☸️",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "रक्तदान शिबिर",
    date: "मार्च 2025",
    location: "समाज मंदिर",
    tag: "पूर्ण झाले",
    icon: "🩸",
    gradient: "from-red-500 to-rose-600",
  },
  {
    title: "शैक्षणिक मेळावा",
    date: "जानेवारी 2025",
    location: "बुद्ध विहार",
    tag: "पूर्ण झाले",
    icon: "📖",
    gradient: "from-teal-500 to-emerald-600",
  },
];

export const EventsSection = () => {
  return (
    <section id="events" className="section-padding bg-slate-50 dark:bg-white/[0.02]">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue font-bold text-xs tracking-widest uppercase mb-4"
        >
          कार्यक्रम
        </motion.div>
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-6"
        >
          आगामी व मागील <span className="text-accent-blue">कार्यक्रम</span>
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-foreground/60 max-w-2xl mx-auto text-lg"
        >
          मंडळाच्या वतीने राबवले जाणारे सामाजिक, शैक्षणिक आणि सांस्कृतिक उपक्रम.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-500"
          >
            {/* Header / Icon Area */}
            <div className={cn("h-40 flex items-center justify-center text-7xl bg-gradient-to-br", event.gradient)}>
               <span className="group-hover:scale-110 transition-transform duration-500">{event.icon}</span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                  event.tag === "आगामी" ? "bg-accent-blue/10 text-accent-blue" : "bg-slate-100 text-slate-500"
                )}>
                  {event.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-4 group-hover:text-accent-blue transition-colors">
                {event.title}
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-foreground/60 text-sm">
                  <Calendar size={16} className="text-accent-blue" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-foreground/60 text-sm">
                  <MapPin size={16} className="text-accent-blue" />
                  {event.location}
                </div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-accent-blue hover:text-white transition-all font-bold text-sm flex items-center justify-center gap-2 group/btn">
                तपशील पहा
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
         <button className="text-accent-blue font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
            सर्व कार्यक्रम पहा <ArrowRight size={20} />
         </button>
      </div>
    </section>
  );
};
