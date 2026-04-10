"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Heart, Copy, Check, QrCode, ArrowRight } from "lucide-react";

const UPI_ID = "tejas.gaikwad@upi"; // Placeholder UPI ID
const MERCHANT_NAME = "Bauddha Tarun Mitra Mandal";

export const DonationSection = () => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // UPI URL Format: upi://pay?pa=address&pn=name&am=amount&cu=currency
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&cu=INR`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 dark:bg-accent-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 font-bold text-xs tracking-widest uppercase mb-6">
              <Heart size={14} fill="currentColor" />
              मदत आणि योगदान
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-6 leading-tight">
              समाजासाठी तुमचे <span className="text-red-500">छोटे पाऊल</span>, <br />
              मोठा बदल घडवू शकते!
            </h2>
            <p className="text-foreground/70 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              आमच्या सामाजिक कार्यात आणि गाव विकासाच्या उपक्रमात तुम्ही आर्थिक मदत करून सहभागी होऊ शकता. तुमचे हे योगदान गरजू विद्यार्थ्यांचे शिक्षण, आरोग्य शिबिरे आणि धम्म प्रसारासाठी वापरले जाईल.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "पारदर्शक आर्थिक व्यवहार",
                "सामाजिक कार्यासाठी विनियोग",
                "डिजिटल पेमेंटची सुविधा",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-primary-navy dark:text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowQR(!showQR)}
              className="px-8 py-4 bg-primary-navy text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:bg-accent-blue transition-all group"
            >
              आताच मदत करा
              {showQR ? <ArrowRight className="rotate-90 transition-transform" /> : <QrCode size={20} />}
            </button>
          </motion.div>

          {/* QR Code Card Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-red-500 to-accent-blue rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center">
                
                {/* QR Section */}
                <div className="bg-white p-4 rounded-3xl shadow-inner border border-slate-100 mb-8 relative">
                   <QRCodeSVG 
                      value={upiUrl} 
                      size={200} 
                      level="H"
                      includeMargin={false}
                      className="transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-white/80 rounded-3xl cursor-pointer">
                        <span className="text-primary-navy font-bold text-sm">स्कॅन करा</span>
                    </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="font-heading font-bold text-xl text-primary-navy dark:text-white mb-2">स्कॅन करून मदत करा</h3>
                  <p className="text-xs text-foreground/40 dark:text-slate-400 uppercase tracking-widest font-bold">UPI Payment Supported</p>
                </div>

                {/* UPI ID Copy Field */}
                <div className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-foreground/40 dark:text-slate-500 font-bold uppercase mb-0.5">UPI ID</p>
                    <p className="text-sm font-bold text-primary-navy dark:text-white truncate">{UPI_ID}</p>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2.5 rounded-xl bg-white dark:bg-white/10 text-primary-navy dark:text-white shadow-sm hover:scale-110 active:scale-95 transition-all"
                  >
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
                
                <div className="mt-8 flex gap-4 grayscale opacity-40">
                  <span className="text-xs font-bold">PhonePe</span>
                  <span className="text-xs font-bold">Google Pay</span>
                  <span className="text-xs font-bold">Paytm</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
