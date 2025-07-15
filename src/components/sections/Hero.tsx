"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We Build
                  <span className="text-blue-600 block">Digital Dreams</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with cutting-edge web solutions. We
                  create stunning, modern websites and applications that drive
                  growth and deliver exceptional user experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  View Our Work
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center space-x-8 text-sm text-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span>Modern Tech Stack</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Global Reach</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-8 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Code className="h-8 w-8 text-blue-600" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-20 right-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-20 left-12 w-14 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Globe className="h-7 w-7 text-blue-600" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">Lotus Blue</div>
                    <div className="text-lg opacity-90">Web Development</div>
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
