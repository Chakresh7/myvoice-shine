import { Copy, Globe, ThumbsUp, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

// ── Typewriter for hero headline ──
const LINES = ["Your Voice.", "Their Feed.", "Every Day."];
const FULL  = LINES.join("\n");

const useTypewriter = (delay = 500, speed = 52) => {
  const [displayed, setDisplayed] = useState("");
  const [started,   setStarted]   = useState(false);
  const done = displayed.length >= FULL.length;

  // initial pause before typing starts
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  // type one character at a time
  useEffect(() => {
    if (!started || done) return;
    const t = setTimeout(
      () => setDisplayed(FULL.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [started, displayed, done, speed]);

  return { lines: displayed.split("\n"), done };
};

const drafts = [
  {
    tone: "INSIGHT",
    text: "This is so true. I stopped chasing numbers 6 months ago and focused on showing up daily — the DMs and opportunities followed naturally.",
    selected: true,
  },
  {
    tone: "STORY",
    text: "Consistency > virality. I post 5x a week, nothing fancy, just real thoughts. My network has doubled in 3 months.",
    selected: false,
  },
  {
    tone: "BOLD",
    text: "The 'trust over followers' mindset changed everything for me. People buy from people they trust, not people they follow.",
    selected: false,
  },
];

const HeroSection = () => {
  const { lines, done } = useTypewriter(600, 52);

  return (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-24 overflow-hidden">
    {/* Glowing orbs */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />
    <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

    <div className="container mx-auto text-center relative z-10 max-w-[880px]">
      <ScrollReveal>
        <div className="glass-pill inline-block mb-10 uppercase tracking-[0.18em] text-[10px] opacity-60 font-heading">
          ✦ Chrome Extension · Early Access · ₹99/month
        </div>
      </ScrollReveal>

      {/* Typewriter headline — no ScrollReveal wrapper needed, it appears via typing */}
      <h1 className="font-heading font-extrabold text-[42px] md:text-[72px] lg:text-[82px] leading-[1.02] mb-7 tracking-[-0.02em] min-h-[1.02em]">
        {lines.map((line, i) => (
          <span key={i}>
            {/* First line gets radium green */}
            {i === 0 ? <span className="text-radium">{line}</span> : line}
            {/* Line break between lines (not after the last) */}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
        {/* Blinking cursor — visible while typing, fades away when done */}
        <span
          className={`inline-block w-[3px] ml-1 rounded-sm bg-white align-middle transition-opacity duration-700 ${
            done ? "opacity-0" : "animate-pulse opacity-70"
          }`}
          style={{ height: "0.85em" }}
        />
      </h1>

      <ScrollReveal delay={0.2}>
        <p className="text-[16px] md:text-[18px] leading-[1.75] opacity-70 max-w-[580px] mx-auto mb-10 font-body">
          Scan any LinkedIn post. Get <span className="text-radium/70">3 authentic comment drafts</span> written in YOUR exact tone — practical, direct, real. Tweak one word. Post in 10 seconds.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {["10–30 comments/day", "100% manual & safe", "₹99 early bird — 300 spots only"].map((t) => (
            <span key={t} className="glass-pill text-[11px] opacity-75 font-body">{t}</span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <a href="#early-access-form" className="btn-glow">Get Early Access →</a>
          <button className="btn-ghost">Watch Demo ↗</button>
        </div>
        <p className="text-[11px] opacity-50 mt-4 font-body tracking-wide">
          Price jumps to ₹199 after first 300 users. 247 spots remaining.
        </p>
      </ScrollReveal>

      {/* Mockup card */}
      <ScrollReveal delay={0.5}>
        <div className="glass-card glass-card-shimmer relative mt-20 text-left max-w-[500px] mx-auto overflow-hidden">

          {/* ── LinkedIn post header ── */}
          <div className="p-5 pb-4">
            <div className="flex items-start gap-3 mb-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center text-white font-heading font-bold text-[13px] shrink-0 ring-2 ring-white/10">
                AW
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-heading font-bold text-[14px] leading-tight">Ankur Warikoo</span>
                  <span className="text-[9px] border border-white/20 rounded px-1 py-px opacity-50 font-heading leading-none">1st</span>
                </div>
                <p className="text-[11px] opacity-40 font-body leading-tight mt-0.5">Founder · Author · Speaker</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[10px] opacity-30 font-body">2h ·</span>
                  <Globe size={9} className="opacity-30" />
                </div>
              </div>
            </div>

            {/* Post text */}
            <p className="text-[13px] opacity-75 font-body leading-relaxed mb-4">
              "Stop chasing followers. Start building trust. The best personal brand is consistency, not virality..."
            </p>

            {/* Engagement bar */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/[0.07]">
              <span className="flex items-center gap-1 text-[10px] opacity-30 font-body">
                <ThumbsUp size={11} /> 1.2K
              </span>
              <span className="flex items-center gap-1 text-[10px] opacity-30 font-body">
                <MessageSquare size={11} /> 324 comments
              </span>
            </div>
          </div>

          {/* ── Generated drafts ── */}
          <div className="px-5 pb-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-heading uppercase tracking-[0.15em] opacity-35">3 comment drafts</span>
              <span className="text-[10px] text-radium/60 font-heading font-semibold tracking-wide">✦ ready in 2.1s</span>
            </div>

            <div className="space-y-2">
              {drafts.map((d, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-xl p-3 border transition-all ${
                    d.selected
                      ? "border-radium/35 bg-radium/[0.05]"
                      : "border-white/[0.06] bg-white/[0.02]"
                  }`}
                >
                  {/* Tone badge */}
                  <span
                    className={`text-[8px] font-heading font-bold px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 tracking-wider ${
                      d.selected
                        ? "bg-radium/20 text-radium"
                        : "bg-white/[0.08] text-white/40"
                    }`}
                  >
                    {d.tone}
                  </span>
                  <p className="text-[12px] opacity-70 font-body leading-relaxed flex-1">{d.text}</p>
                  <button className="shrink-0 opacity-20 hover:opacity-70 transition-opacity mt-0.5 cursor-pointer">
                    <Copy size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── Footer branding ── */}
          <div className="px-5 py-3 border-t border-white/[0.05] flex items-center justify-between">
            <span className="text-[10px] opacity-25 font-body">myvoice extension</span>
            <span className="text-[10px] text-radium/50 font-heading font-semibold">✦ YOUR VOICE</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default HeroSection;
