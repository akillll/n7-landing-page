"use client";

import { motion } from "framer-motion";

const items = [
  { type: "text", value: "N7", blue: true },
  { type: "star" },
  { type: "text", value: "Say" },
  { type: "wave" },
  { type: "text", value: "to the new way of banking" },
  { type: "star" },
  { type: "text", value: "CB7", blue: true },
  { type: "star" },
  { type: "text", value: "Say" },
  { type: "wave" },
];

function WaveHand() {
  return (
    <motion.span
      animate={{
        rotate: [0, 18, -10, 18, -4, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block origin-[70%_70%] text-3xl sm:text-5xl"
    >
      👋
    </motion.span>
  );
}

function StripContent() {
  return (
    <div className="flex items-center gap-6 sm:gap-8 px-6 sm:px-8 whitespace-nowrap">
      {items.map((item, index) => {
        if (item.type === "star") {
          return (
            <span
              key={index}
              className="text-gray-400 text-5xl sm:text-5xl"
            >
              ✳
            </span>
          );
        }

        if (item.type === "wave") {
          return (
            <div key={index} className="flex items-center">
              <WaveHand />
            </div>
          );
        }

        return (
          <span
            key={index}
            className={`font-semibold tracking-tight text-3xl sm:text-5xl ${
              item.blue ? "text-[#2563EB]" : "text-black"
            }`}
          >
            {item.value}
          </span>
        );
      })}
    </div>
  );
}

export default function MovingBankingStrip() {
  return (
    <div className="w-full overflow-hidden border-y border-[#D6E4FF] bg-white py-8">
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate content for seamless infinite loop */}
        <StripContent />
        <StripContent />
        <StripContent />
        <StripContent />
      </motion.div>
    </div>
  );
}