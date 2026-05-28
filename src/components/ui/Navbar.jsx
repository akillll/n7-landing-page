import { useState, useEffect } from "react";
import Button from "../common/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-3xl rounded-xl px-3 py-2 font-mono text-[#E9F4F9] transition-all duration-300 ${
          isScrolled
            ? "bg-[#2F2F2FB2]/70 shadow-lg backdrop-blur-md"
            : "bg-[#2F2F2FB2]/70 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-2xl font-medium font-sans tracking-widest">
            N7
          </span>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 lg:flex tracking-tightest">
            <a className="text-sm tracking-widest text-gray-300 transition hover:text-white" href="#">
              SOLUTIONS
            </a>
            <a className="text-sm tracking-widest text-gray-300 transition hover:text-white" href="#">
              RESOURCES
            </a>
            <a className="text-sm tracking-widest text-gray-300 transition hover:text-white" href="#">
              ABOUT US
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className={`rounded-md px-8 py-1 text-sm font-mono font-medium uppercase leading-[130%] tracking-wide cursor-pointer transition-all duration-500 border border-[#E9F4F9] hover:border-white hover:bg-white hover:text-[#003ACE]`}>REQUEST DEMO</button>
          </div>

          {/* Hamburger */}
          <button
            className="flex flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-5 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-96 pt-4" : "max-h-0"}`}>
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            <a href="#" className="rounded-lg px-3 py-2 text-sm tracking-widest text-gray-300 transition hover:bg-white/10 hover:text-white">
              SOLUTIONS
            </a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm tracking-widest text-gray-300 transition hover:bg-white/10 hover:text-white">
              RESOURCES
            </a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm tracking-widest text-gray-300 transition hover:bg-white/10 hover:text-white">
              ABOUT US
            </a>
            <div className="mt-3 pb-1">
              <Button variant="secondary" className="w-full">REQUEST DEMO</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;