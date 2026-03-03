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
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-25 mb-5 font-heading">For You If</p>
        <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 tracking-[-0.01em]">
          Built for India's 170M<br className="hidden md:block" /> LinkedIn professionals.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cards.slice(0, 3).map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className={i === 0 ? "col-span-2" : ""}>
            <div className="glass-card glass-card-shimmer relative p-6 h-full group">
              <div className="text-2xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">{c.emoji}</div>
              <h3 className="font-heading font-bold text-[15px] mb-1.5 opacity-90">{c.title}</h3>
              <p className="text-[12px] opacity-40 font-body leading-relaxed">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
        {cards.slice(3).map((c, i) => (
          <ScrollReveal key={i + 3} delay={(i + 3) * 0.08}>
            <div className="glass-card glass-card-shimmer relative p-5 h-full group">
              <div className="text-lg mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">{c.emoji}</div>
              <h3 className="font-heading font-bold text-[13px] mb-1 opacity-90">{c.title}</h3>
              <p className="text-[11px] opacity-40 font-body leading-relaxed">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <p className="text-center mt-16 italic opacity-40 font-body text-[14px] max-w-[520px] mx-auto leading-relaxed">
          "If you're on LinkedIn and want daily presence without the daily grind — this is ₹99 well spent."
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhoSection;
