"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Diamond } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-2 bg-black min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Subtle Lotus Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 border-2 border-blue-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20 mt-10">
            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8"
            >
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300 text-sm">
                Welcome to the Future
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              <span className="absolute top-5 left-25">
                <Image
                  src="/vector.png"
                  alt="vector"
                  width={150}
                  height={150}
                />
              </span>
              We Build Digital Products
              <br />
              <span className="relative">
                And Future Developers
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-16 h-px bg-gray-600"></div>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Custom web solutions for businesses. Real-world tech courses for
              the next generation of creators.
            </motion.p>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Content - Custom Tech Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 z-10"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                CUSTOM TECH SOLUTIONS
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Tailored platforms and applications built from scratch.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                Let's Build Together →
              </a>

              {/* Features */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Diamond className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">50+</div>
                    <div className="text-gray-400 text-sm">
                      Projects Delivered
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Diamond className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Custom-First</div>
                    <div className="text-gray-400 text-sm">
                      We craft digital tools that solve business problems.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center - Animated Sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex justify-center items-center w-full h-full relative"
            >
              <div className="relative w-[180%] aspect-square -mx-[40%]">
                {/* Animated Sphere */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src="/hero-img.png"
                    alt="Hero"
                    fill
                    className="rounded-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Upskill with the Team */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 z-10"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-400 mb-4">
                UPSKILL WITH THE TEAM
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Courses on MERN Stack, QA Testing, and UI/UX Design.
              </p>
              <a
                href="#learnings"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                Ready to Upskill? →
              </a>

              {/* Features */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Diamond className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">90%</div>
                    <div className="text-gray-400 text-sm">
                      Project-Based Learning. No fluff - just real assignments
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Diamond className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Job Oriented</div>
                    <div className="text-gray-400 text-sm">
                      Resume support, portfolio projects - built into every
                      course.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
