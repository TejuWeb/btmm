"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "शिका, संघटित व्हा आणि संघर्ष करा.",
    author: "डॉ. बाबासाहेब आंबेडकर"
  },
  {
    text: "प्रज्ञेशिवाय माणसाचे जीवन म्हणजे अथांग सागरामध्ये भरकटलेल्या जहाजासारखे आहे.",
    author: "डॉ. बाबासाहेब आंबेडकर"
  },
  {
    text: "जो माणूस स्वतःच्या हक्क व कर्तव्यासाठी संघर्ष करत नाही, तो गुलामच राहतो.",
    author: "डॉ. बाबासाहेब आंबेडकर"
  },
  {
    text: "सर्वांत मोठा धर्म म्हणजे माणसाने माणसाशी माणसासारखे वागणे.",
    author: "डॉ. बाबासाहेब आंबेडकर"
  },
  {
    text: "मन शुद्ध असेल तर जीवनातील प्रत्येक गोष्ट सुंदर वाटते.",
    author: "गौतम बुद्ध"
  },
  {
    text: "हजारो युद्धे जिंकण्यापेक्षा स्वतःवर विजय मिळवणे श्रेष्ठ आहे.",
    author: "गौतम बुद्ध"
  },
  {
    text: "भूतकाळाचा विचार करू नका, भविष्याची स्वप्ने पाहू नका, फक्त वर्तमान काळावर लक्ष केंद्रित करा.",
    author: "गौतम बुद्ध"
  },
  {
    text: "सुख हे आपल्या विचारांवर अवलंबून असते.",
    author: "गौतम बुद्ध"
  },
  {
    text: "माणूस जन्माने नाही तर कर्माने महान होतो.",
    author: "डॉ. बाबासाहेब आंबेडकर"
  },
  {
    text: "तुमचा मार्ग स्वतः तयार करा, कारण तुम्हीच तुमचे सर्वात मोठे मार्गदर्शक आहात.",
    author: "गौतम बुद्ध"
  },
  {
    text: "ज्याला स्वतःच्या शक्तीवर विश्वास असतो, त्याला जगातील कोणतीही ताकद हरवू शकत नाही.",
    author: "डॉ. बाबासाहेब आंबेडकर"
  },
  {
    text: "प्रेम आणि करुणा हे जगातील सर्वात मोठे सामर्थ्य आहेत.",
    author: "गौतम बुद्ध"
  }
];

export const DailyQuote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Select daily quote based on the day of the year
    const dayOfYear = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const index = dayOfYear % quotes.length;
    setQuote(quotes[index]);
  }, []);

  return (
    <section className="py-12 md:py-20 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden text-center"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent-blue/10 rounded-br-[5rem] -translate-x-10 -translate-y-10" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/10 rounded-tl-[5rem] translate-x-10 translate-y-10" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-accent-blue/10 text-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Quote size={32} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={quote.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-4xl font-bold text-primary-navy dark:text-white leading-tight mb-8 font-heading">
                  "{quote.text}"
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-[2px] bg-accent-blue/30" />
                  <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-sm">
                    {quote.author}
                  </span>
                  <div className="w-8 h-[2px] bg-accent-blue/30" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 text-[10px] font-bold text-foreground/20 dark:text-white/10 uppercase tracking-widest">
            — आजचा सुविचार (Quote of the Day) —
          </div>
        </motion.div>
      </div>
    </section>
  );
};
