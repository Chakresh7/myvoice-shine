import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: "⏳", title: "The Blank Comment Box", desc: "You see a great post. You open the comment box. You type. Delete. Retype. Give up. 15 minutes gone." },
  { icon: "🤖", title: "Generic AI Sounds Fake", desc: "ChatGPT comments sound like everyone else's ChatGPT comments. Recruiters can tell. Your network can tell." },
  { icon: "🔥", title: "Inconsistency Kills Growth", desc: "You comment 20 times one week, zero the next. The algorithm forgets you exist." },
  { icon: "📉", title: "Missed Opportunities Daily", desc: "Every day without comments = missed profile views, connections, leads, and job pings." },
];

const ProblemSection = () => (
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-25 mb-5 font-heading">The Problem</p>
        <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 tracking-[-0.01em]">
          LinkedIn is exhausting when<br className="hidden md:block" /> you do it manually.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-4">
        {problems.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card glass-card-shimmer relative p-7 h-full group">
              <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{p.icon}</div>
              <h3 className="font-heading font-bold text-[17px] mb-2.5 opacity-90">{p.title}</h3>
              <p className="text-[14px] opacity-40 font-body leading-[1.7]">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="section-divider mt-16 mb-6" />
        <p className="text-center font-heading font-semibold text-[17px] opacity-60">
          Sound familiar? You're not lazy. The process is just broken.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
