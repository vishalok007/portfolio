import { useState, useEffect } from "react";
import { Menu, X, Terminal, Sparkles, Send, FileText } from "lucide-react";
import { portfolio } from "../constants/portfolio";

type Props = {
  onOpenResume?: () => void;
};

export default function Navbar({ onOpenResume }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "playground", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AI Playground", href: "#playground" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-wider text-base flex items-center gap-1.5 font-mono">
              {portfolio.name}
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-white/50 text-xs font-mono tracking-widest uppercase">
              AI & Data Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 text-xs font-medium text-white/80 bg-white/5 border border-white/15 rounded-xl hover:bg-white/10 hover:text-white transition-all flex items-center gap-1.5 font-mono"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
          )}
          <a
            href="#playground"
            onClick={(e) => handleNavClick(e, "#playground")}
            className="px-4 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-1.5 font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Demo</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-white/90 rounded-xl btn-cut transition-all flex items-center gap-1.5 font-mono"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-xl"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-black/95 border-b border-white/10 backdrop-blur-2xl p-6 flex flex-col gap-3 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            {onOpenResume && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="w-full py-3 text-center text-xs font-medium text-white/90 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center gap-2 font-mono"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume PDF</span>
              </button>
            )}
            <a
              href="#playground"
              onClick={(e) => handleNavClick(e, "#playground")}
              className="w-full py-3 text-center text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-xl flex items-center justify-center gap-2 font-mono"
            >
              <Sparkles className="w-4 h-4" />
              <span>Try Interactive AI Demo</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-3 text-center text-xs font-semibold text-black bg-white rounded-xl btn-cut flex items-center justify-center gap-2 font-mono"
            >
              <Send className="w-4 h-4" />
              <span>Contact Vishal</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}