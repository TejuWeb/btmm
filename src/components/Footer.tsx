"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(12842); // Base starting count

  useEffect(() => {
    // Increment global visitor count
    const fetchCount = async () => {
      try {
        const response = await fetch("https://api.counterapi.dev/v1/btmm-portal/visits/up");
        const data = await response.json();
        if (data.count) {
          setVisitorCount(data.count + 24800); // Adding base to reflect existing traffic
        }
      } catch (error) {
        console.error("Counter failed:", error);
      }
    };
    fetchCount();
  }, []);
  return (
    <footer className="bg-primary-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden">
              <Image 
                src="/images/logo.png" 
                alt="BTMM Logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none group-hover:text-gold transition-colors">
                बौद्ध तरुण मित्र मंडळ
              </span>
              <span className="text-[10px] opacity-60 uppercase tracking-wider">
                Bauddha Tarun Mitra Mandal
              </span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            समाज, सेवा आणि संघर्षासाठी समर्पित तरुणांची एकजुट. डॉ. बाबासाहेब आंबेडकरांच्या विचारांचे जतन आणि प्रसार.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">त्वरित दुवे</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#home" className="hover:text-gold transition-colors">मुख्यपृष्ठ</a></li>
            <li><a href="#about" className="hover:text-gold transition-colors">आमच्याबद्दल</a></li>
            <li><a href="#events" className="hover:text-gold transition-colors">कार्यक्रम</a></li>
            <li><a href="#gallery" className="hover:text-gold transition-colors">फोटो गॅलरी</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">संपर्क</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">उपक्रम</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-gold transition-colors">शैक्षणिक मार्गदर्शन</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">रक्तदान शिबिर</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">धम्म प्रसार कार्यक्रम</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">सामाजिक मदत कार्य</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">सांस्कृतिक महोत्सव</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="font-heading font-bold text-lg mb-6">संपर्क साधा</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold flex-shrink-0" />
              <span>गाव-दहिवली, तालुका-कर्जत, जिल्हा-रायगड, महाराष्ट्र</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold flex-shrink-0" />
              <span>+91 8793385144</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold flex-shrink-0" />
              <span>btmm@email.com</span>
            </li>
          </ul>

          {/* Visitor Counter */}
          <div className="pt-6 border-t border-white/5">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10 shadow-inner">
              <div className="p-1.5 bg-gold/20 rounded-lg">
                <Eye size={16} className="text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase tracking-tight">Website Visits</span>
                <span className="text-base font-bold font-heading text-white tabular-nums">
                  {visitorCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-[13px]">
          © 2026 बौद्ध तरुण मित्र मंडळ | सर्व हक्क राखीव.
        </p>
        <div className="flex flex-col md:flex-row gap-6 text-[13px] text-white/40 items-center">
          <p>नमो बुद्धाय ☸️ | जय भीम 🙏</p>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <p className="flex items-center gap-1.5">
            Developed by <span className="text-white/70 font-bold hover:text-gold transition-colors cursor-pointer">Tejas Gaikwad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
