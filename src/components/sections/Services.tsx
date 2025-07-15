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
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Development",
      description:
        "Bespoke websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused"],
      color: "text-blue-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description:
        "Websites that look and work perfectly on all devices, from smartphones to large desktop screens.",
      features: ["Mobile Optimized", "Touch Friendly", "Cross Browser"],
      color: "text-green-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description:
        "Complete online store solutions with payment processing, inventory management, and customer analytics.",
      features: ["Payment Integration", "Inventory Management", "Analytics"],
      color: "text-purple-600",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description:
        "Robust server-side applications and APIs built with Node.js, Python, and cloud-native technologies.",
      features: ["REST APIs", "Database Design", "Cloud Deployment"],
      color: "text-orange-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description:
        "Speed up your website with advanced optimization techniques and modern development practices.",
      features: ["Core Web Vitals", "Caching", "CDN Setup"],
      color: "text-yellow-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Maintenance & Support",
      description:
        "Ongoing support, updates, and maintenance to keep your website secure and up-to-date.",
      features: ["Security Updates", "Backup Management", "24/7 Support"],
      color: "text-red-600",
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your
            business thrive in the digital world. From concept to deployment,
            we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className={`${service.color} mb-4`}>{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="secondary"
                        className="mr-2 mb-2"
                      >
                        {feature}
                      </Badge>
                    ))}
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
