import Button from "../common/Button";
import TrustedLogo from "../common/TrustedByLogos";

import heroDashboard from "../../assets/images/heroDashboard.svg";
import shellsLogo from "../../assets/icons/shells.svg";
import smartfinderLogo from "../../assets/icons/smartfinder.svg";
import zoomerLogo from "../../assets/icons/zoomer.svg";
import artvenueLogo from "../../assets/icons/artvenue.svg";
import kontrastLogo from "../../assets/icons/kontrast.svg";
import wavesmarathonLogo from "../../assets/icons/wavesmarathon.svg";

const HeroSection = () => {
  const trustedLogos = [
    { src: shellsLogo, alt: "Shells" },
    { src: smartfinderLogo, alt: "SmartFinder" },
    { src: zoomerLogo, alt: "Zoomer" },
    { src: artvenueLogo, alt: "Artvenue" },
    { src: kontrastLogo, alt: "Kontrast" },
    { src: wavesmarathonLogo, alt: "Waves Marathon" },
  ];

  return (
    <section className="relative overflow-hidden bg-primaryBg text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        {/* Top row: Left + Right */}
        <div className="flex min-h-[60vh] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="z-10 w-full max-w-[720px] lg:w-1/2 lg:flex-none">
            <h1 className="text-5xl font-medium leading-[1.05] tracking-loose text-white sm:text-5xl lg:text-6xl">
              The new foundation
              <br />
              of modern banking
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              We drive innovation and growth, provide seamless customer experience
              and operational excellence
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Request Demo</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex w-full justify-center lg:w-1/2 lg:flex-none lg:justify-end">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-70 blur-[90px]" />

            {/* Hero Image */}
            <div className="relative z-10 w-full max-w-[550px]">
              <img
                src={heroDashboard}
                alt="Banking dashboard"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable="false"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-6 text-md text-gray-400">Trusted By:</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
            {trustedLogos.map((logo) => (
              <TrustedLogo key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;