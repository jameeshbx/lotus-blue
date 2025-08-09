"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  //const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "ABOUT US", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Join Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0 w-full lg:max-w-[350px]">
            <div className="relative w-[180px] h-[120px]">
              <Image
                src="/logo.png"
                alt="Lotus Blue Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-8 lg:mt-10">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center lg:justify-start mb-6 lg:mb-0 w-full lg:max-w-[350px]">
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <div className="text-white text-xs sm:text-sm space-y-1 mb-6 lg:mb-8">
              <p>Gregorio Lares 1070-040</p>
              <p>Buenos Aires</p>
              <p>+54 11 5181 0387</p>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="text-white text-xs sm:text-sm font-medium mb-3">
                Follow us on our socials
              </h4>
              <div className="flex space-x-4 justify-center lg:justify-end">
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

        {/* Bottom Section */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm">
            Powered by The King Miles
          </p>
        </div>
      </div>
    </footer>
  );
}
