import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
    {/* Glowing orb */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none" />

    <div className="container mx-auto text-center relative z-10 max-w-[900px]">
      <ScrollReveal>
        <div className="glass-pill inline-block mb-8 uppercase tracking-widest text-[11px] opacity-70">
          ✦ Chrome Extension · Early Access · ₹99/month
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h1 className="font-heading font-extrabold text-[40px] md:text-[72px] lg:text-[80px] leading-[1.05] mb-6 tracking-tight">
          Your Voice.<br />Their Feed.<br />Every Day.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-[17px] md:text-[18px] leading-[1.7] opacity-50 max-w-[620px] mx-auto mb-8 font-body">
          Scan any LinkedIn post. Get 3 authentic comment drafts written in YOUR exact tone — practical, direct, real. Tweak one word. Post in 10 seconds. No burnout, no spam, no robotic AI fluff.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["10–30 comments/day", "100% manual & safe", "₹99 early bird — 300 spots only"].map((t) => (
            <span key={t} className="glass-pill text-xs opacity-60">{t}</span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href="#pricing" className="btn-glow">Get Early Access →</a>
          <button className="btn-ghost">Watch Demo ↗</button>
        </div>
        <p className="text-[12px] opacity-30 mt-3">
          Price jumps to ₹199 after first 300 users. 247 spots remaining.
        </p>
      </ScrollReveal>

      {/* Mockup card */}
      <ScrollReveal delay={0.5}>
        <div className="glass-card glass-card-shimmer relative p-6 mt-16 text-left max-w-[520px] mx-auto">
          <div className="text-xs opacity-40 mb-3 font-body">LinkedIn Post by Ankur Warikoo</div>
          <p className="text-sm opacity-60 mb-5 font-body leading-relaxed">
            "Stop chasing followers. Start building trust. The best personal brand is consistency, not virality..."
          </p>
          <div className="space-y-3">
            {["A", "B", "C"].map((label, i) => (
              <div key={label} className="flex items-start gap-3 glass-card p-3 rounded-lg">
                <span className="glass-pill !p-0 w-7 h-7 flex items-center justify-center text-xs font-heading font-bold shrink-0">
                  {label}
                </span>
                <p className="text-xs opacity-60 font-body leading-relaxed">
                  {i === 0 && "This is so true. I stopped chasing numbers 6 months ago and focused on showing up daily — the DMs and opportunities followed naturally."}
                  {i === 1 && "Consistency > virality. I post 5x a week, nothing fancy, just real thoughts. My network has doubled in 3 months."}
                  {i === 2 && "The 'trust over followers' mindset changed everything for me. People buy from people they trust, not people they follow."}
                </p>
                <button className="shrink-0 opacity-40 hover:opacity-100 transition-opacity text-sm">📋</button>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
