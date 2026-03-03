import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Open & Click", desc: "On any LinkedIn post, click the MyVoice extension icon. A side panel slides in." },
  { num: "02", title: "Scan the Post", desc: "Hit 'Scan Post'. The extension reads the full post context instantly." },
  { num: "03", title: "Pick Your Comment", desc: "Get 3 variations written in your voice — editable, natural, never robotic." },
  { num: "04", title: "Post in Seconds", desc: "Copy or auto-insert into LinkedIn's comment box. You post it. Manual. Safe. Done." },
];

const SolutionSection = () => (
  <section id="how-it-works" className="py-24 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] opacity-30 mb-4 font-heading">The Solution</p>
        <h2 className="font-heading font-bold text-[32px] md:text-[48px] leading-tight mb-16">
          From post to comment<br className="hidden md:block" /> in under 10 seconds.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-4 gap-5 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 border-t border-dashed border-white/10 -translate-y-1/2 z-0" />

        {steps.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="glass-card glass-card-shimmer relative p-6 text-center h-full z-10">
              <span className="font-heading text-[64px] font-extrabold opacity-[0.04] absolute top-2 left-1/2 -translate-x-1/2 select-none">
                {s.num}
              </span>
              <div className="relative z-10">
                <span className="font-heading font-bold text-sm opacity-40 block mb-6">{s.num}</span>
                <h3 className="font-heading font-bold text-base mb-3">{s.title}</h3>
                <p className="text-[14px] opacity-50 font-body leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
