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
    serviceLookingFor: "upskill",
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
          serviceLookingFor: "upskill",
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
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, black 70%,  #1E2939 30%)",
      }}
    >
      <div className="container mx-auto px-4 bg-blue-400 rounded-lg p-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Got an Idea? Let&apos;s Build It Together.
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Whether you&apos;re planning your next startup, improving an
            existing product, need an expert team, or want to level up,
            we&apos;re ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2 uppercase">
                    Hello, what&apos;s your name?
                  </label>
                  <Input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2 uppercase">
                    What is your email?
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg"
                  />
                </div>

                {/* Description Textarea */}
                <div>
                  <Textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter the description"
                    rows={4}
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg resize-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Service Looking For */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3 uppercase">
                    Service you are looking for?
                  </label>
                  <div className="flex gap-4">
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
                      <span className="text-white">Project development</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceLookingFor"
                        value="upskill"
                        checked={formData.serviceLookingFor === "upskill"}
                        onChange={(e) =>
                          handleRadioChange("serviceLookingFor", e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-white">Upskill with us.</span>
                    </label>
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2 uppercase">
                    What&apos;s your number?
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+00 123456789"
                    className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3 uppercase">
                    What service do you need?
                  </label>
                  <div className="space-y-3">
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
                      <span className="text-white">Custom Web Development</span>
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
                      <span className="text-white">Hybrid App Development</span>
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
                      <span className="text-white">QA Testing</span>
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
                      <span className="text-white">UI UX Designing</span>
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
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-medium uppercase"
              >
                {isSubmitting ? "Sending..." : "Let's Talk"}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400"
              >
                Sorry, there was an error sending your message. Please try
                again.
              </motion.div>
            )}

            {/* Schedule Meeting Link */}
            <div className="text-center">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center"
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
