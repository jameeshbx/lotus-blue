"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, MessageCircle } from "lucide-react";
import { LessonItem } from "./LessonItem";
import { CourseImage } from "./CourseImage";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface LearningCardProps {
  id: string;
  image?: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  description: string;
  duration: string;
  level: string;
  lessons: number;
  price: number;
  curriculum: Array<{
    week: string;
    lessons: number;
    duration: string;
    topics: string[];
  }>;
  keyPoints: string[];
  mode: string;
  seatsLeft: number;
  nextBatch: string;
}

export function LearningCard({
  id,
  image,
  category,
  title,
  rating,
  reviews,
  description,
  duration,
  level,
  lessons,
  price,
  curriculum,
  keyPoints,
  mode,
  seatsLeft,
  nextBatch,
}: LearningCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleWeek = (week: string) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden">
        <CardContent className="p-0 mx-4">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/3 relative">
              {image ? (
                <div className="relative h-48 lg:h-full rounded-l-md">
                  <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {category}
                    </span>
                  </div>
                </div>
              ) : (
                <CourseImage category={category} title={title} className="" />
              )}
            </div>

            {/* Content Section */}
            <div className=" lg:w-2/3 p-6 bg-[#262626] rounded-r-md">
              <div className="flex items-start justify-between mb-4 ">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{rating}</span>
                    </div>
                    <span className="text-gray-400">({reviews} Reviews)</span>
                  </div>

                  <button
                    onClick={toggleExpanded}
                    className="text-blue-400 text-sm hover:underline"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {description}
              </p>

              <div className="flex items-center space-x-6 mb-4 text-sm text-gray-400">
                <span>{duration}</span>
                <span>{level}</span>
                <span>{lessons} Lessons</span>
              </div>

              <Separator className="my-4 bg-gray-600" />
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-white">${price}</div>

                {!isExpanded && (
                  <div className="flex flex-col sm:flex-row gap-3 ">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                      Request Admission
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Talk to advisor
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {isExpanded && (
            <div className="flex flex-col gap-4 mt-1 bg-[#262626] rounded-b-md p-4">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6"
              >
                {/* Curriculum */}
                <div className="">
                  <h4 className="text-lg font-semibold text-white mb-4 text-center">
                    Curriculum
                  </h4>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    {curriculum.map((item, index) => (
                      <LessonItem
                        key={index}
                        week={item.week.split(":")[0]} // Extract just the week part
                        title={item.week.split(":").slice(1).join(":").trim()} // Extract the title part
                        lessons={item.lessons}
                        duration={item.duration}
                        topics={item.topics}
                        isExpanded={expandedWeek === item.week}
                        onToggle={() => toggleWeek(item.week)}
                      />
                    ))}
                  </div>
                </div>

                {/* Key Points */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Points
                    </h4>
                    <div className="space-y-2">
                      {keyPoints.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-400">Mode:</span>
                    <span className="text-white ml-2">{mode}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Seats Left:</span>
                    <span className="text-white ml-2">{seatsLeft}</span>
                  </div>
                </div>

                {/* Additional Info */}

                <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                    Request Admission
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Talk to advisor
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
