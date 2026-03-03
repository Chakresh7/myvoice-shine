import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: "⏳", title: "The Blank Comment Box", desc: "You see a great post. You open the comment box. You type. Delete. Retype. Give up. 15 minutes gone." },
  { icon: "🤖", title: "Generic AI Sounds Fake", desc: "ChatGPT comments sound like everyone else's ChatGPT comments. Recruiters can tell. Your network can tell." },
  { icon: "🔥", title: "Inconsistency Kills Growth", desc: "You comment 20 times one week, zero the next. The algorithm forgets you exist." },
  { icon: "📉", title: "Missed Opportunities Daily", desc: "Every day without comments = missed profile views, connections, leads, and job pings." },
];

const ProblemSection = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] opacity-30 mb-4 font-heading">The Problem</p>
        <h2 className="font-heading font-bold text-[32px] md:text-[48px] leading-tight mb-16">
          LinkedIn is exhausting when<br className="hidden md:block" /> you do it manually.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        {problems.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card glass-card-shimmer relative p-7 h-full">
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-[15px] opacity-50 font-body leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <p className="text-center mt-14 font-heading font-semibold text-lg opacity-70">
          Sound familiar? You're not lazy. The process is just broken.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
