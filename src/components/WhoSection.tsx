import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    emoji: "💼",
    title: "Sales & BDRs",
    desc: "Turn cold leads warm with daily comment visibility.",
    // Two professionals in a modern boardroom – deal-making energy
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    alt: "Business meeting",
    large: true,
    imgH: "h-44",
  },
  {
    emoji: "🎯",
    title: "Job Seekers & Freshers",
    desc: "Get noticed by recruiters without applying.",
    // Woman working at laptop in professional setting
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    alt: "Job seeker at laptop",
    large: true,
    imgH: "h-36",
  },
  {
    emoji: "🧠",
    title: "Freelancers & Coaches",
    desc: "Build authority one comment at a time.",
    // Minimal laptop + coffee workspace
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    alt: "Freelancer workspace",
    large: true,
    imgH: "h-36",
  },
  {
    emoji: "🚀",
    title: "Founders & Marketers",
    desc: "Stay top-of-mind without social media burnout.",
    // Startup team brainstorming
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
    alt: "Founders team",
    large: false,
    imgH: "h-28",
  },
  {
    emoji: "🔍",
    title: "Recruiters",
    desc: "Engage candidates organically.",
    // Professional handshake / business meeting
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80",
    alt: "Recruiter handshake",
    large: false,
    imgH: "h-28",
  },
  {
    emoji: "📚",
    title: "Students",
    desc: "Start building your brand early.",
    // Student with laptop in bright study setting
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80",
    alt: "Student studying",
    large: false,
    imgH: "h-28",
  },
  {
    emoji: "👤",
    title: "Anyone posting inconsistently",
    desc: "Fix the gap between intent and action.",
    // Person scrolling on phone – social media vibe
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
    alt: "Person on phone",
    large: false,
    imgH: "h-28",
  },
];

const WhoSection = () => (
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-55 mb-5 font-heading">For You If</p>
        <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 tracking-[-0.01em]">
          Built for India's <span className="text-radium">170M</span><br className="hidden md:block" /> LinkedIn professionals.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Top row — first card spans 2 cols */}
        {cards.slice(0, 3).map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className={i === 0 ? "col-span-2" : ""}>
            <div className="glass-card glass-card-shimmer overflow-hidden flex flex-col h-full group">
              {/* Image */}
              <div className={`relative w-full ${c.imgH} overflow-hidden flex-shrink-0`}>
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#111315]" />
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="text-xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">{c.emoji}</div>
                <h3 className="font-heading font-bold text-[15px] mb-1.5 opacity-90">{c.title}</h3>
                <p className="text-[12px] opacity-60 font-body leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* Bottom row — 4 smaller cards */}
        {cards.slice(3).map((c, i) => (
          <ScrollReveal key={i + 3} delay={(i + 3) * 0.08}>
            <div className="glass-card glass-card-shimmer overflow-hidden flex flex-col h-full group">
              {/* Image */}
              <div className={`relative w-full ${c.imgH} overflow-hidden flex-shrink-0`}>
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#111315]" />
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="text-base mb-1.5 grayscale group-hover:grayscale-0 transition-all duration-300">{c.emoji}</div>
                <h3 className="font-heading font-bold text-[12px] mb-1 opacity-90 leading-snug">{c.title}</h3>
                <p className="text-[11px] opacity-60 font-body leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <p className="text-center mt-16 italic opacity-70 font-body text-[14px] max-w-[520px] mx-auto leading-relaxed">
          "If you're on LinkedIn and want daily presence without the daily grind — this is ₹99 well spent."
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhoSection;
