import Button from "../common/Button";

import insightCover from "../../assets/images/insights.svg";

const insights = [
  {
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: true,
  },
  {
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const InsightsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primaryBg font-sans py-24 text-white">
      {/* Background Glow */}
      <div className="absolute left-[-10px] top-[50%] h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <div className="max-w-[480px]">
              <h2 className="text-4xl leading-[1.08] tracking-tight text-[#E9F4F9] sm:text-5xl">
                Get yourself up-to-speed on all the things happening in fintech
              </h2>

              <div className="mt-12">
                <Button variant="secondary">INSIGHTS</Button>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="flex flex-col gap-8">
            {/* FEATURED CARD */}
            <div className="rounded-[28px] bg-[#01141B] p-6">
              <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={insightCover}
                    alt="Insight Cover"
                    draggable="false"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#00B4FD]">
                      Getting Started
                    </p>

                    <h3 className="mt-5 max-w-[420px] text-3xl font-normal leading-[1.15] text-[#EAF6FB]">
                      {insights[0].title}
                    </h3>

                    <div className="mt-6 flex items-center gap-4 text-sm text-[#6DA8C7]">
                      <span>{insights[0].author}</span>
                      <span>{insights[0].date}</span>
                    </div>
                  </div>

<button className={`mt-6 rounded-xl px-8 py-3 text-sm font-mono uppercase leading-[130%] tracking-wide cursor-pointer transition-all duration-500 border text-[#E9F4F980] border-[#E9F4F980] hover:border-white hover:bg-white hover:text-[#003ACE]`}>READ MORE</button>
                </div>
              </div>
            </div>

            {/* SMALL CARDS */}
            <div className="grid gap-8 md:grid-cols-2">
              {insights.slice(1).map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-xl bg-[#01141B] p-8"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[#00B4FD]">
                    Getting Started
                  </p>

                  <h3 className="mt-5 text-2xl font-normal leading-[1.08] tracking-[-0.04em] text-[#EAF6FB] sm:text-3xl">
                    {item.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-4 text-sm text-[#6DA8C7]">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                  </div>

<button className={`mt-6 rounded-xl px-8 py-3 text-sm font-mono uppercase leading-[130%] tracking-wide cursor-pointer transition-all duration-500 border text-[#E9F4F980] border-[#E9F4F980] hover:border-white hover:bg-white hover:text-[#003ACE]`}>READ MORE</button>
                </div>
              ))}
            </div>

            {/* FOOTER LINK */}
            <div className="flex justify-end">
              <button className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00B4FD]">
                <span className="relative leading-none">
                  Read All Insights
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
                  className="h-4 w-4"
                >
                  <path d="M5 12H19" />
                  <path d="M13 6L19 12L13 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;