import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="/" onClick={() => window.location.reload()} className="font-heading font-bold text-[17px] tracking-[-0.02em]">
          MyVoice <span className="text-radium/60">✦</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] opacity-80 font-body">
          <a href="#how-it-works" className="hover:opacity-100 transition-opacity duration-300">How it works</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity duration-300">Pricing</a>
          <a href="#early-access-form" className="btn-glow !py-2 !px-6 !text-[13px]">Get Access</a>
        </div>
        <a href="#early-access-form" className="md:hidden btn-glow !py-2 !px-5 !text-[13px]">Get Access</a>
      </div>
    </nav>
  );
};

export default Navbar;
