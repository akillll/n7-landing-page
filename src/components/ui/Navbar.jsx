import { useState, useEffect } from "react";
import Button from "../common/Button";

const NavItem = ({
  label,
  href = "#",
  hasDropdown = false,
  mobile = false,
}) => {
  return (
    <a
      href={href}
      className={`
        group flex items-center gap-1 transition
        ${
          mobile
            ? "rounded-lg px-3 py-2 text-sm tracking-widest text-gray-300 hover:bg-white/10 hover:text-white"
            : "text-sm tracking-widest text-gray-300 hover:text-white"
        }
      `}
    >
      <span>{label}</span>

      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="mt-[1px] h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
};

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
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-5xl rounded-xl px-3 py-2 font-mono text-[#E9F4F9] transition-all duration-300 ${
          isScrolled
            ? "bg-[#2F2F2FB2]/70 shadow-lg backdrop-blur-sm"
            : "bg-[#2F2F2FB2]/70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="font-sans text-2xl font-medium tracking-widest">
            N7
          </span>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:flex">
            <NavItem label="SOLUTIONS" hasDropdown />
            <NavItem label="RESOURCES" hasDropdown />
            <NavItem label="ABOUT US" />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              className="
                cursor-pointer rounded-md border border-[#E9F4F9]
                px-8 py-1 text-sm font-medium uppercase tracking-wide
                transition-all duration-500
                hover:border-white hover:bg-white hover:text-[#003ACE]
              "
            >
              REQUEST DEMO
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-96 pt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            <NavItem label="SOLUTIONS" hasDropdown mobile />
            <NavItem label="RESOURCES" hasDropdown mobile />
            <NavItem label="ABOUT US" mobile />

            <div className="mt-3 pb-1">
              <Button variant="secondary" className="w-full">
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;