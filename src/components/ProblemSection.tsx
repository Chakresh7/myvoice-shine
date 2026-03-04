import ScrollReveal from "./ScrollReveal";

const ProblemSection = () => (
  <section className="py-28 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-55 mb-5 font-heading">The Problem</p>
        <h2 className="font-heading font-bold text-[30px] md:text-[46px] leading-[1.1] mb-16 tracking-[-0.01em]">
          LinkedIn is <span className="text-radium">exhausting</span> when<br className="hidden md:block" /> you do it <span className="text-radium">manually.</span>
        </h2>
      </ScrollReveal>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr pb-4">

        {/* Card 1 — wide (2 cols) */}
        <ScrollReveal className="md:col-span-2">
          <div className="glass-card glass-card-shimmer relative p-6 h-full flex flex-col group overflow-hidden">
            {/* Visual — grows to fill */}
            <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.05] p-5 mb-7 overflow-hidden flex flex-col justify-end gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-28 rounded-full bg-white/15" />
                  <div className="h-1.5 w-16 rounded-full bg-white/08" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 rounded-full bg-white/10 w-full" />
                <div className="h-1.5 rounded-full bg-white/08 w-5/6" />
                <div className="h-1.5 rounded-full bg-white/06 w-3/4" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
                <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 flex items-center gap-1 overflow-hidden">
                  <span className="problem-type text-[12px] text-white/45 font-body">Totally agree, consistency always beats…</span>
                  <span className="text-white/40 animate-pulse shrink-0">|</span>
                </div>
              </div>
            </div>
            {/* Text — fixed at bottom */}
            <h3 className="font-heading font-bold text-[17px] mb-1.5 opacity-90">The Blank Comment Box</h3>
            <p className="text-[13px] opacity-70 font-body leading-[1.65]">You see a great post. You open the comment box. You type. Delete. Retype. Give up. 15 minutes gone.</p>
          </div>
        </ScrollReveal>

        {/* Card 2 — single col */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card glass-card-shimmer relative p-6 h-full flex flex-col group overflow-hidden">
            {/* Visual — grows to fill */}
            <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.05] p-4 mb-7 overflow-hidden flex flex-col justify-center gap-2.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="ai-row bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2.5 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/10 shrink-0 mt-0.5" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-1.5 rounded-full bg-white/12 w-full" />
                    <div className="h-1.5 rounded-full bg-white/08 w-4/5" />
                    <div className="h-1.5 rounded-full bg-white/05 w-3/5" />
                  </div>
                </div>
              ))}
            </div>
            {/* Text — fixed at bottom */}
            <h3 className="font-heading font-bold text-[17px] mb-1.5 opacity-90">Generic AI Sounds Fake</h3>
            <p className="text-[13px] opacity-70 font-body leading-[1.65]">ChatGPT comments sound like everyone else's. Recruiters can tell. Your network can tell.</p>
          </div>
        </ScrollReveal>

        {/* Card 3 — single col */}
        <ScrollReveal delay={0.15}>
          <div className="glass-card glass-card-shimmer relative p-6 h-full flex flex-col group overflow-hidden">
            {/* Visual — grows to fill */}
            <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.05] px-5 pt-5 pb-3 mb-7 overflow-hidden flex flex-col justify-end">
              <div className="flex items-end gap-2 flex-1">
                {[75, 5, 85, 5, 60, 5, 8].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t problem-bar"
                    style={{
                      height: `${h}%`,
                      background: h > 20 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.05)",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
              <div className="flex mt-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-[9px] text-white/25 font-body">{d}</span>
                ))}
              </div>
            </div>
            {/* Text — fixed at bottom */}
            <h3 className="font-heading font-bold text-[17px] mb-1.5 opacity-90">Inconsistency Kills Growth</h3>
            <p className="text-[13px] opacity-70 font-body leading-[1.65]">You comment 20 times one week, zero the next. The algorithm forgets you exist.</p>
          </div>
        </ScrollReveal>

        {/* Card 4 — wide (2 cols) */}
        <ScrollReveal delay={0.2} className="md:col-span-2">
          <div className="glass-card glass-card-shimmer relative p-6 h-full flex flex-col group overflow-hidden">
            {/* Visual — grows to fill */}
            <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.05] p-5 mb-7 overflow-hidden flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Profile View", sub: "Recruiter at Google", dim: false },
                  { label: "Connection Req", sub: "VP Sales · Bangalore", dim: true },
                  { label: "DM Received", sub: "Loved your insight…", dim: false },
                  { label: "Post Reply", sub: "Great point about…", dim: true },
                  { label: "Job Ping", sub: "You matched 4 roles", dim: false },
                  { label: "Lead Inbound", sub: "Saw your comment on…", dim: true },
                ].map((n, i) => (
                  <div
                    key={i}
                    className={`bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5 ${n.dim ? "missed-tile" : ""}`}
                    style={{
                      opacity: n.dim ? 0.15 : 0.75,
                      animationDelay: n.dim ? `${i * 0.9}s` : undefined,
                    }}
                  >
                    <div className="text-[9px] font-heading font-bold text-white mb-1 truncate">{n.label}</div>
                    <div className="text-[9px] font-body text-white/50 truncate">{n.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Text — fixed at bottom */}
            <h3 className="font-heading font-bold text-[17px] mb-1.5 opacity-90">Missed Opportunities Daily</h3>
            <p className="text-[13px] opacity-70 font-body leading-[1.65]">Every day without comments = missed profile views, connections, leads, and job pings.</p>
          </div>
        </ScrollReveal>

      </div>

      <ScrollReveal delay={0.4}>
        <div className="section-divider mt-20 mb-12" />
        <p className="text-center font-heading font-semibold text-[17px] opacity-60">
          Sound familiar? You're not lazy. <span className="text-radium">The process is just broken.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
