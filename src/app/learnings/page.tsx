"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Home } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";
import { LearningCard } from "@/components/sections/LearningCard";
import { Input } from "@/components/ui/input";
import { learningData } from "@/data/learningData";

export default function LearningsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = learningData.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Main Content */}
      <div className="pt-32 pb-16 mt-4">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs and Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Home className="w-4 h-4" />
                <span>Homepage</span>
                <span>/</span>
                <span className="text-white">Learnings</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                All Learnings
              </h1>
            </div>

            {/* Search Bar */}
            <div className="relative mt-4 lg:mt-0 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="space-y-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LearningCard {...course} />
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">
                No courses found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
