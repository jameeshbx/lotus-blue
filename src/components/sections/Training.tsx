"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Globe } from "lucide-react";

export function Training() {
  const courses = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Fullstack Web Development with Next.js",
      description:
        "Master modern fullstack development using Next.js, React, and TypeScript. Learn server-side rendering, API routes, and deployment strategies.",
      features: [
        "Next.js 14",
        "React & TypeScript",
        "Server Components",
        "API Routes",
      ],
      color: "text-blue-600",
      duration: "8 weeks",
      level: "Intermediate",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Vue.js Fullstack Development",
      description:
        "Build modern web applications with Vue.js ecosystem. Learn Vue 3, Composition API, Pinia state management, and Nuxt.js.",
      features: ["Vue 3", "Composition API", "Pinia", "Nuxt.js"],
      color: "text-green-600",
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Flask API Development",
      description:
        "Create robust REST APIs and backend services using Python Flask. Learn database integration, authentication, and API design patterns.",
      features: ["Python Flask", "REST APIs", "SQLAlchemy", "JWT Auth"],
      color: "text-orange-600",
      duration: "4 weeks",
      level: "Beginner",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Hybrid Mobile App Development with Ionic",
      description:
        "Build cross-platform mobile applications using Ionic Framework. Learn to create native-like apps for iOS and Android with web technologies.",
      features: [
        "Ionic Framework",
        "Angular/React",
        "Capacitor",
        "Native APIs",
      ],
      color: "text-purple-600",
      duration: "6 weeks",
      level: "Intermediate",
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
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Courses Offered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master modern web and mobile development with our comprehensive
            training programs. Learn from industry experts and build real-world
            projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                <CardHeader>
                  <div className={`${course.color} mb-4`}>{course.icon}</div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Duration:</span>{" "}
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Level:</span>{" "}
                        {course.level}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">
                        What you'll learn:
                      </p>
                      {course.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="secondary"
                          className="mr-2 mb-2"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
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
