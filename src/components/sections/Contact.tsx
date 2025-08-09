"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    serviceLookingFor: "project-development",
    serviceNeeded: "custom-web-development",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
          serviceLookingFor: "project-development",
          serviceNeeded: "custom-web-development",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20"
      style={{
        background: "linear-gradient(to bottom, black 70%,  #1E2939 30%)",
      }}
    >
      <div className="container mx-16 px-4 bg-blue-400 rounded-lg p-6 sm:p-8 lg:p-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Got an Idea? Let&apos;s Build It Together.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto">
            Whether you&apos;re planning your next startup, improving an
            existing product, or need an expert team, we&apos;re ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-2 uppercase">
                    Hello, what&apos;s your name?
                  </label>
                  <Input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg text-sm sm:text-base"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-2 uppercase">
                    What is your email?
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg text-sm sm:text-base"
                  />
                </div>

                {/* Description Textarea */}
                <div>
                  <Textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter the message here"
                    rows={4}
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg resize-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Service Looking For */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-3 uppercase">
                    Service you are looking for?
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceLookingFor"
                        value="project-development"
                        checked={
                          formData.serviceLookingFor === "project-development"
                        }
                        onChange={(e) =>
                          handleRadioChange("serviceLookingFor", e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-white text-sm sm:text-base">
                        Project development
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceLookingFor"
                        value="build-team"
                        checked={formData.serviceLookingFor === "build-team"}
                        onChange={(e) =>
                          handleRadioChange("serviceLookingFor", e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-white text-sm sm:text-base">
                        Build a Team
                      </span>
                    </label>
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-2 uppercase">
                    What&apos;s your number?
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+00 Country Code"
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg text-sm sm:text-base"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-white mb-3 uppercase">
                    What service do you need?
                  </label>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceNeeded"
                        value="custom-web-development"
                        checked={
                          formData.serviceNeeded === "custom-web-development"
                        }
                        onChange={(e) =>
                          handleRadioChange("serviceNeeded", e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-white text-sm sm:text-base">
                        Custom Web Development
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceNeeded"
                        value="qa-testing"
                        checked={formData.serviceNeeded === "qa-testing"}
                        onChange={(e) =>
                          handleRadioChange("serviceNeeded", e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-white text-sm sm:text-base">
                        QA Testing
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceNeeded"
                        value="ui-ux-designing"
                        checked={formData.serviceNeeded === "ui-ux-designing"}
                        onChange={(e) =>
                          handleRadioChange("serviceNeeded", e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-white text-sm sm:text-base">
                        UI/UX Designing
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium uppercase text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "GET FREE QUOTE"}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 text-sm sm:text-base"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400 text-sm sm:text-base"
              >
                Sorry, there was an error sending your message. Please try
                again.
              </motion.div>
            )}

            {/* Schedule Meeting Link */}
            <div className="text-center">
              <a
                href="#"
                className="text-white hover:text-white transition-colors text-xs sm:text-sm inline-flex items-center"
              >
                → I want to schedule a meeting
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
