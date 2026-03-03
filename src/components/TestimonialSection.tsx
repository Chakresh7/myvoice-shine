import ScrollReveal from "./ScrollReveal";

const TestimonialSection = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-[32px] md:text-[48px] leading-tight mb-12">
          What the first users are saying.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="glass-card p-10 md:p-14 relative">
          <span className="absolute top-6 left-8 text-[80px] opacity-[0.06] font-heading leading-none select-none">"</span>
          <blockquote className="font-body text-xl md:text-2xl leading-relaxed opacity-80 mb-8 relative z-10">
            "I dropped 10 thoughtful comments today in under 15 minutes. My notifications are insane right now."
          </blockquote>
          <p className="font-heading font-semibold text-sm opacity-50">
            Chakresh Kumar · 20-year-old founder · Ahmedabad, Gujarat
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["3× more profile views", "Higher reply rates", "Zero burnout"].map((s) => (
            <span key={s} className="glass-pill text-xs opacity-50">{s}</span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TestimonialSection;
