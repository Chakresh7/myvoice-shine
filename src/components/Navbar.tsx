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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-0 border-b py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="font-heading font-bold text-[17px] tracking-[-0.02em]">
          MyVoice <span className="opacity-40">✦</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] opacity-60 font-body">
          <a href="#how-it-works" className="hover:opacity-100 transition-opacity duration-300">How it works</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity duration-300">Pricing</a>
          <a href="#pricing" className="btn-glow !py-2 !px-6 !text-[13px]">Get Access</a>
        </div>
        <a href="#pricing" className="md:hidden btn-glow !py-2 !px-5 !text-[13px]">Get Access</a>
      </div>
    </nav>
  );
};

export default Navbar;
