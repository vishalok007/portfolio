import { ArrowRight, Sparkles, Mail } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden pt-24 pb-12">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260717_120352_eb988725-1351-43b3-8095-16e4a1005e3d.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none"
      />

      {/* Dark Radial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center">
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80 text-xs font-mono tracking-wider uppercase">
            {portfolio.title}
          </span>
        </div>

        {/* Name Heading */}
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-4">
          {portfolio.name}
        </h1>

        {/* Typed Subtitle Roles */}
        <div className="h-12 flex items-center justify-center mb-8">
          <TypeAnimation
            sequence={[
              "AI Engineer", 1800,
              "LLM & RAG Specialist", 1800,
              "Machine Learning Engineer", 1800,
              "Data Scientist", 1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-xl sm:text-2xl md:text-3xl font-mono font-medium tracking-wide"
          />
        </div>

        {/* Tagline Paragraph */}
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {portfolio.tagline}
        </p>

        {/* Core Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["Python", "PyTorch", "FastAPI", "RAG", "FAISS", "LangChain", "React", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-xl btn-cut hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#playground"
            onClick={(e) => handleScrollTo(e, 'playground')}
            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 font-medium text-sm rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Interactive AI Sandbox</span>
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolio.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolio.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Twitter Profile"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolio.socials.email}`}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-cyan-400 flex items-center justify-center transition-all hover:scale-110"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, 'about')}
          className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">SCROLL</span>
          <span className="text-lg group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
