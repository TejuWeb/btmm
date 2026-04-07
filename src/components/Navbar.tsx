"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "मुख्यपृष्ठ", href: "#home" },
  { name: "आमच्याबद्दल", href: "#about" },
  { name: "कार्यक्रम", href: "#events" },
  { name: "सदस्य", href: "#members" },
  { name: "गॅलरी", href: "#gallery" },
  { name: "संपर्क", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 transition-transform group-hover:rotate-12 duration-500">
            <Image
              src="/images/logo.png"
              alt="BTMM Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-none text-primary-navy dark:text-white">
              बौद्ध तरुण मित्र मंडळ
            </span>
            <span className="text-[10px] font-medium tracking-wider opacity-60 uppercase">
              Bauddha Tarun Mitra Mandal
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium hover:text-accent-blue transition-colors rounded-full hover:bg-accent-blue/5"
            >
              {link.name}
            </a>
          ))}
          {/*<Link href="/admin">
            <button className="ml-4 flex items-center gap-2 bg-gradient-to-r from-primary-navy to-accent-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-accent-blue/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
              <ShieldCheck size={16} />
              Admin
            </button>
          </Link>*/}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-2xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 bg-primary-navy text-white p-4 rounded-xl font-bold">
                <ShieldCheck size={20} />
                Admin Login
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
