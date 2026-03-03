import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const PricingSection = () => {
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", challenge: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Early access form:", form);
    alert("🎉 You're on the list! We'll reach out soon.");
    setForm({ name: "", email: "", linkedin: "", challenge: "" });
  };

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="container mx-auto max-w-[1100px]">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 text-center tracking-[-0.01em]">
            Simple pricing. Stupid cheap. For now.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full relative" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
              <span className="glass-pill !text-[9px] absolute top-4 right-4 uppercase tracking-[0.2em] font-heading font-bold">Popular</span>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-25 mb-3 font-heading">Early Bird</p>
              <div className="font-heading font-extrabold text-[48px] mb-6 tracking-[-0.02em]"><span className="text-radium">₹99</span><span className="text-base font-normal opacity-30 ml-1">/mo</span></div>
              <ul className="space-y-3 font-body text-[13px] opacity-50">
                <li>✓ Unlimited comments</li>
                <li>✓ 3 voice variations</li>
                <li>✓ Priority generation speed</li>
                <li>✓ Lock in forever</li>
                <li className="opacity-40 text-[11px] pt-2">First 300 only</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 h-full opacity-50">
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-25 mb-3 font-heading">Regular</p>
              <div className="font-heading font-extrabold text-[48px] mb-6 tracking-[-0.02em]">₹199<span className="text-base font-normal opacity-30 ml-1">/mo</span></div>
              <ul className="space-y-3 font-body text-[13px] opacity-50">
                <li>✓ Unlimited comments</li>
                <li>✓ 3 voice variations</li>
                <li>✓ Standard speed</li>
                <li>✓ No lock-in discount</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 max-w-[560px] mx-auto">
            <h3 className="font-heading font-bold text-lg mb-6 opacity-90">Join Early Access</h3>
            <div className="space-y-3.5">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-25 focus:outline-none focus:border-white/20 transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-25 focus:outline-none focus:border-white/20 transition-colors"
              />
              <input
                type="url"
                placeholder="LinkedIn URL (optional)"
                value={form.linkedin}
                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-25 focus:outline-none focus:border-white/20 transition-colors"
              />
              <textarea
                placeholder="What's your biggest LinkedIn challenge?"
                value={form.challenge}
                onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                rows={3}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-25 focus:outline-none focus:border-white/20 transition-colors resize-none"
              />
              <button type="submit" className="btn-glow w-full text-center">
                Join Early Access – ₹99 →
              </button>
              <p className="text-[10px] opacity-20 text-center font-body pt-1">
                No spam. Unsubscribe anytime. Built by a solo 20yo founder who actually uses this daily.
              </p>
            </div>
          </form>
        </ScrollReveal>

        {/* Urgency strip */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card mt-10 py-3 text-center text-[11px] font-body opacity-60">
            <span className="urgency-dot inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-2 align-middle" />
            LIVE · 247 of 300 early bird spots remaining · Price doubles at 300
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
