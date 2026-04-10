"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { dataStore } from "@/lib/data-store";

export const ContactSection = () => {
  const [messages, setMessages] = React.useState<{name: string, subject: string, time: string}[]>([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    await dataStore.saveMessage({
      name,
      phone,
      subject,
      message,
    });
    
    setMessages([{ name, subject, time: "आत्ताच" }, ...messages]);
    setIsSubmitting(false);
    setSubmitted(true);
    form.reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: <MapPin size={20} />, label: "पत्ता", info: "दहिवली तर्फे वरेडी, रायगड" },
              { icon: <Phone size={20} />, label: "फोन", info: "+91 8793385144" },
              { icon: <Mail size={20} />, label: "ईमेल", info: "btmm@email.com" },
              { icon: <Clock size={20} />, label: "वेळ", info: "९ ते ६" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <div className="w-10 h-10 bg-accent-blue/10 text-accent-blue rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                   <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{item.label}</div>
                   <div className="text-sm font-bold text-primary-navy dark:text-white">{item.info}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Messages Area */}
          {messages.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">येथे संदेश दिसतील (Latest Messages)</h4>
              <div className="space-y-3">
                {messages.slice(0, 2).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-primary-navy dark:text-white">{msg.name}</div>
                      <div className="text-xs text-foreground/50">{msg.subject}</div>
                    </div>
                    <div className="text-[10px] font-bold text-accent-blue bg-white dark:bg-black/20 px-2 py-1 rounded-lg uppercase">
                      {msg.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
           <div className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none relative z-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">संदेश प्राप्त झाला!</h3>
                  <p className="text-foreground/50">तुमची प्रतिक्रिया आमच्यासाठी महत्त्वाची आहे. आम्ही लवकरच संपर्क करू.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-8">संदेश पाठवा</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">नाव</label>
                           <input name="name" required type="text" placeholder="पूर्ण नाव" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">मोबाईल</label>
                           <input name="phone" required type="text" placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">विषय</label>
                        <input name="subject" required type="text" placeholder="संदेशाचा विषय" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1">संदेश</label>
                        <textarea name="message" required rows={4} placeholder="तुमचा संदेश इथे लिहा..." className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent-blue/20 transition-all resize-none"></textarea>
                     </div>
                     <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-5 bg-gradient-to-r from-primary-navy to-accent-blue text-white font-bold rounded-2xl shadow-xl shadow-accent-blue/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all group disabled:opacity-50 pointer-events-auto"
                     >
                        {isSubmitting ? "संदेश पाठवला जात आहे..." : "संदेश पाठवा"}
                        {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                     </button>
                  </form>
                </>
              )}
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
