import Button from "../common/Button";
import CTASection from "../common/CTASection";
import {
  ArrowTextButton,
  CheckIcon,
  GradientGlow,
  sectionContainerClass,
} from "../common/sectionPrimitives";

import cb7dashboard1 from "../../assets/images/cb7dashboard1.svg";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const DashboardImage = ({ src, alt, className = "" }) => (
  <div className={className}>
    <img
      src={src}
      alt={alt}
      className="h-auto w-full rounded-[16px] object-cover transition-transform duration-700 ease-out lg:hover:-translate-y-2"
      draggable="false"
    />
  </div>
);

const FeatureItem = ({ children }) => (
  <div className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 transition-colors duration-300 hover:text-white">
    <CheckIcon />
    <span>{children}</span>
  </div>
);

const CB7Section = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background CB7 Text */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-start select-none">
        <span
          className="
    text-[45vw]
    font-bold
    leading-none
    tracking-tighter
    text-transparent
    opacity-30
    [-webkit-text-stroke:1.6px_rgba(0,180,253,0.5)]
    -translate-x-[25%]
  "
        >
          CB7
        </span>
      </div>

      {/* Background Glow */}
      <GradientGlow className="right-[-200px] top-[25%] h-[500px] w-[500px] opacity-10 blur-[120px]" />

      <div className={`relative z-10 ${sectionContainerClass} py-24`}>
        {/* Top Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-[#E9F4F9] sm:text-5xl lg:text-6xl">
              A complete cloud-based core banking.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400">
              Faster time to market with our cloud-based core banking services
            </p>

            <div className="my-5">
              <Button>Request Demo</Button>
            </div>
            <ArrowTextButton>Learn More</ArrowTextButton>
          </div>

          {/* Top Laptop */}
          <DashboardImage
            src={cb7dashboard1}
            alt="AML Dashboard"
            className="ml-[5%] lg:-mr-[40%]"
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-28 grid items-center gap-16 lg:mt-40 lg:grid-cols-2">
          {/* Bottom Laptop */}
          <DashboardImage
            src={cb7dashboard1}
            alt="KYC Dashboard"
            className="order-2 mr-[5%] lg:order-1 lg:-ml-[40%]"
          />

          {/* Features */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h3 className="text-3xl font-medium leading-[1.2] tracking-tight text-[#E9F4F9] sm:text-4xl">
                Run a more efficient, flexible,and digitally connected
                corebanking system
              </h3>

              <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-white">
                What you will get:
              </p>

              <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {features.map((feature) => (
                  <FeatureItem key={feature}>{feature}</FeatureItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        outlineText="CB7"
        title="Take the full advantage of going paper-less now."
        description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
      />
    </section>
  );
};

export default CB7Section;
