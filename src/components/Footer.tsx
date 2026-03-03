const Footer = () => (
  <footer className="border-t border-white/[0.06] py-12 px-6">
    <div className="container mx-auto max-w-[1100px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs opacity-40 font-body">
        <div>
          <span className="font-heading font-bold text-sm opacity-100">MyVoice ✦</span>
          <span className="ml-3">Made with obsession in Ahmedabad, Gujarat</span>
        </div>
        <div>© 2026 Chakresh Kumar · Powered by Groq AI</div>
        <div className="flex gap-4">
          <a href="https://x.com/ChakreshVulli" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">X @ChakreshVulli</a>
          <span>Privacy</span>
          <span>Contact</span>
        </div>
      </div>
      <p className="text-center text-[11px] opacity-20 mt-8 font-body">
        Built solo at 20. No VC money. No team. Just chai and Cursor.
      </p>
    </div>
  </footer>
);

export default Footer;
