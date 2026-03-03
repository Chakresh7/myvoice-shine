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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-0 border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-heading font-bold text-lg tracking-tight">
          MyVoice <span className="opacity-50">✦</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm opacity-70">
          <a href="#how-it-works" className="hover:opacity-100 transition-opacity">How it works</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a>
          <a href="#pricing" className="btn-glow !py-2 !px-5 !text-sm">Get Access</a>
        </div>
        <a href="#pricing" className="md:hidden btn-glow !py-2 !px-5 !text-sm">Get Access</a>
      </div>
    </nav>
  );
};

export default Navbar;
