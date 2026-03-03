import ScrollReveal from "./ScrollReveal";

const cards = [
  { emoji: "💼", title: "Sales & BDRs", desc: "Turn cold leads warm with daily comment visibility.", large: true },
  { emoji: "🎯", title: "Job Seekers & Freshers", desc: "Get noticed by recruiters without applying.", large: true },
  { emoji: "🧠", title: "Freelancers & Coaches", desc: "Build authority one comment at a time.", large: true },
  { emoji: "🚀", title: "Founders & Marketers", desc: "Stay top-of-mind without social media burnout.", large: false },
  { emoji: "🔍", title: "Recruiters", desc: "Engage candidates organically.", large: false },
  { emoji: "📚", title: "Students", desc: "Start building your brand early.", large: false },
  { emoji: "👤", title: "Anyone posting inconsistently", desc: "Fix the gap between intent and action.", large: false },
];

const WhoSection = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] opacity-30 mb-4 font-heading">For You If</p>
        <h2 className="font-heading font-bold text-[32px] md:text-[48px] leading-tight mb-16">
          Built for India's 170M<br className="hidden md:block" /> LinkedIn professionals.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.slice(0, 3).map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className={i === 0 ? "col-span-2" : ""}>
            <div className="glass-card glass-card-shimmer relative p-6 h-full">
              <div className="text-2xl mb-3">{c.emoji}</div>
              <h3 className="font-heading font-bold text-base mb-1">{c.title}</h3>
              <p className="text-[13px] opacity-50 font-body">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
        {cards.slice(3).map((c, i) => (
          <ScrollReveal key={i + 3} delay={(i + 3) * 0.08}>
            <div className="glass-card glass-card-shimmer relative p-5 h-full">
              <div className="text-xl mb-2">{c.emoji}</div>
              <h3 className="font-heading font-bold text-sm mb-1">{c.title}</h3>
              <p className="text-[12px] opacity-50 font-body">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <p className="text-center mt-14 italic opacity-50 font-body text-[15px] max-w-[550px] mx-auto">
          "If you're on LinkedIn and want daily presence without the daily grind — this is ₹99 well spent."
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhoSection;
