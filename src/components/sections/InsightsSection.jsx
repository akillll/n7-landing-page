import Button from "../common/Button";
import {
  ArrowTextButton,
  GradientGlow,
  ReadMoreButton,
  sectionContainerClass,
} from "../common/sectionPrimitives";

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

const ArticleMeta = ({ author, date }) => (
  <div className="mt-6 flex items-center gap-4 text-sm text-[#6DA8C7]">
    <span>{author}</span>
    <span>{date}</span>
  </div>
);

const InsightEyebrow = () => (
  <p className="text-xs uppercase tracking-[0.22em] text-[#00B4FD]">
    Getting Started
  </p>
);

const FeaturedInsight = ({ item }) => (
  <article className="rounded-[28px] bg-[#01141B] p-6 transition-transform duration-500 ease-out lg:hover:-translate-y-1">
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
      <div className="overflow-hidden rounded-xl">
        <img
          src={insightCover}
          alt="Insight Cover"
          draggable="false"
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </div>

      <div className="flex h-full flex-col justify-between">
        <div>
          <InsightEyebrow />
          <h3 className="mt-5 max-w-[420px] text-3xl font-normal leading-[1.15] text-[#EAF6FB]">
            {item.title}
          </h3>
          <ArticleMeta author={item.author} date={item.date} />
        </div>

        <ReadMoreButton />
      </div>
    </div>
  </article>
);

const SmallInsightCard = ({ item }) => (
  <article className="flex flex-col rounded-xl bg-[#01141B] p-8 transition-transform duration-500 ease-out lg:hover:-translate-y-1">
    <InsightEyebrow />

    <h3 className="mt-5 text-2xl font-normal leading-[1.08] tracking-[-0.04em] text-[#EAF6FB] sm:text-3xl">
      {item.title}
    </h3>

    <ArticleMeta author={item.author} date={item.date} />
    <ReadMoreButton />
  </article>
);

const InsightsSection = () => {
  const [featuredInsight, ...secondaryInsights] = insights;

  return (
    <section className="relative overflow-hidden bg-primaryBg py-24 font-sans text-white">
      {/* Background Glow */}
      <GradientGlow className="left-[-10px] top-[50%] h-[500px] w-[500px] -translate-y-1/2 opacity-20 blur-[120px]" />

      <div className={`relative z-10 ${sectionContainerClass}`}>
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col lg:sticky lg:top-24">
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
            <FeaturedInsight item={featuredInsight} />

            {/* SMALL CARDS */}
            <div className="grid gap-8 md:grid-cols-2">
              {secondaryInsights.map((item, index) => (
                <SmallInsightCard key={`${item.title}-${index}`} item={item} />
              ))}
            </div>

            {/* FOOTER LINK */}
            <div className="flex justify-end">
              <ArrowTextButton>Read All Insights</ArrowTextButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
