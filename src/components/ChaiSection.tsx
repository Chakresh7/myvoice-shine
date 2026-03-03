import ScrollReveal from "./ScrollReveal";

const ChaiSection = () => (
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-25 mb-5 font-heading">The Math</p>
        <h2 className="font-heading font-bold text-[26px] md:text-[42px] leading-[1.1] mb-16 tracking-[-0.01em]">
          Costs less than your monthly chai.<br className="hidden md:block" /> Grows more than your monthly chai.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 h-full" style={{ borderColor: "rgba(255,245,230,0.10)" }}>
            <h3 className="font-heading font-bold text-xl mb-6 opacity-80">☕ Your Monthly Chai</h3>
            <div className="space-y-3 font-body text-[14px] opacity-40 leading-relaxed">
              <p>Daily cost: <span className="opacity-100 font-semibold">₹20</span></p>
              <p>Monthly: <span className="opacity-100 font-semibold">₹600</span></p>
              <p className="pt-3 border-t border-white/[0.06]">Result: <span className="italic opacity-70">Good mood + caffeine</span></p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8 h-full" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <h3 className="font-heading font-bold text-xl mb-6">🚀 MyVoice Extension</h3>
            <div className="space-y-3 font-body text-[14px] opacity-40 leading-relaxed">
              <p>Monthly: <span className="opacity-100 font-semibold">₹99 early bird</span></p>
              <p>Comments: <span className="opacity-100 font-semibold">Unlimited</span></p>
              <p className="pt-3 border-t border-white/[0.06]">Result: <span className="italic opacity-70">10–30× more reach, replies, profile views, DMs, leads</span></p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center mt-16 font-heading font-semibold text-[17px] md:text-xl italic opacity-50 max-w-[580px] mx-auto leading-relaxed">
          "Half your chai budget. 10× your LinkedIn results. You can still have the chai."
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ChaiSection;
