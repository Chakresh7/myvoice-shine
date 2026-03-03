import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Open & Click", desc: "On any LinkedIn post, click the MyVoice extension icon. A side panel slides in." },
  { num: "02", title: "Scan the Post", desc: "Hit 'Scan Post'. The extension reads the full post context instantly." },
  { num: "03", title: "Pick Your Comment", desc: "Get 3 variations written in your voice — editable, natural, never robotic." },
  { num: "04", title: "Post in Seconds", desc: "Copy or auto-insert into LinkedIn's comment box. You post it. Manual. Safe. Done." },
];

const SolutionSection = () => (
  <section id="how-it-works" className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-25 mb-5 font-heading">The Solution</p>
        <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 tracking-[-0.01em]">
          From post to comment<br className="hidden md:block" /> in under <span className="text-radium">10 seconds.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-4 gap-4 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] border-t border-dashed border-white/[0.06] -translate-y-1/2 z-0" />

        {steps.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="glass-card glass-card-shimmer relative p-6 text-center h-full z-10 group">
              <span className="font-heading text-[72px] font-extrabold opacity-[0.03] absolute top-0 left-1/2 -translate-x-1/2 select-none group-hover:opacity-[0.06] transition-opacity duration-500">
                {s.num}
              </span>
              <div className="relative z-10">
                <span className="font-heading font-bold text-[11px] opacity-30 block mb-7 tracking-[0.15em]">{s.num}</span>
                <h3 className="font-heading font-bold text-[15px] mb-3 opacity-90">{s.title}</h3>
                <p className="text-[13px] opacity-40 font-body leading-[1.7]">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
