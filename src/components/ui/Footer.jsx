import n7logo from "../../assets/images/N7-logo.svg";

const footerLinks = [
  {
    title: "Solutions",
    items: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    items: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    items: ["LinkedIn", "X"],
  },
];

const FooterLinksColumn = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-white">{title}</h3>

      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <button
            key={item}
            className="group flex items-center justify-between gap-4 text-left text-sm text-[#8FA3AD] transition-colors duration-300 hover:text-[#00B4FD]"
          >
            <span>{item}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00B4FD"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12H19" />
              <path d="M13 6L19 12L13 18" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primaryBg to-[#031E2A] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[340px_1fr]">
          {/* LEFT LOGO */}
          <div className="flex items-start justify-center lg:justify-start">
            <img
              src={n7logo}
              alt="N7"
              draggable="false"
              className="h-auto w-[240px] object-contain sm:w-[300px] lg:w-[340px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-16">
            {/* LOCATIONS */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-sm font-medium text-white">London</h3>

                <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[#8FA3AD]">
                  Linkitia Infosystems Ltd — CB7, 26 Main Road Sundridge, TN14
                  6EP, England, United Kingdom.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">Dubai</h3>

                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[#8FA3AD]">
                  Linkitia Infosystems Ltd — CB7, Jumeirah Business Centre 5
                  Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">India</h3>

                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[#8FA3AD]">
                  Linkitia Infosystems Ltd — CB7, Nirmal, Anand Nagar, Suncity
                  Road, Pune, Maharashtra, 411041, India
                </p>
              </div>
            </div>

            {/* LINKS */}
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {footerLinks.map((section) => (
                <FooterLinksColumn
                  key={section.title}
                  title={section.title}
                  items={section.items}
                />
              ))}
            </div>

            {/* COPYRIGHT */}
            <div>
              <p className="max-w-4xl text-xs leading-relaxed text-[#5E7480]">
                Copyright © 2022 by Linkitia Infosystems Limited — (CB7 and N7
                as Commercial Brand) — Registered under the Companies Act 2006
                in England and Wales | Number of Incorporation 13100992
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;