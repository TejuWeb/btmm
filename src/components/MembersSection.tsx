"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award } from "lucide-react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  initial: string;
  color: string;
  image?: string;
  imagePosition?: string;
}

const members: Member[] = [
  {
    name: "तेजस गायकवाड",
    role: "अध्यक्ष (President)",
    initial: "अ",
    color: "from-blue-600 to-indigo-600",
    image: "/images/tejas.jpeg"
  },
  {
    name: "रोशन गायकवाड",
    role: "उपाध्यक्ष (Vice President)",
    initial: "उ अ ",
    color: "from-amber-500 to-orange-600",
    image: "/images/roshan.jpeg"
  },
  {
    name: "मयुर गायकवाड",
    role: "खजिनदार(Treasurer)",
    initial: "ख",
    color: "from-teal-500 to-emerald-600",
    image: "/images/mayur.jpeg"
  },
  //{ name: "Placeholder Name", role: "सचिव  (Secretary)", initial: "स", color: "from-rose-500 to-pink-600" },
  //{ name: "Placeholder Name", role: "कार्यकारिणी सदस्य", initial: "म", color: "from-purple-500 to-violet-600" },
  //{ name: "Placeholder Name", role: "कार्यकारिणी सदस्य", initial: "म", color: "from-slate-500 to-gray-600" },
];

export const MembersSection = () => {
  return (
    <section id="members" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue font-bold text-xs tracking-widest uppercase mb-4"
          >
            कार्यकारिणी
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white"
          >
            आमचे <span className="text-accent-blue">मार्गदर्शक व कार्यकर्ते</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg hidden md:block"
        >
          मंडळाचे नियोजन आणि व्यवस्थापन पाहणारी महत्त्वाची पदे.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10 }}
            className="group rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all"
          >
            <div className={`relative aspect-[4/5] bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-5xl font-bold font-heading overflow-hidden border-b border-slate-100 dark:border-white/5`}>
              {member.image ? (
                <>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    loading={i < 4 ? "eager" : "lazy"}
                    priority={i < 4}
                    className={`object-cover ${member.imagePosition || "object-top"} group-hover:scale-110 transition-transform duration-700`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle Inner Highlight */}
                  <div className="absolute inset-0 border-[8px] border-white/5 pointer-events-none" />
                </>
              ) : (
                <span className="group-hover:scale-110 transition-transform duration-500">{member.initial}</span>
              )}

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 text-center">
              <h4 className="font-bold text-lg text-primary-navy dark:text-white mb-1 group-hover:text-accent-blue transition-colors">
                {member.name}
              </h4>
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-4">
                {member.role}
              </div>
              <div className="flex justify-center gap-2">
                <div className="p-2.5 bg-slate-50 dark:bg-white/5 rounded-xl text-foreground/30 hover:text-accent-blue hover:bg-accent-blue/10 hover:shadow-lg hover:shadow-accent-blue/10 transition-all">
                  <Shield size={16} />
                </div>
                <div className="p-2.5 bg-slate-50 dark:bg-white/5 rounded-xl text-foreground/30 hover:text-accent-blue hover:bg-accent-blue/10 hover:shadow-lg hover:shadow-accent-blue/10 transition-all">
                  <Award size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-[3rem] bg-gradient-to-r from-primary-navy to-accent-blue text-white flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl">
            🤝
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">तुम्हीही सामील होऊ शकता!</h3>
            <p className="text-white/70">मंडळाचे सभासद होण्यासाठी आजच अर्ज करा.</p>
          </div>
        </div>
        <button className="px-10 py-4 bg-white text-primary-navy font-bold rounded-2xl shadow-xl hover:bg-gold hover:text-white transition-all">
          सभासद नोंदणी करा
        </button>
      </motion.div>
    </section>
  );
};
