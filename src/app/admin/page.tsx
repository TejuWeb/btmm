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
  Search,
  LayoutDashboard,
  Settings,
  Bell,
  LogOut
} from "lucide-react";
import { dataStore, Registration, Message } from "@/lib/data-store";

export default function AdminDashboard() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [registrations, setRegistrations] = React.useState<Registration[]>([]);
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Fetch data
    setRegistrations(dataStore.getRegistrations());
    setMessages(dataStore.getMessages());

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#f8faff] dark:bg-[#0a0e1a] flex items-center justify-center p-6 text-center">
        <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/10 max-w-sm">
          <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">मोबाईल व्ह्यू उपलब्ध नाही</h2>
          <p className="text-foreground/50 leading-relaxed mb-8">
            ॲडमिन पॅनेल सुरक्षितता आणि उत्तम अनुभवासाठी कृपया डेस्कटॉप किंवा लॅपटॉपवरून लॉगिन करा.
          </p>
          <Link href="/">
            <button className="w-full py-4 rounded-2xl bg-primary-navy text-white font-bold">
              मुख्यपृष्ठावर जा
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "एकूण सदस्य", value: (152 + registrations.length).toString(), change: `+${registrations.length} नवीन`, icon: <Users />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "जमा रक्कम", value: "₹48,500", change: "+₹3,200 वाढ", icon: <IndianRupee />, color: "text-green-600", bg: "bg-green-50" },
    { label: "आगामी कार्यक्रम", value: "3", change: "पुढील 30 दिवसांत", icon: <Calendar />, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "नवीन संदेश", value: messages.filter(m => !m.isRead).length.toString(), change: "तपासणी आवश्यक", icon: <Bell />, color: "text-red-600", bg: "bg-red-50" },
  ];

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
          <Link href="/">
            <button className="flex items-center gap-3 text-red-500 font-bold text-sm hover:translate-x-1 transition-transform">
              <LogOut size={18} />
              लॉगआउट
            </button>
          </Link>
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
              {messages.some(m => !m.isRead) && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black" />
              )}
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
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
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Members Table Panel */}
          <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-white/10">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold dark:text-white">नवीन सभासद नोंदणी (Live)</h3>
                <Link href="/members-list" className="text-accent-blue text-sm font-bold underline">वेबसाइटवर पहा →</Link>
             </div>
             {registrations.length === 0 ? (
               <div className="py-12 text-center text-foreground/30">अद्याप नवीन नोंदणी नाही.</div>
             ) : (
               <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                      <tr className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest border-b border-slate-50 dark:border-white/5">
                          <th className="pb-4">नाव</th>
                          <th className="pb-4">फोन</th>
                          <th className="pb-4">पत्ता</th>
                          <th className="pb-4">दिनांक</th>
                          <th className="pb-4 text-right">स्थिती</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                      {registrations.map((row, i) => (
                          <tr key={i} className="group">
                            <td className="py-4 font-bold text-sm group-hover:text-accent-blue transition-colors">
                              {row.name}
                            </td>
                            <td className="py-4 text-sm text-foreground/50">{row.phone}</td>
                            <td className="py-4 text-sm text-foreground/50 truncate max-w-[200px]">{row.address}</td>
                            <td className="py-4 text-sm text-foreground/50">{row.date}</td>
                            <td className={`py-4 text-right text-xs font-bold ${row.status === 'pending' ? 'text-amber-500' : 'text-green-500'}`}>
                              {row.status === 'pending' ? 'प्रलंबित' : 'सक्षम'}
                            </td>
                          </tr>
                      ))}
                    </tbody>
                </table>
               </div>
             )}
          </div>

          {/* Messages Panel */}
          <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-white/10">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold dark:text-white">संपर्क संदेश (Live)</h3>
             </div>
             {messages.length === 0 ? (
               <div className="py-12 text-center text-foreground/30">अद्याप कोणतेही संदेश नाहीत.</div>
             ) : (
               <div className="grid gap-4">
                  {messages.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`p-6 rounded-2xl border ${msg.isRead ? 'border-slate-100 dark:border-white/5' : 'border-accent-blue/30 bg-accent-blue/5'} transition-all`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-primary-navy dark:text-white">{msg.name}</div>
                        <div className="text-[10px] text-foreground/40 font-bold uppercase">{msg.date}</div>
                      </div>
                      <div className="text-xs font-bold text-accent-blue mb-2">{msg.subject}</div>
                      <p className="text-sm text-foreground/70 dark:text-slate-300 leading-relaxed mb-4">{msg.message}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-foreground/40 italic">फोन: {msg.phone}</span>
                        {!msg.isRead && (
                          <button 
                            onClick={() => {
                              dataStore.markMessageAsRead(msg.id);
                              setMessages(dataStore.getMessages());
                            }}
                            className="text-[10px] font-bold text-accent-blue bg-white dark:bg-white/10 px-3 py-1.5 rounded-lg uppercase tracking-wider hover:bg-accent-blue hover:text-white transition-all"
                          >
                            वाचले म्हणून खूण करा
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}
