import Button from "../common/Button";

const FinalCTASection = () => {
  return (
    <section className="bg-primaryBg py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left */}
          <div className="max-w-[640px]">
            <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-[#E9F4F9] sm:text-5xl">
              Take the full advantage of going paper-less now.
            </h2>

            <p className="mt-8 max-w-[560px] text-sm leading-relaxed text-[#8FA3AD] sm:text-base">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button variant="secondary">CONTACT US</Button>

            <Button>REQUEST DEMO</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;