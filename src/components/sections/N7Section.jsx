import Button from "../common/Button";
import CTASection from "../common/CTASection";
import { ArrowTextButton, CheckIcon, sectionContainerClass } from "../common/sectionPrimitives";
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
  <div className="flex justify-center transition-transform duration-500 ease-out lg:group-hover:-translate-y-1">
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
  const content = (
    <FeatureContent title={title} description={description} features={features} />
  );
  const image = <PhoneImage src={phone} alt={alt} />;

  return (
    <div className="group grid items-center gap-10 lg:grid-cols-[220px_1fr]">
      {isFlipped ? (
        <>
          <div className="order-2 lg:order-1">{content}</div>
          <div className="order-1 lg:order-2">{image}</div>
        </>
      ) : (
        <>
          <div>{image}</div>
          <div>{content}</div>
        </>
      )}
    </div>
  );
};


const N7Section = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEF4F8] pt-24 font-sans sm:pt-28">
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

      <div className={`relative z-10 ${sectionContainerClass}`}>
        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT: Intro */}
          <div className="max-w-5xl lg:sticky lg:top-24">
            <h2 className="text-4xl leading-[1.05] tracking-[0.04em] text-[#101828] sm:text-5xl lg:text-6xl">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-5 text-md leading-relaxed text-[#667085]">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <div className="mt-8">
              <Button>REQUEST DEMO</Button>
            </div>
            <ArrowTextButton className="mt-5 text-[#0072FF] [&_span_span]:bg-[#0072FF]">
              Learn More
            </ArrowTextButton>
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
