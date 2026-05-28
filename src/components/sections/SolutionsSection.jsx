import Button from "../common/Button";

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

const SolutionsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primaryBg text-white font-sans">
      {/* Background Glow */}
      <div className="absolute right-[-120px] top-[70%] z-0 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-10 blur-[120px]" />
      <div className=" relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <div className="flex flex-col">
            <h2 className=" text-4xl font-medium leading-[1.1] tracking-tight text-[#E9F4F9] sm:text-5xl">
              All of our solutions are tailor-made to your needs
            </h2>

            <div className="mt-10">
              <Button variant="secondary">Request Demo</Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2">
            {solutions.map((item) => (
              <div key={item.title} className="group relative">
                {/* Badge */}
                {item.badge && (
                  <span className="absolute right-0 top-0 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    {item.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-10 w-10 object-contain"
                    draggable="false"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-normal leading-snug text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

                {/* Link */}
                <button className="group mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00B4FD]">
                  <span className="relative leading-none">
                    Learn More
                    <span className="absolute -bottom-2 left-0 h-[1px] w-[40%] bg-[#00B4FD] transition-all duration-500 ease-out group-hover:w-full group-hover:bg-[#00B4FD]" />
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12H19" />
                    <path d="M13 6L19 12L13 18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
