"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "About us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Learnings", href: "#learnings" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto px-1 py-1 mt-8 transition-all duration-300  ${
          isScrolled ? "max-w-7xl" : "max-w-5xl bg-[#1E1E1E] rounded-xl"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors font-medium text-lg"
              >
                {item.name}
              </motion.a>
            ))}
            <Button
              variant="outline"
              className="border-gray-600 bg-[#6B6B6B] text-white hover:bg-gray-800 hover:border-gray-500 px-6 py-3 text-lg font-medium"
            >
              <User className="w-5 h-5 mr-3" />
              Connect With Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-6 pb-6 border-t border-gray-800 pt-6"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-lg"
                >
                  {item.name}
                </a>
              ))}
              <Button className="border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 w-full py-4 text-lg font-medium">
                Connect With Us
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
