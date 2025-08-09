"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "@/data/projectsData";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  const isTextLeft = project.layout === "left";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: isTextLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center space-y-6"
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        {project.title}
      </h3>
      <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
        {project.description}
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg w-fit">
        Get a quote
      </Button>
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, x: isTextLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="relative py-1"
    >
      <div className="relative w-full h-[350px] lg:h-[350px] ml-8">
        {/* Main image */}
        <Image
          src={project.images.main}
          alt={project.title}
          width={200}
          height={250}
          className=" rounded-lg"
        />
        {/* Overlay image */}
        <div className="absolute -bottom-8 right-8 w-64 h-48 lg:w-80 lg:h-60">
          <Image
            src={project.images.overlay}
            alt={`${project.title} dashboard`}
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 lg:py-24"
    >
      <div
        className={`container mx-auto py-8   ${
          isTextLeft
            ? "rounded-r-full pl-8 pr-16 bg-gradient-to-l from-[#262626] via-[#262626] to-black"
            : " rounded-l-full pl-16 pr-8 bg-gradient-to-r from-[#262626] via-[#262626] to-black"
        }`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center  ${
            isTextLeft ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          {isTextLeft ? (
            <>
              {textContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
