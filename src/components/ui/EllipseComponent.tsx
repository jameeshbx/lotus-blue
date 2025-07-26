import Image from "next/image";
import React from "react";

const EllipseComponent: React.FC = () => {
  return (
    <div className="relative w-auto h-auto rounded-full bg-black grid place-items-center">
      {/* Outer circle with blue border - upper half blue, lower half transparent */}
      <div className="relative">
        <div
          className="absolute inset-[-75px] rounded-full opacity-30"
          style={{
            padding: "3px",
            zIndex: 1,
            border:
              "1px solid linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
            borderRadius: "2px",
          }}
        >
          <div className="w-[516px] h-[516px] bg-black rounded-full"></div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-blue-700/50 blur-xl rounded-full animate-pulse"
            style={{
              filter: "blur(30px)",
              zIndex: -1,
            }}
          ></div>
          <Image
            src="ellipse.png"
            alt="Ellipse"
            className="w-[500px] h-[500px] object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-700/30 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-10 flex space-x-4">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
          Explore Our Works
        </button>
        <button className="px-6 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black transition">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default EllipseComponent;
