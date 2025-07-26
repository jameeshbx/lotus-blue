"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Bug, Monitor, Smartphone } from "lucide-react";

export function Training() {
  const courses = [
    {
      number: "01",
      icon: <Code className="h-6 w-6" />,
      title: "MERN Stack",
      description:
        "Master the most in-demand full-stack technologies with our MERN program. From creating APIs to deploying responsive web apps, you'll gain end-to-end development experience.",
      duration: "8 weeks | Full-Stack Projects",
      nextBatch: "Next Batch: Aug 5",
    },
    {
      number: "02",
      icon: <Smartphone className="h-6 w-6" />,
      title: "Hybrid App Development",
      description:
        "Build cross-platform mobile applications using React Native and Flutter. Learn to create native-like apps that work seamlessly on both iOS and Android platforms.",
      duration: "10 weeks | React Native + Flutter",
      nextBatch: "Next Batch: Aug 5",
    },
    {
      number: "03",
      icon: <Bug className="h-6 w-6" />,
      title: "QA",
      subtitle: "(Manual + Automation)",
      description:
        "Build a strong foundation in software testing with hands-on practice in both manual and automation testing, bug tracking, and test management tools.",
      duration: "6 weeks | Selenium + Manual",
      nextBatch: "Next Batch: Aug 12",
    },
    {
      number: "04",
      icon: <Monitor className="h-6 w-6" />,
      title: "UI/UX Design",
      description:
        "Learn the complete UI/UX design process—from user research to interactive prototyping. Get hands-on with Figma and create projects that stand out.",
      duration: "5 weeks | Figma + UX Research",
      nextBatch: "Next Batch: Aug 19",
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
    <section id="training" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Training Programs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master in-demand skills with our comprehensive training programs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 shadow-lg">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header with icon, number, title, and arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-white">{course.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 font-semibold text-lg">
                            {course.number}
                          </span>
                          <h3 className="text-white font-bold text-lg">
                            {course.title}
                          </h3>
                        </div>
                        {course.subtitle && (
                          <p className="text-gray-400 text-sm mt-1">
                            {course.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Duration and next batch */}
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-300 text-sm font-medium">
                      {course.duration}
                    </p>
                    <p className="text-gray-300 text-sm font-medium">
                      {course.nextBatch}
                    </p>
                  </div>

                  {/* Request Admission button - pushed to bottom */}
                  <div className="mt-auto">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                      Request Admission
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
