import Button from "../common/Button";
import CTASection from "../common/CTASection";
import phone1 from "../../assets/images/phone1.svg";
import phone2 from "../../assets/images/phone2.svg";
import phone3 from "../../assets/images/phone3.svg";

// ─── Data ────────────────────────────────────────────────────────────────────

const sections = [
  {
    phone: phone1,
    alt: "Mobile Banking",
    title: "Fully compliant with regulatory requirement",
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    features: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    phone: phone2,
    alt: "Analytics",
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multi-layer approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    features: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
  },
  {
    phone: phone3,
    alt: "Profile",
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimizing operational costs for a seamless branchless experience.",
    features: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adaptable and Scalable",
    ],
  },
];

// ─── Reusable Components ─────────────────────────────────────────────────────

const CheckIcon = () => (
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
);

const FeatureList = ({ features }) => (
  <div className="mt-8 space-y-4">
    {features.map((item) => (
      <div key={item} className="flex items-start gap-3 text-[#667085]">
        <CheckIcon />
        <span>{item}</span>
      </div>
    ))}
  </div>
);

const PhoneImage = ({ src, alt }) => (
  <div className="flex justify-center">
    <img
      src={src}
      alt={alt}
      draggable="false"
      className="h-auto w-[220px] object-contain"
    />
  </div>
);

const FeatureContent = ({ title, description, features }) => (
  <div className="max-w-[360px]">
    <h3 className="text-lg font-medium text-[#111827]">{title}</h3>
    <p className="mt-5 leading-relaxed text-[#667085]">{description}</p>
    <FeatureList features={features} />
  </div>
);


const FeaturePair = ({ phone, alt, title, description, features, index }) => {
  const isFlipped = index % 2 !== 0;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr]">
      {isFlipped ? (
        <>
          <FeatureContent title={title} description={description} features={features} />
          <PhoneImage src={phone} alt={alt} />
        </>
      ) : (
        <>
          <PhoneImage src={phone} alt={alt} />
          <FeatureContent title={title} description={description} features={features} />
        </>
      )}
    </div>
  );
};


const N7Section = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEF4F8] font-sans pt-28">
      {/* Background N7 watermark */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute left-[10%] text-[45vw] font-bold leading-none tracking-[-0.08em] text-transparent opacity-40 [-webkit-text-stroke:1.6px_rgba(0,180,253,0.5)]"
        >
          N7
        </span>
        <span
          className="absolute right-[-5%] bottom-[30%] text-[45vw] font-bold leading-none tracking-[-0.08em] text-transparent opacity-40 [-webkit-text-stroke:1.6px_rgba(0,180,253,0.5)]"
        >
          7
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT: Intro */}
          <div className="max-w-5xl">
            <h2 className="text-6xl leading-[1.05] tracking-[0.04em] text-[#101828]">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-5 text-md leading-relaxed text-[#667085]">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <div className="mt-8">
              <Button>REQUEST DEMO</Button>
            </div>
            <button className="group mt-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[#0072FF]">
              <span className="relative leading-none">
                Learn More
                <span className="absolute -bottom-2 left-0 h-[1px] w-[40%] bg-[#0072FF] transition-all duration-500 group-hover:w-full" />
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

          {/* RIGHT: Alternating phone + feature pairs */}
          <div className="flex flex-col gap-20">
            {sections.map((section, index) => (
              <FeaturePair key={section.title} {...section} index={index} />
            ))}
          </div>

        </div>
      </div>
      <CTASection
  outlineText="N7"
  title="Launch your digital banking experience faster."
  description="N7 enables banks to modernize customer journeys with scalable and digitally connected banking solutions."
  bgColor="bg-[#EEF4F8]"
/>
    </section>
  );
};

export default N7Section;