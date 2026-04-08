"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-[#0a0e1a]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-white/5 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/10 text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white mb-4">अभिनंदन!</h2>
          <p className="text-foreground/60 leading-relaxed mb-8">
            तुमचा सभासद अर्ज यशस्वीरित्या प्राप्त झाला आहे. मंडळाच्या वतीने लवकरच तुमच्याशी संपर्क साधला जाईल.
          </p>
          <Link href="/">
            <button className="w-full py-4 rounded-2xl bg-primary-navy text-white font-bold hover:bg-accent-blue transition-colors">
              मुख्यपृष्ठावर जा
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0e1a] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/40 hover:text-accent-blue transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>परत जा</span>
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-4">
            सभासद <span className="text-accent-blue">नोंदणी</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            बौद्ध तरुण मित्र मंडळाचे सभासद होण्यासाठी खालील माहिती अचूक भरा.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">पूर्ण नाव</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={20} />
                <input 
                  required
                  type="text" 
                  placeholder="उदा. राहुल उत्तम कांबळे" 
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">मोबाईल नंबर</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={20} />
                <input 
                  required
                  type="tel" 
                  placeholder="उदा. 9876543210" 
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">पत्ता</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-foreground/30" size={20} />
                <textarea 
                  required
                  rows={4}
                  placeholder="तुमचा सविस्तर पत्ता लिहा..." 
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full py-5 bg-primary-navy text-white font-bold rounded-2xl shadow-xl shadow-primary-navy/20 hover:bg-accent-blue transition-all active:scale-[0.98]"
              >
                अर्ज सादर करा
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
