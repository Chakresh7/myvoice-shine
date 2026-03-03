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
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-[1100px]">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] leading-tight mb-16 text-center">
            Simple pricing. Stupid cheap. For now.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full relative" style={{ borderColor: "rgba(255,255,255,0.20)" }}>
              <span className="glass-pill !text-[10px] absolute top-4 right-4 uppercase tracking-widest font-heading font-bold">Popular</span>
              <p className="text-xs uppercase tracking-widest opacity-30 mb-2 font-heading">Early Bird</p>
              <div className="font-heading font-extrabold text-5xl mb-6">₹99<span className="text-lg font-normal opacity-40">/mo</span></div>
              <ul className="space-y-3 font-body text-[14px] opacity-60">
                <li>✓ Unlimited comments</li>
                <li>✓ 3 voice variations</li>
                <li>✓ Priority generation speed</li>
                <li>✓ Lock in forever</li>
                <li className="opacity-40 text-xs pt-2">First 300 only</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 h-full opacity-60">
              <p className="text-xs uppercase tracking-widest opacity-30 mb-2 font-heading">Regular</p>
              <div className="font-heading font-extrabold text-5xl mb-6">₹199<span className="text-lg font-normal opacity-40">/mo</span></div>
              <ul className="space-y-3 font-body text-[14px] opacity-50">
                <li>✓ Unlimited comments</li>
                <li>✓ 3 voice variations</li>
                <li>✓ Standard speed</li>
                <li>✓ No lock-in discount</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 max-w-[600px] mx-auto">
            <h3 className="font-heading font-bold text-xl mb-6">Join Early Access</h3>
            <div className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-30 focus:outline-none focus:border-white/25 transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-30 focus:outline-none focus:border-white/25 transition-colors"
              />
              <input
                type="url"
                placeholder="LinkedIn URL (optional)"
                value={form.linkedin}
                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-30 focus:outline-none focus:border-white/25 transition-colors"
              />
              <textarea
                placeholder="What's your biggest LinkedIn challenge?"
                value={form.challenge}
                onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body placeholder:opacity-30 focus:outline-none focus:border-white/25 transition-colors resize-none"
              />
              <button type="submit" className="btn-glow w-full text-center">
                Join Early Access – ₹99 →
              </button>
              <p className="text-[11px] opacity-30 text-center font-body">
                No spam. Unsubscribe anytime. Built by a solo 20yo founder who actually uses this daily.
              </p>
            </div>
          </form>
        </ScrollReveal>

        {/* Urgency strip */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card mt-10 py-3 text-center text-xs font-body opacity-70">
            <span className="urgency-dot inline-block w-2 h-2 rounded-full bg-red-500 mr-2 align-middle" />
            LIVE · 247 of 300 early bird spots remaining · Price doubles at 300
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
