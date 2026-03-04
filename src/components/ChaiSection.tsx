import ScrollReveal from "./ScrollReveal";

const ChaiSection = () => (
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-55 mb-5 font-heading">The Math</p>
        <h2 className="font-heading font-bold text-[26px] md:text-[42px] leading-[1.1] mb-16 tracking-[-0.01em]">
          Costs <span className="text-radium">less</span> than your monthly chai.<br className="hidden md:block" /> Grows <span className="text-radium">more</span> than your monthly chai.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Chai Card */}
        <ScrollReveal delay={0.1}>
          <div
            className="glass-card h-full overflow-hidden flex flex-col"
            style={{ borderColor: "rgba(255,245,230,0.10)" }}
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=700&q=80"
                alt="Chai tea"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-xl mb-6 opacity-80">☕ Your Monthly Chai</h3>
              <div className="space-y-3 font-body text-[14px] opacity-70 leading-relaxed">
                <p>Daily cost: <span className="opacity-100 font-semibold">₹20</span></p>
                <p>Monthly: <span className="opacity-100 font-semibold">₹600</span></p>
                <p className="pt-3 border-t border-white/[0.06]">
                  Result: <span className="italic opacity-70">Good mood + caffeine</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Extension Card */}
        <ScrollReveal delay={0.2}>
          <div
            className="glass-card h-full overflow-hidden flex flex-col"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80"
                alt="LinkedIn growth"
                className="w-full h-full object-cover"
              />
              {/* green tint overlay to match brand */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff8822] to-[#0f0f0f]" />
              {/* Badge */}
              <span className="absolute top-3 right-3 text-[11px] font-heading font-bold tracking-wider bg-radium text-black px-3 py-1 rounded-full uppercase">
                Early Bird
              </span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-xl mb-6">🚀 MyVoice Extension</h3>
              <div className="space-y-3 font-body text-[14px] opacity-70 leading-relaxed">
                <p>Monthly: <span className="opacity-100 font-semibold">₹99 early bird</span></p>
                <p>Comments: <span className="opacity-100 font-semibold">Unlimited</span></p>
                <p className="pt-3 border-t border-white/[0.06]">
                  Result: <span className="italic text-radium/80">10–30× more reach, replies, profile views, DMs, leads</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center mt-16 font-heading font-semibold text-[17px] md:text-xl italic opacity-75 max-w-[580px] mx-auto leading-relaxed">
          "Half your chai budget. 10× your LinkedIn results. You can still have the chai."
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ChaiSection;
