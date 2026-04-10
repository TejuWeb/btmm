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
  const [selectedEvent, setSelectedEvent] = React.useState<typeof events[0] | null>(null);

  return (
    <section id="events" className="section-padding bg-slate-50 dark:bg-white/[0.02]">
      {/* Modal Backdrop */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cn("h-64 flex items-center justify-center text-8xl bg-gradient-to-br relative", selectedEvent.gradient)}>
               <span>{selectedEvent.icon}</span>
               <button 
                 onClick={() => setSelectedEvent(null)}
                 className="absolute top-6 right-6 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
               >
                 ✕
               </button>
            </div>
            <div className="p-8 md:p-12">
               <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-4">
                 कार्यक्रम पत्रिका
               </span>
               <h3 className="text-3xl font-extrabold text-primary-navy dark:text-white mb-6">
                 {selectedEvent.title}
               </h3>
               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-foreground/60 dark:text-slate-300">
                      <Calendar size={20} className="text-accent-blue" />
                      <span className="font-bold">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/60 dark:text-slate-300">
                      <MapPin size={20} className="text-accent-blue" />
                      <span className="font-bold">{selectedEvent.location}</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center p-4 text-center">
                     <p className="text-xs text-foreground/40 font-bold uppercase">येथे कार्यक्रमाचा फोटो असेल</p>
                  </div>
               </div>
               <p className="text-foreground/60 dark:text-slate-400 leading-relaxed mb-8">
                 आमच्या या कार्यक्रमात सहभागी होऊन सहकार्य करावे ही नम्र विनंती. कार्यक्रमाची सविस्तर रूपरेषा लवकरच जाहीर केली जाईल.
               </p>
               <button 
                 onClick={() => setSelectedEvent(null)}
                 className="w-full py-4 rounded-2xl bg-primary-navy text-white font-bold"
               >
                 बंद करा
               </button>
            </div>
          </motion.div>
        </div>
      )}

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
           className="text-foreground/60 dark:text-slate-400 max-w-2xl mx-auto text-lg"
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
                <div className="flex items-center gap-2 text-foreground/60 dark:text-slate-400 text-sm">
                  <Calendar size={16} className="text-accent-blue" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-foreground/60 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-accent-blue" />
                  {event.location}
                </div>
              </div>

              <button 
                onClick={() => setSelectedEvent(event)}
                className="w-full py-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-accent-blue hover:text-white transition-all font-bold text-sm flex items-center justify-center gap-2 group/btn"
              >
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
