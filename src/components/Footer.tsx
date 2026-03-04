const Footer = () => (
  <footer className="py-14 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <div className="section-divider mb-12" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] opacity-65 font-body">
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-[14px] opacity-100">MyVoice ✦</span>
        </div>
        <div>© 2026 Chakresh Kumar · Powered by Groq AI</div>
        <div className="flex gap-5">
          <a href="https://x.com/ChakreshVulli" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-300">X @ChakreshVulli</a>
          <span>Privacy</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
