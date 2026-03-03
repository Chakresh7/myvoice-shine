import ScrollReveal from "./ScrollReveal";

const ChaiSection = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] opacity-30 mb-4 font-heading">The Math</p>
        <h2 className="font-heading font-bold text-[28px] md:text-[44px] leading-tight mb-16">
          Costs less than your monthly chai.<br className="hidden md:block" /> Grows more than your monthly chai.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 h-full" style={{ borderColor: "rgba(255,245,230,0.12)" }}>
            <h3 className="font-heading font-bold text-xl mb-6">☕ Your Monthly Chai</h3>
            <div className="space-y-3 font-body text-[15px] opacity-60 leading-relaxed">
              <p>Daily cost: <span className="opacity-100 font-semibold">₹20</span></p>
              <p>Monthly: <span className="opacity-100 font-semibold">₹600</span></p>
              <p className="pt-2 border-t border-white/10">Result: <span className="italic">Good mood + caffeine</span></p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8 h-full" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
            <h3 className="font-heading font-bold text-xl mb-6">🚀 MyVoice Extension</h3>
            <div className="space-y-3 font-body text-[15px] opacity-60 leading-relaxed">
              <p>Monthly: <span className="opacity-100 font-semibold">₹99 early bird</span></p>
              <p>Comments: <span className="opacity-100 font-semibold">Unlimited</span></p>
              <p className="pt-2 border-t border-white/10">Result: <span className="italic">10–30× more reach, replies, profile views, DMs, leads</span></p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center mt-14 font-heading font-semibold text-lg md:text-xl italic opacity-60 max-w-[600px] mx-auto">
          "Half your chai budget. 10× your LinkedIn results. You can still have the chai."
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ChaiSection;
