import SectionTitle from "../components/SectionTitle";
import { portfolio } from "../constants/portfolio";
import { GraduationCap, MapPin, CheckCircle2, Sparkles, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="About Me"
          title="Bridging AI Science & Engineering"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{portfolio.about.availability}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-light leading-snug">
              Hi, I'm <span className="font-semibold text-white">{portfolio.name}</span>
            </h3>

            <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
              {portfolio.about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">LLM & RAG Systems</h4>
                  <p className="text-white/50 text-xs mt-0.5">End-to-end vector search pipelines & hybrid retrieval.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Production APIs</h4>
                  <p className="text-white/50 text-xs mt-0.5">FastAPI microservices & high-concurrency backend.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info Cards & Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Overview Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 space-y-6 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-white pointer-events-none group-hover:scale-110 transition-transform">
                <GraduationCap className="w-32 h-32" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white/50 text-xs font-mono uppercase tracking-wider">Education</span>
                    <p className="text-white font-medium text-base">{portfolio.about.education}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white/50 text-xs font-mono uppercase tracking-wider">Location</span>
                    <p className="text-white font-medium text-base">{portfolio.about.location}</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {portfolio.about.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}