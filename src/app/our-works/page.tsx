"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";
import { ProjectItem } from "@/components/sections/ProjectItem";
import { projectsData } from "@/data/projectsData";
import { ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OurWorksPage() {
  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-32">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Homepage</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Portfolio</span>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container"
        >
          <div className="flex  justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white text-center mb-8">
                Our Works
              </h1>
            </div>
            <div className="relative flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 pr-10"
              />
              <Search className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Our Works Section */}
        <section className="relative">
          {/* Background Grid Pattern */}
          {/* <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          /> */}

          {/* Projects */}
          <div className="relative z-10">
            {projectsData.map((project, index) => (
              <ProjectItem key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
