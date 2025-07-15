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
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring advanced product management, payment processing, and analytics dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      category: "E-commerce",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Corporate Website",
      description:
        "A professional corporate website with modern design, CMS integration, and SEO optimization for better search engine visibility.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Contentful", "Framer Motion", "Vercel"],
      category: "Corporate",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard",
      description:
        "A comprehensive SaaS dashboard with real-time analytics, user management, and subscription handling capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      category: "SaaS",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile App Website",
      description:
        "A landing page for a mobile app with modern animations, download tracking, and user testimonials.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Framer Motion", "Airtable", "Vercel"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Website",
      description:
        "A beautiful restaurant website with online ordering, menu management, and reservation system integration.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Firebase", "Stripe", "Google Maps"],
      category: "Restaurant",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A creative portfolio website for a photographer with image galleries, booking system, and client testimonials.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Cloudinary", "Sanity CMS", "Vercel"],
      category: "Portfolio",
      liveUrl: "#",
      githubUrl: "#",
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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses
            transform their digital presence with cutting-edge web solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">
                        {project.title}
                      </div>
                      <div className="text-sm opacity-90">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
