"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  //const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "Learnings", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="Lotus Blue Logo"
              width={150}
              height={150}
            />
            <p className="text-gray-400 text-sm mt-10">
              © Copyright 2015, All Rights Reserved
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center mb-6 md:mb-0">
            <ul className="flex flex-wrap gap-6">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-right">
            <div className="text-white text-sm space-y-1">
              <p>Greyson Lane 6212-646</p>
              <p>Wortund, Palami</p>
              <p>+234 1236 5667</p>
            </div>
            <div className="text-right mt-8">
              <h4 className="text-white text-sm font-medium mb-3">
                Follow us on our socials
              </h4>
              <div className="flex space-x-4 justify-end">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-800 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media */}
        <div className="flex justify-end"></div>
      </div>
    </footer>
  );
}
