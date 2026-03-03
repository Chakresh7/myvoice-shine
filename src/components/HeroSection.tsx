import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-24 overflow-hidden">
    {/* Glowing orbs */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />
    <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

    <div className="container mx-auto text-center relative z-10 max-w-[880px]">
      <ScrollReveal>
        <div className="glass-pill inline-block mb-10 uppercase tracking-[0.18em] text-[10px] opacity-60 font-heading">
          ✦ Chrome Extension · Early Access · ₹99/month
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h1 className="font-heading font-extrabold text-[42px] md:text-[72px] lg:text-[82px] leading-[1.02] mb-7 tracking-[-0.02em]">
          Your Voice.<br />Their Feed.<br />Every Day.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-[16px] md:text-[18px] leading-[1.75] opacity-40 max-w-[580px] mx-auto mb-10 font-body">
          Scan any LinkedIn post. Get 3 authentic comment drafts written in YOUR exact tone — practical, direct, real. Tweak one word. Post in 10 seconds.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {["10–30 comments/day", "100% manual & safe", "₹99 early bird — 300 spots only"].map((t) => (
            <span key={t} className="glass-pill text-[11px] opacity-50 font-body">{t}</span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <a href="#pricing" className="btn-glow">Get Early Access →</a>
          <button className="btn-ghost">Watch Demo ↗</button>
        </div>
        <p className="text-[11px] opacity-20 mt-4 font-body tracking-wide">
          Price jumps to ₹199 after first 300 users. 247 spots remaining.
        </p>
      </ScrollReveal>

      {/* Mockup card */}
      <ScrollReveal delay={0.5}>
        <div className="glass-card glass-card-shimmer relative p-6 mt-20 text-left max-w-[500px] mx-auto">
          <div className="text-[11px] opacity-30 mb-3 font-body uppercase tracking-widest">LinkedIn Post by Ankur Warikoo</div>
          <p className="text-sm opacity-50 mb-5 font-body leading-relaxed">
            "Stop chasing followers. Start building trust. The best personal brand is consistency, not virality..."
          </p>
          <div className="space-y-2.5">
            {["A", "B", "C"].map((label, i) => (
              <div key={label} className="flex items-start gap-3 glass-card p-3 rounded-lg">
                <span className="glass-pill !p-0 w-6 h-6 flex items-center justify-center text-[10px] font-heading font-bold shrink-0 opacity-70">
                  {label}
                </span>
                <p className="text-[12px] opacity-50 font-body leading-relaxed">
                  {i === 0 && "This is so true. I stopped chasing numbers 6 months ago and focused on showing up daily — the DMs and opportunities followed naturally."}
                  {i === 1 && "Consistency > virality. I post 5x a week, nothing fancy, just real thoughts. My network has doubled in 3 months."}
                  {i === 2 && "The 'trust over followers' mindset changed everything for me. People buy from people they trust, not people they follow."}
                </p>
                <button className="shrink-0 opacity-30 hover:opacity-80 transition-opacity text-xs">📋</button>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
