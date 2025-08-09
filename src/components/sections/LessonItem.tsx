"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

interface LessonItemProps {
  week: string;
  title: string;
  lessons: number;
  duration: string;
  topics?: string[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function LessonItem({
  week,
  title,
  lessons,
  duration,
  topics = [],
  isExpanded = false,
  onToggle,
}: LessonItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-gray-700 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-800/50 transition-colors rounded-lg"
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-blue-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-blue-400" />
            )}
            <span className="text-sm font-medium text-blue-400">{week}</span>
          </div>
          <span className="text-white font-medium">{title}</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span>{lessons} Lessons</span>
          <span>{duration}</span>
        </div>
      </button>

      {/* Topics section - shown when expanded */}
      {isExpanded && topics.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 pb-4"
        >
          <div className="mt-3 pl-6">
            <ul className="space-y-2">
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-2 text-sm text-gray-300"
                >
                  <span className="text-blue-400 mt-1.5">•</span>
                  <span>{topic}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
