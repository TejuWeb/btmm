"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  IndianRupee, 
  Calendar, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Search,
  LayoutDashboard,
  Settings,
  Bell,
  LogOut
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f8faff] dark:bg-[#0a0e1a] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-white/5 border-r border-slate-100 dark:border-white/10 hidden lg:flex flex-col">
        <Link href="/" className="p-8 border-b border-slate-100 dark:border-white/10 block group">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden transition-transform group-hover:rotate-12">
               <Image 
                 src="/images/logo.png" 
                 alt="BTMM Logo" 
                 fill 
                 className="object-contain"
               />
            </div>
            <span className="font-heading font-bold dark:text-white">BTMM Admin</span>
          </div>
        </Link>
        <nav className="flex-grow p-6 space-y-2">
          {[
            { icon: <LayoutDashboard size={18} />, label: "डॅशबोर्ड", active: true },
            { icon: <Users size={18} />, label: "सदस्य व्यवस्थापन" },
            { icon: <Calendar size={18} />, label: "कार्यक्रम" },
            { icon: <IndianRupee size={18} />, label: "जमा-खर्च" },
            { icon: <Settings size={18} />, label: "सेटिंग्ज" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                item.active 
                  ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/20" 
                  : "text-foreground/60 hover:bg-slate-50 dark:hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span className="font-semibold text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="p-6 border-t border-slate-100 dark:border-white/10">
          <button className="flex items-center gap-3 text-red-500 font-bold text-sm hover:translate-x-1 transition-transform">
            <LogOut size={18} />
            लॉगआउट
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-primary-navy dark:text-white mb-1">मुख्य डॅशबोर्ड</h1>
            <p className="text-foreground/50 text-sm">BTMM व्यवस्थापन — स्वागत आहे, ॲडमिन!</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white dark:bg-white/5 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-white/10 hidden md:flex items-center gap-2">
              <Search size={18} className="text-foreground/30" />
              <input type="text" placeholder="शोधा..." className="bg-transparent border-none outline-none text-sm w-40" />
            </div>
            <button className="bg-white dark:bg-white/5 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-white/10 relative">
              <Bell size={20} className="text-foreground/60" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "एकूण सदस्य", value: "152", change: "+8 या महिन्यात", icon: <Users />, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "जमा रक्कम", value: "₹48,500", change: "+₹3,200 वाढ", icon: <IndianRupee />, color: "text-green-600", bg: "bg-green-50" },
            { label: "आगामी कार्यक्रम", value: "3", change: "पुढील 30 दिवसांत", icon: <Calendar />, color: "text-amber-600", bg: "bg-amber-50" },
            { label: "वर्गणी थकीत", value: "18", change: "Action Required", icon: <AlertCircle />, color: "text-red-600", bg: "bg-red-50" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white/5 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${stat.bg} dark:bg-white/10 ${stat.color} rounded-2xl flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="flex items-center text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} />
                  12%
                </div>
              </div>
              <div className="text-foreground/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-3xl font-extrabold text-primary-navy dark:text-white mb-2">{stat.value}</div>
              <div className="text-xs font-medium text-foreground/40">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Panels */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Table Panel */}
          <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-white/10">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold dark:text-white">नवीन सदस्य</h3>
                <button className="text-accent-blue text-sm font-bold">सर्व पहा →</button>
             </div>
             <table className="w-full text-left">
                <thead>
                   <tr className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest border-b border-slate-50 dark:border-white/5">
                      <th className="pb-4">नाव</th>
                      <th className="pb-4">दिनांक</th>
                      <th className="pb-4 text-right">स्थिती</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                   {[
                      { name: "राहुल कांबळे", date: "25 मार्च", status: "सक्रिय", color: "text-green-500" },
                      { name: "प्रिया गायकवाड", date: "22 मार्च", status: "सक्रिय", color: "text-green-500" },
                      { name: "अमोल वाघमारे", date: "18 मार्च", status: "प्रलंबित", color: "text-amber-500" },
                      { name: "सुनीता भोसले", date: "15 मार्च", status: "सक्रिय", color: "text-green-500" },
                   ].map((row, i) => (
                      <tr key={i} className="group">
                         <td className="py-4 font-bold text-sm group-hover:text-accent-blue transition-colors">{row.name}</td>
                         <td className="py-4 text-sm text-foreground/50">{row.date}</td>
                         <td className={`py-4 text-right text-xs font-bold ${row.color}`}>{row.status}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-primary-navy to-accent-blue rounded-[2.5rem] p-8 text-white shadow-xl shadow-accent-blue/20">
             <h3 className="text-xl font-bold mb-8">त्वरित कृती</h3>
             <div className="grid grid-cols-2 gap-4">
                {[
                   { icon: <Plus size={18} />, label: "नवीन सदस्य" },
                   { icon: <Calendar size={18} />, label: "कार्यक्रम जोडा" },
                   { icon: <IndianRupee size={18} />, label: "व्यवहार नोंदवा" },
                   { icon: <Bell size={18} />, label: "सूचना पाठवा" },
                ].map((action, i) => (
                   <button key={i} className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-5 rounded-2xl flex flex-col items-center gap-3 transition-all group">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">{action.icon}</div>
                      <span className="text-xs font-bold uppercase tracking-wider">{action.label}</span>
                   </button>
                ))}
             </div>
             <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-sm font-bold mb-2">सिस्टम अपडेट</div>
                <div className="text-xs text-white/50 leading-relaxed">
                   BTMM पोर्टल व्हर्जन ४.० आता उपलब्ध आहे. नवीन गॅलरी व्यवस्थापन फीचर वापरून पहा.
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
