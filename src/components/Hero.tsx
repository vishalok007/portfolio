import { ArrowRight, Sparkles, Mail, Terminal } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";
import { portfolio } from "../constants/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260717_120352_eb988725-1351-43b3-8095-16e4a1005e3d.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none"
      />

      {/* Dark Radial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center">
        {/* Elegant Greeting Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 text-xs font-mono tracking-wider">
            Hello, I'm <span className="text-cyan-400 font-semibold">{portfolio.name}</span> 👋
          </span>
        </div>

        {/* Value Proposition Main Headline */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15] mb-6">
          Architecting <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-400">Intelligent AI Systems</span> & ML Products
        </h1>

        {/* Typed Subtitle Roles */}
        <div className="h-10 flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs sm:text-sm text-cyan-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <TypeAnimation
              sequence={[
                "AI & Data Science Engineer", 2000,
                "LLM & RAG Specialist", 2000,
                "Machine Learning Developer", 2000,
                "Predictive Analytics & NLP", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Tagline Paragraph */}
        <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-normal">
          {portfolio.tagline}
        </p>

        {/* Core Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl">
          {["Python", "PyTorch", "Scikit-Learn", "FastAPI", "RAG", "FAISS", "LangChain", "React", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-mono hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mb-10">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="w-full sm:w-auto px-7 py-3 bg-white text-black font-semibold text-xs rounded-xl btn-cut hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#playground"
            onClick={(e) => handleScrollTo(e, 'playground')}
            className="w-full sm:w-auto px-7 py-3 bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 font-medium text-xs rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive AI Sandbox</span>
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolio.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolio.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-105"
            aria-label="Twitter Profile"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolio.socials.email}`}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-cyan-400 flex items-center justify-center transition-all hover:scale-105"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-6">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, 'about')}
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">SCROLL</span>
          <span className="text-sm group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
