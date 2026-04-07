"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue font-bold text-xs tracking-widest uppercase mb-4">
            संपर्क
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-6">
            आमच्याशी <span className="text-accent-blue">संपर्क साधा</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-10">
            कोणतीही माहिती, सहकार्य किंवा मंडळाच्या कामाबद्दल जाणून घेण्यासाठी आम्हाला संपर्क करा.
          </p>

          <div className="space-y-6">
            {[
              { icon: <MapPin />, label: "पत्ता", info: "दहिवली तर्फे वरेडी,कर्जत, रायगड, महाराष्ट्र" },
              { icon: <Phone />, label: "फोन", info: "+91 8793385144" },
              { icon: <Mail />, label: "ईमेल", info: "btmm@email.com" },
              { icon: <Clock />, label: "वेळ", info: "सकाळी ९ ते संध्याकाळी ६" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-accent-blue/30 transition-all"
              >
                <div className="w-12 h-12 bg-accent-blue/10 text-accent-blue rounded-2xl flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all shadow-lg group-hover:shadow-accent-blue/20">
                  {item.icon}
                </div>
                <div>
                   <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">{item.label}</div>
                   <div className="font-bold text-primary-navy dark:text-white">{item.info}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
           <div className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none relative z-10">
              <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-8">संदेश पाठवा</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">नाव</label>
                       <input type="text" placeholder="पूर्ण नाव" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">मोबाईल</label>
                       <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">विषय</label>
                    <input type="text" placeholder="संदेशाचा विषय" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">संदेश</label>
                    <textarea rows={4} placeholder="तुमचा संदेश इथे लिहा..." className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all resize-none"></textarea>
                 </div>
                 <button className="w-full py-5 bg-gradient-to-r from-primary-navy to-accent-blue text-white font-bold rounded-2xl shadow-xl shadow-accent-blue/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                    संदेश पाठवा
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </form>
           </div>
           
           {/* Decorative dots grid */}
           <div className="absolute -top-10 -right-10 w-40 h-40 grid grid-cols-5 gap-4 opacity-10">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-primary-navy rounded-full" />
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};
