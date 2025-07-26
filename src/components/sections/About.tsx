import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const About = () => {
  return (
    <section className="relative h-auto bg-black overflow-hidden">
      {/* Background Network Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-pink-500/20">
          {/* Network pattern dots and lines would go here */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Left SVG Image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <Image
          src="/about-left.svg"
          alt="About Left"
          width={700}
          height={300}
          className="opacity-20"
        />
      </div>

      {/* Right SVG Image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <Image
          src="/about-right.svg"
          alt="About Right"
          width={700}
          height={300}
          className="opacity-20"
        />
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex items-center justify-center my-12 px-1">
        <div className="max-w-7xl mx-auto">
          {/* Central Overlay Card */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-800/50 opacity-50">
            <div className="text-center space-y-6">
              {/* Sub-headline */}
              <p className="text-gray-300 text-lg font-medium">
                We Also Train Future Developers
              </p>

              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We Build Tech—and We Build Talent.
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto">
                Alongside development, we offer select high-impact tech courses
                to help future developers learn from real-world projects and
                mentors.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Build Skills With Us
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
