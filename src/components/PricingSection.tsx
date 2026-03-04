import { useState, useEffect, useRef, FormEvent } from "react";
import { User, Mail, Link2, MessageCircle, Check } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import ScrollReveal from "./ScrollReveal";

const TOTAL_SPOTS = 300;
const TAKEN_SPOTS = 247;
const pct = Math.round((TAKEN_SPOTS / TOTAL_SPOTS) * 100);

// Animates the spots counter: counts down from (target + offset) to target when visible
const useAnimatedSpots = (target: number, offset = 9) => {
  const [count, setCount] = useState(target + offset);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let triggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          let current = target + offset;
          setCount(current);
          const tick = () => {
            current--;
            setCount(current);
            if (current > target) setTimeout(tick, 110);
          };
          setTimeout(tick, 500);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, offset]);

  return { count, ref };
};

const perks = [
  "Unlimited comment drafts",
  "3 voice tone variations",
  "Priority generation speed",
  "Early-bird price locked forever",
  "Direct founder support",
];

const PricingSection = () => {
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", challenge: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { count: spotsLeft, ref: counterRef } = useAnimatedSpots(TOTAL_SPOTS - TAKEN_SPOTS);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await addDoc(collection(db, "waitlist"), {
        name: form.name,
        email: form.email,
        linkedin: form.linkedin || null,
        challenge: form.challenge || null,
        submittedAt: serverTimestamp(),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", linkedin: "", challenge: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Firestore error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm font-body placeholder:opacity-40 focus:outline-none focus:border-radium/40 focus:bg-radium/[0.03] transition-all pl-10";

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="container mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-55 mb-5 font-heading text-center">Pricing</p>
          <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 text-center tracking-[-0.01em]">
            Simple pricing. <span className="text-radium">Stupid cheap.</span> For now.
          </h2>
        </ScrollReveal>

        {/* Pricing tier cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full relative" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
              <span className="glass-pill !text-[9px] absolute top-4 right-4 uppercase tracking-[0.2em] font-heading font-bold">Popular</span>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-55 mb-3 font-heading">Early Bird</p>
              <div className="font-heading font-extrabold text-[48px] mb-6 tracking-[-0.02em]">
                <span className="text-radium">₹99</span>
                <span className="text-base font-normal opacity-55 ml-1">/mo</span>
              </div>
              <ul className="space-y-3 font-body text-[13px] opacity-80">
                {perks.map((p) => <li key={p}>✓ {p}</li>)}
                <li className="opacity-60 text-[11px] pt-2">First 300 only</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 h-full opacity-50">
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-55 mb-3 font-heading">Regular</p>
              <div className="font-heading font-extrabold text-[48px] mb-6 tracking-[-0.02em]">
                ₹199<span className="text-base font-normal opacity-55 ml-1">/mo</span>
              </div>
              <ul className="space-y-3 font-body text-[13px] opacity-75">
                <li>✓ Unlimited comments</li>
                <li>✓ 3 voice variations</li>
                <li>✓ Standard speed</li>
                <li>✓ No lock-in discount</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Join form — 2-column ── */}
        <ScrollReveal delay={0.25}>
          <div id="early-access-form" className="glass-card overflow-hidden max-w-[860px] mx-auto">
            <div className="grid md:grid-cols-[1fr_1.3fr]">

              {/* Left — value panel */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.06] flex flex-col justify-between gap-8">
                <div>
                  {/* Price badge */}
                  <div className="inline-flex items-baseline gap-1.5 mb-6">
                    <span className="font-heading font-extrabold text-[42px] text-radium tracking-tight leading-none">₹99</span>
                    <span className="text-sm opacity-50 font-body">/month</span>
                    <span className="ml-2 text-[10px] bg-radium/15 text-radium font-heading font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Early Bird</span>
                  </div>

                  {/* What you unlock */}
                  <p className="text-[11px] uppercase tracking-[0.2em] opacity-40 font-heading mb-4">What you unlock</p>
                  <ul className="space-y-2.5">
                    {perks.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[13px] font-body opacity-80">
                        <span className="w-4 h-4 rounded-full bg-radium/15 flex items-center justify-center shrink-0">
                          <Check size={9} className="text-radium" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spots remaining */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-body opacity-50">Spots remaining</span>
                    <span className="text-[11px] font-heading font-bold text-radium">{spotsLeft} / {TOTAL_SPOTS}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-radium transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-[10px] opacity-35 font-body mt-2">Price jumps to ₹199 after 300 signups</p>
                </div>
              </div>

              {/* Right — form */}
              <div className="p-8 md:p-10">
                {submitted ? (
                  /* ── Success state ── */
                  <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-6">
                    <div className="w-14 h-14 rounded-full bg-radium/15 flex items-center justify-center">
                      <Check size={26} className="text-radium" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[20px] mb-2">You're on the list!</h3>
                      <p className="text-[13px] opacity-60 font-body leading-relaxed max-w-[260px] mx-auto">
                        We'll reach out soon with early access details. Watch your inbox.
                      </p>
                    </div>
                    <span className="text-[11px] font-heading font-bold text-radium bg-radium/10 px-4 py-1.5 rounded-full">
                      Early Bird · ₹99/month locked in ✦
                    </span>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading font-bold text-[18px] mb-1 opacity-95">Reserve your spot</h3>
                    <p className="text-[12px] opacity-45 font-body mb-6">Takes 30 seconds. No payment today.</p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Name */}
                      <div className="relative">
                        <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
                        <input
                          required
                          type="text"
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputBase}
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
                        <input
                          required
                          type="email"
                          placeholder="Email address"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputBase}
                        />
                      </div>

                      {/* LinkedIn */}
                      <div className="relative">
                        <Link2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
                        <input
                          type="url"
                          placeholder="LinkedIn URL (optional)"
                          value={form.linkedin}
                          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                          className={inputBase}
                        />
                      </div>

                      {/* Challenge */}
                      <div className="relative">
                        <MessageCircle size={14} className="absolute left-3.5 top-3.5 opacity-30 pointer-events-none" />
                        <textarea
                          placeholder="Your biggest LinkedIn challenge?"
                          value={form.challenge}
                          onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                          rows={3}
                          className={`${inputBase} resize-none`}
                        />
                      </div>

                      {error && (
                        <p className="text-[12px] text-red-400 font-body text-center">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-glow w-full text-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? "Saving…" : "Join Early Access – ₹99 →"}
                      </button>

                      <p className="text-[10px] opacity-35 text-center font-body pt-0.5 leading-relaxed">
                        No spam. No payment today. Built by a solo 20yo founder who uses this daily.
                      </p>
                    </form>
                  </>
                )}
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* ── Urgency strip ── */}
        <ScrollReveal delay={0.3}>
          <div ref={counterRef} className="glass-card mt-5 overflow-hidden" style={{ borderColor: "rgba(251,146,60,0.18)" }}>
            <div className="px-6 py-5">

              {/* Top label row */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-[10px] font-heading uppercase tracking-[0.2em] opacity-80">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                  Live · Early Bird Closing
                </span>
                <span className="text-[10px] font-body opacity-65 hidden sm:block">
                  12 people joined in the last 24h
                </span>
              </div>

              {/* Main row: big count + progress */}
              <div className="flex items-center gap-5 sm:gap-8">

                {/* Big remaining number */}
                <div className="shrink-0 text-center min-w-[56px]">
                  <div className="font-heading font-extrabold text-[40px] leading-none text-amber-400 tabular-nums">
                    {spotsLeft}
                  </div>
                  <div className="text-[9px] font-heading uppercase tracking-wider opacity-70 mt-1">
                    spots left
                  </div>
                </div>

                {/* Progress section */}
                <div className="flex-1">
                  {/* Bar */}
                  <div className="relative h-2.5 rounded-full bg-white/[0.05] overflow-hidden mb-2.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"
                      style={{ width: `${pct}%`, boxShadow: "0 0 12px rgba(251,146,60,0.4)" }}
                    />
                  </div>
                  {/* Bar labels */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-body opacity-65">
                      {TAKEN_SPOTS} of {TOTAL_SPOTS} spots taken ({pct}%)
                    </span>
                    <span className="text-[11px] font-heading font-bold">
                      <span className="text-radium">₹99</span>
                      <span className="opacity-60 mx-1.5">→</span>
                      <span className="opacity-80 line-through decoration-red-400">₹199</span>
                      <span className="opacity-60 text-[10px] font-normal ml-1">at 300</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom urgency line */}
              <p className="text-[11px] font-body opacity-75 mt-3 text-center">
                Lock in <span className="text-amber-400 font-semibold">₹99/month forever</span> — price never goes back down once 300 is hit.
              </p>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
