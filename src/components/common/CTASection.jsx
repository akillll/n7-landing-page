import Button from "../common/Button";

const CTASection = ({
  title,
  description,
  outlineText = "CB7",
  bgColor = "bg-primaryBg"
}) => {
  return (
    <section className={`relative overflow-hidden ${bgColor} py-24`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(90deg,#031E2A_10%,#000D12_100%)]">
          {/* Outline Background Text */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center select-none overflow-hidden">
            <span
              className="
                text-[30vw]
                font-bold
                leading-none
                tracking-[-0.08em]
                text-transparent
                opacity-40
                lg:text-[40vw]
                translate-y-[-25%]
                translate-x-[15%]

                drop-shadow-[0_0_20px_rgba(0,58,206,0.15)]

                [-webkit-text-stroke:1.6px_rgba(0,180,253,0.5)]

                [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
              "
            >
              {outlineText}
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 grid min-h-[460px] lg:grid-cols-2">
            {/* Left */}
            <div className="flex items-center px-8 py-16 sm:px-12 lg:px-16">
              <div className="max-w-[560px]">
                <h2 className="text-4xl font-medium leading-[1.05] tracking-tight text-[#E9F4F9] sm:text-4xl lg:text-5xl">
                  {title}
                </h2>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
                  {description}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center px-8 py-12 sm:px-12 lg:px-14">
              <div className="flex w-full max-w-[520px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-center">
                <Button variant="secondary">Contact Us</Button>

                <Button>Request Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;