const items = [
  "Founders", "Sales Reps", "Recruiters", "Freelancers", "Job Seekers",
  "Marketers", "Students", "Coaches", "BDRs", "Startup Teams",
];

const SocialProofBar = () => (
  <section className="py-6 border-y border-white/[0.06] overflow-hidden">
    <div className="flex marquee-track whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-xs opacity-30 mx-4 font-body">
          Used by {item} <span className="mx-3 opacity-50">✦</span>
        </span>
      ))}
    </div>
  </section>
);

export default SocialProofBar;
