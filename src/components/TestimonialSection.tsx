import ScrollReveal from "./ScrollReveal";

const TestimonialSection = () => (
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-14 tracking-[-0.01em]">
          What the first users are saying.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="glass-card p-10 md:p-16 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          <span className="absolute top-4 left-8 text-[100px] opacity-[0.04] font-heading leading-none select-none">"</span>
          <blockquote className="font-body text-[19px] md:text-[22px] leading-[1.7] opacity-70 mb-8 relative z-10 max-w-[700px]">
            "I dropped <span className="text-radium/80">10 thoughtful comments</span> today in under 15 minutes. My notifications are insane right now."
          </blockquote>
          <p className="font-heading font-semibold text-[13px] opacity-40 tracking-wide">
            Chakresh Kumar · 20-year-old founder · Ahmedabad, Gujarat
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["3× more profile views", "Higher reply rates", "Zero burnout"].map((s) => (
            <span key={s} className="glass-pill text-[11px] opacity-40 font-body">{s}</span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TestimonialSection;
