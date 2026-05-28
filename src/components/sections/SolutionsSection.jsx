import Button from "../common/Button";
import {
  ArrowTextButton,
  GradientGlow,
  sectionContainerClass,
} from "../common/sectionPrimitives";

import corebanking from "../../assets/icons/core-banking.svg";
import digitalbanking from "../../assets/icons/digital-banking.svg";
import openbanking from "../../assets/icons/open-banking.svg";
import loanorigin from "../../assets/icons/loan-origin.svg";
import loanmanage from "../../assets/icons/loan-manage.svg";

const solutions = [
  {
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    badge: "",
    icon: corebanking,
  },
  {
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    badge: "",
    icon: digitalbanking,
  },
  {
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    badge: "",
    icon: openbanking,
  },
  {
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    badge: "NBFC",
    icon: loanorigin,
  },
  {
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    badge: "NBFC",
    icon: loanmanage,
  },
];

const SolutionCard = ({ title, description, badge, icon }) => (
  <article className="group relative rounded-xl transition-transform duration-500 ease-out lg:hover:-translate-y-1">
    {badge && (
      <span className="absolute right-0 top-0 text-[10px] uppercase tracking-[0.2em] text-gray-500">
        {badge}
      </span>
    )}

    <div className="mb-6 flex h-12 w-12 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
      <img
        src={icon}
        alt={title}
        className="h-10 w-10 object-contain"
        draggable="false"
      />
    </div>

    <h3 className="text-2xl font-normal leading-snug text-white">{title}</h3>

    <p className="mt-6 text-sm leading-relaxed text-gray-400">
      {description}
    </p>

    <ArrowTextButton className="mt-8">Learn More</ArrowTextButton>
  </article>
);

const SolutionsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primaryBg font-sans text-white">
      {/* Background Glow */}
      <GradientGlow className="right-[-120px] top-[70%] z-0 h-[560px] w-[560px] -translate-y-1/2 opacity-10 blur-[120px]" />
      <div className={`relative z-10 ${sectionContainerClass} py-24`}>
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <div className="flex flex-col lg:sticky lg:top-24">
            <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-[#E9F4F9] sm:text-5xl">
              All of our solutions are tailor-made to your needs
            </h2>

            <div className="mt-10">
              <Button variant="secondary">Request Demo</Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2">
            {solutions.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
