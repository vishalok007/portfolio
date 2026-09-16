import { useState } from 'react';
import { ArrowRight, Sparkles, Mail, Terminal, FileText, CheckCircle2, Activity } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";
import { portfolio } from "../constants/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import AudioGreeting from "./AudioGreeting";

type Props = {
  onOpenResume?: () => void;
};

export default function Hero({ onOpenResume }: Props) {
  const [activeTab, setActiveTab] = useState<"telemetry" | "architecture">("telemetry");

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-[#09090b] flex flex-col justify-between overflow-hidden pt-28 pb-12 font-sans tech-dots-pattern">
      {/* Subtle Background Radial Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-xl mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-zinc-300 text-xs font-mono tracking-wider">
            AVAILABLE FOR SOFTWARE & AI ENGINEERING ROLES <span className="text-zinc-600">•</span> <span className="text-cyan-400 font-semibold">2026</span>
          </span>
        </div>

        {/* AI Audio Pitch Player */}
        <AudioGreeting />

        {/* Main Engineer Headline */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] my-5 max-w-4xl">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Scalable AI Systems</span> & Production Software
        </h1>

        {/* Animated Role Subtitle */}
        <div className="h-9 flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 font-mono text-xs sm:text-sm text-cyan-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <TypeAnimation
              sequence={[
                "Full-Stack AI & Software Engineer", 2000,
                "Machine Learning & RAG Specialist", 2000,
                "FastAPI & Microservices Developer", 2000,
                "Data Science & Predictive Analytics", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Engineering Tagline */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-light">
          Dedicated software engineer designing end-to-end Machine Learning pipelines, automated data analytics engines, and high-performance full-stack web applications.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mb-10">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-semibold text-xs rounded-xl hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
          >
            <span>Explore Live Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-200 font-mono text-xs rounded-xl hover:border-cyan-500/50 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineering CV</span>
            </button>
          )}

          <a
            href="#playground"
            onClick={(e) => handleScrollTo(e, 'playground')}
            className="w-full sm:w-auto px-6 py-3.5 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Sandbox</span>
          </a>
        </div>

        {/* Interactive Developer Terminal Widget */}
        <div className="w-full max-w-3xl rounded-2xl dev-terminal overflow-hidden text-left mb-10 font-mono">
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-zinc-500 ml-2">vishal@dev-machine:~</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === "telemetry" ? "bg-zinc-800 text-cyan-300 font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Telemetry
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === "architecture" ? "bg-zinc-800 text-cyan-300 font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Architecture Stack
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 text-xs sm:text-[13px] space-y-2 bg-[#0c0c10]">
            {activeTab === "telemetry" ? (
              <>
                <p className="text-zinc-400">
                  <span className="text-emerald-400">$</span> vishal.sys --status --production
                </p>
                <div className="space-y-1.5 text-zinc-300 pt-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong className="text-white">AI Career Advisor</strong> (Streamlit ML App): <span className="text-emerald-400 font-semibold">LIVE</span> (Match Rate: 95%)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong className="text-white">AI Data Analyst</strong> (AutoML Engine): <span className="text-emerald-400 font-semibold">LIVE</span> (Instant EDA)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span><strong className="text-white">Inference Microservice Latency</strong>: &lt;18ms (FastAPI + ONNX Runtime)</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-zinc-400">
                  <span className="text-emerald-400">$</span> cat /etc/software-stack.json
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 pt-1">
                  <div className="p-2 rounded bg-zinc-900/70 border border-zinc-800">
                    <span className="text-cyan-400 font-bold block">Backend & ML:</span>
                    <span className="text-zinc-400 text-xs">Python • FastAPI • PyTorch • Scikit-Learn • Docker</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/70 border border-zinc-800">
                    <span className="text-cyan-400 font-bold block">GenAI & Data:</span>
                    <span className="text-zinc-400 text-xs">LangChain • RAG • FAISS • PostgreSQL • Pandas</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Interactive Core Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-2xl">
          {["Python", "FastAPI", "PyTorch", "Scikit-Learn", "RAG", "FAISS", "LangChain", "React 19", "TypeScript", "Docker", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolio.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolio.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
            aria-label="Twitter Profile"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolio.socials.email}`}
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-cyan-400 flex items-center justify-center transition-all hover:scale-105 shadow-md"
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
          className="flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-300 transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">SYSTEM_ARCH</span>
          <span className="text-sm group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
