"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  const projects = [
    {
      title: "Expay",
      description:
        "From Students To Startups, See How Expay Simplifies Cross-Border Payments And Makes Global Money Movement Seamless.",
      image: "/expay.png",
    },
    {
      title: "Elneera",
      description:
        "Smart Tools for Smarter Agencies — Manage Itineraries, Bookings, and DMC Communications with Ease.",
      image: "/elneera.png",
    },
    {
      title: "BuyEx - Fintech",
      description:
        "We Handle The Forex Heavy Lifting, While You Deliver Exceptional Study Abroad Solutions.",
      image: "/buyex.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        {/* Absolutely positioned h2 on top of second project */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute text-4xl font-bold text-white mb-2 left-1/2 top-8 z-10"
        >
          Some of the Things We&apos;ve Built
        </motion.h2>

        {/* Absolutely positioned p on top of third project */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute text-lg text-gray-300 right-38 lg:right-128 top-24 z-10"
        >
          Portfolio Section
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div
                className={`space-y-4 ${
                  index === 0 ? "mt-0" : index === 1 ? "mt-16" : "mt-32"
                }`}
              >
                {/* Screenshot Card */}
                <Card className="bg-white border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </CardContent>
                </Card>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                  >
                    <div className="w-8 h-8 bg-white rounded border border-gray-300 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-gray-700" />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
