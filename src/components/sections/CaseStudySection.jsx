"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowIcon,
  ArrowTextButton,
  GradientGlow,
  ReadMoreButton,
  sectionContainerClass,
} from "../common/sectionPrimitives";
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

const STACK_LAYERS = [
  { x: 0,   y: 0,  scale: 1,    opacity: 1    },
  { x: -28, y: 14, scale: 0.94, opacity: 0.5  },
  { x: -50, y: 26, scale: 0.88, opacity: 0.25 },
];


const ArrowButton = ({ onClick, direction }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous case study" : "Next case study"}
    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00B4FD] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4FD]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primaryBg"
  >
    <ArrowIcon direction={direction} className="h-5 w-5" />
  </button>
);


const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center:        { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const slideTransition = { duration: 0.38, ease: [0.32, 0.72, 0, 1] };


const CardFace = ({ study, isActive }) => (
  <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
    <div className="overflow-hidden rounded-xl">
      <img
        src={study.image}
        alt={isActive ? study.title : ""}
        draggable="false"
        className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
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
        <ReadMoreButton className="mt-10" />
      </div>
    )}
  </div>
);

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
      <GradientGlow className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[140px]" />

      <div className={`relative z-10 ${sectionContainerClass}`}>

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
                type="button"
                key={index}
                onClick={() => goTo(index)}
                aria-label={`View case study ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
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
          <ArrowTextButton>View All</ArrowTextButton>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
