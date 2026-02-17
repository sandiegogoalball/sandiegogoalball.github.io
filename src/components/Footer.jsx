const Footer = () => {
  return (
    <footer className="bg-nearBlack text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">San Diego Goalball</h2>
            <p className="text-white/60">Empowering athletes through inclusive sports.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer Navigation">
            <a href="#home" className="hover:text-secondary transition-colors">Home</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#programs" className="hover:text-secondary transition-colors">Programs</a>
            <a href="#schedule" className="hover:text-secondary transition-colors">Schedule</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </nav>
        </div>
        <div className="text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} San Diego Goalball. All rights reserved.</p>
          <p className="mt-2">Highly accessible and mobile-first design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
