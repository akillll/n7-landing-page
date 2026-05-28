import Button from "../common/Button";
import CTASection from "../common/CTASection";

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
      <div className="absolute right-[-200px] top-[25%] h-[500px] w-[500px] rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12">
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
            <button className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00B4FD]">
              <span className="relative leading-none">
                Learn More
                <span className="absolute -bottom-2 left-0 h-[1px] w-[40%] bg-[#00B4FD] transition-all duration-500 ease-out group-hover:w-full" />
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12H19" />
                <path d="M13 6L19 12L13 18" />
              </svg>
            </button>
          </div>

          {/* Top Laptop */}
          <div className="-mr-[40%] ml-[5%]">
            <img
              src={cb7dashboard1}
              alt="AML Dashboard"
              className="h-auto w-full rounded-[16px] object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-40 grid items-center gap-16 lg:grid-cols-2">
          {/* Bottom Laptop */}
          <div className="order-2 lg:order-1 -ml-[40%] mr-[5%]">
            <img
              src={cb7dashboard1}
              alt="KYC Dashboard"
              className="h-auto w-full rounded-[16px] object-cover"
              draggable="false"
            />
          </div>

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
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
                  >
                    {/* Check */}
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#00B4FD] to-[#003ACE]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M20 6L9 17L4 12" />
                      </svg>
                    </div>

                    <span>{feature}</span>
                  </div>
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
