"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative bg-black pt-2 pb-10 overflow-hidden min-h-screen"
    >
      {/* Rotated Background Image */}
      <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover "
          style={{ transform: "rotate(180deg)" }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top: What makes us different? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block mb-16"
        >
          {/* Logo and Headline */}
          <div className="inline-block align-top mr-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Image
                src="/blue-logo.png"
                alt="Lotus Logo"
                width={130}
                height={130}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                What makes <br className="hidden md:block" /> us different?
              </h2>
            </motion.div>
          </div>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block align-top max-w-2xl"
          >
            <h3 className="text-white font-bold text-lg mb-2">
              More Than Developers. We&apos;re Your Tech Partners.
            </h3>
            <p className="text-gray-300 text-base">
              Lotus is a modern development team delivering smart digital
              solutions that help businesses grow. We don&apos;t offer
              one-size-fits-all websites—we engineer custom tools, platforms,
              and products, exactly how you need them.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#232323] rounded-xl p-8 md:p-12 mb-20 shadow-lg"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center align-middle"
          >
            {/* Top row - 3 items */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="bg-gray-800 p-3 rounded-lg text-white">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <div>
                <div className="text-white font-semibold">
                  Full-cycle product development
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="bg-gray-800 p-3 rounded-lg text-white">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </span>
              <div>
                <div className="text-white font-semibold">
                  Agile + scalable delivery
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="bg-gray-800 p-3 rounded-lg text-white">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2 .5 3" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </span>
              <div>
                <div className="text-white font-semibold">
                  In-house design + dev teams
                </div>
              </div>
            </motion.div>

            {/* Bottom row - 2 items centered */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 md:col-span-3 md:justify-center"
            >
              <div className="flex items-center gap-4">
                <span className="bg-gray-800 p-3 rounded-lg text-white">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bar-chart-3"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-semibold">
                    Business first thinking
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-gray-800 p-3 rounded-lg text-white">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-headphones"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-semibold">
                    Ongoing support + maintenance
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* What we do? Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row items-start gap-12 z-10 "
        >
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[320px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              What we do ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              We build software that adapts to your business—not the other way
              around.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 mb-8"
            >
              <motion.div
                variants={featureVariants}
                className="flex items-start gap-4"
              >
                <span className="bg-gray-800 p-3 rounded-lg text-white">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-monitor"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-semibold">
                    Custom Web Development
                  </div>
                  <div className="text-gray-400 text-sm max-w-xs">
                    From MVPs to full-scale products, we build tailored apps and
                    platforms.
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={featureVariants}
                className="flex items-start gap-4"
              >
                <span className="bg-gray-800 p-3 rounded-lg text-white">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-semibold">
                    Hybrid App Development
                  </div>
                  <div className="text-gray-400 text-sm max-w-xs">
                    We build cross-platform mobile apps using React Native and
                    Ionic.
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={featureVariants}
                className="flex items-start gap-4"
              >
                <span className="bg-gray-800 p-3 rounded-lg text-white">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-semibold">
                    UI UX Designing
                  </div>
                  <div className="text-gray-400 text-sm max-w-xs">
                    Research-driven interfaces built for clarity, usability, and
                    conversion.
                  </div>
                </div>
              </motion.div>
            </motion.div>
            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-8 mt-8"
            >
              <span className="text-gray-400 text-sm">Trusted by</span>

              <div className="flex items-center gap-4">
                <Image
                  src="/enyata-logo.png"
                  alt="Enyata"
                  width={60}
                  height={24}
                />
                <Image src="/alx-logo.png" alt="ALX" width={40} height={24} />
                <Image src="/okra-logo.png" alt="Okra" width={40} height={24} />
              </div>
            </motion.div>
          </motion.div>
          {/* Right: 3D Sphere Image with Gradient Overlay */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-center relative min-h-[340px]"
          >
            <Image
              src="/ellipse-outer.png"
              alt="3D Sphere"
              fill
              className="object-cover bg-"
            />
            <div className="relative inset-0 p-16 w-full max-w-md aspect-square bg-gradient-to-b from-[#001AFF] via-[#05082b] to-[#02062b] rounded-full opacity-70">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0019FF] to-transparent rounded-full opacity-100">
                {/* Main image with blend mode */}

                <Image
                  src="/ellipse.png"
                  alt="3D Sphere"
                  fill
                  className="object-contain mix-blend-multiply opacity-100 bg-clip-content p-0"
                />
              </div>

              {/* Additional gradient overlay on top */}
            </div>

            {/* Buttons positioned below the sphere */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4 mt-8"
            >
              <Button className="absolute bottom-20 left-[-100px] transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all text-base  hover:scale-105">
                Explore Our Works
              </Button>
              <Button className="absolute bottom-10 left-[-50px]  translate-x-1/2 border border-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all text-base flex items-center gap-2 transform hover:scale-105">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-info"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Learn more</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
