"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import insights from "../../assets/images/insights.svg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: 1,
    category: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    image: insights,
  },
  {
    id: 2,
    category: "Case Study",
    title: "Building seamless banking experiences for digital users",
    company: "NeoBank",
    image: insights,
  },
  {
    id: 3,
    category: "Digital Banking",
    title: "Transforming traditional banking into cloud-native systems",
    company: "FinEdge",
    image: insights,
  },
];

// Persistent stack offsets — index 0 = active (top), 1 = first behind, 2 = second behind
const STACK_LAYERS = [
  { x: 0,   y: 0,  scale: 1,    opacity: 1    },
  { x: -28, y: 14, scale: 0.94, opacity: 0.5  },
  { x: -50, y: 26, scale: 0.88, opacity: 0.25 },
];

// ─── Reusable Components ──────────────────────────────────────────────────────

const ArrowButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:bg-[#00B4FD] hover:text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {direction === "prev" ? (
        <>
          <path d="M19 12H5" />
          <path d="M11 18L5 12L11 6" />
        </>
      ) : (
        <>
          <path d="M5 12H19" />
          <path d="M13 18L19 12L13 6" />
        </>
      )}
    </svg>
  </button>
);

// ─── Slide transition variants ────────────────────────────────────────────────

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center:        { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const slideTransition = { duration: 0.38, ease: [0.32, 0.72, 0, 1] };

// ─── Card face ────────────────────────────────────────────────────────────────

const CardFace = ({ study, isActive }) => (
  <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
    <div className="overflow-hidden rounded-xl">
      <img
        src={study.image}
        alt={isActive ? study.title : ""}
        draggable="false"
        className="h-full w-full object-cover"
      />
    </div>

    {isActive && (
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#00B4FD]">
            {study.category}
          </p>
          <h3 className="mt-5 text-2xl font-normal leading-[1.15] text-[#EAF6FB] sm:text-4xl">
            {study.title}
          </h3>
          <div className="mt-8 flex items-center gap-3 text-base text-[#6DA8C7]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D2939]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M13 2L3 14h7v8l11-12h-7z" />
              </svg>
            </div>
            <span>{study.company}</span>
          </div>
        </div>
        <button className="mt-10 rounded-xl border border-[#E9F4F980] px-8 py-3 text-sm font-mono uppercase tracking-wide text-[#E9F4F980] transition-all duration-500 hover:border-white hover:bg-white hover:text-[#003ACE]">
          READ MORE
        </button>
      </div>
    )}
  </div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = caseStudies.length;
  const getIndex = (offset) => (activeIndex - offset + total) % total;

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-primaryBg py-24 text-white">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-center text-4xl leading-[1.08] tracking-tight text-[#E9F4F9] sm:text-5xl">
          Our Case Studies
        </h2>

        {/* Card deck */}
        <div className="relative mt-16 flex justify-center">
          <div className="relative w-full max-w-5xl">

            {/* Back cards — rendered bottom-up so layer 2 is furthest back */}
            {[2, 1].map((layer) => {
              const { x, y, scale, opacity } = STACK_LAYERS[layer];
              return (
                <motion.div
                  key={`stack-${layer}-${getIndex(layer)}`}
                  animate={{ x, y, scale, opacity }}
                  transition={slideTransition}
                  style={{ zIndex: 10 - layer }}
                  className="absolute inset-0 rounded-[28px] bg-[#01141B] p-5"
                >
                  <CardFace study={caseStudies[getIndex(layer)]} isActive={false} />
                </motion.div>
              );
            })}

            {/* Active card on top */}
            <div className="relative" style={{ zIndex: 20 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={caseStudies[activeIndex].id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  className="rounded-[28px] bg-[#01141B] p-5 shadow-[0_0_80px_rgba(0,0,0,0.45)]"
                >
                  <CardFace study={caseStudies[activeIndex]} isActive={true} />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-10">
          <ArrowButton onClick={goPrev} direction="prev" />

          <div className="flex items-center gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index ? "w-8 bg-[#00B4FD]" : "w-2 bg-[#1B4E65]"
                }`}
              />
            ))}
          </div>

          <ArrowButton onClick={goNext} direction="next" />
        </div>

        {/* View All */}
        <div className="mt-10 flex justify-end">
          <button className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00B4FD]">
            <span className="relative leading-none">
              View All
              <span className="absolute -bottom-2 left-0 h-[1px] w-[40%] bg-[#00B4FD] transition-all duration-500 ease-out group-hover:w-full" />
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M5 12H19" />
              <path d="M13 6L19 12L13 18" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;