import SectionTitle from "../components/SectionTitle";
import { portfolio } from "../constants/portfolio";
import { GraduationCap, MapPin, Server, Cpu, Database, Code2, Zap, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#09090b] text-white overflow-hidden font-sans border-t border-zinc-900">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sectionId="SECTION_01"
          subtitle="Core Competencies"
          title="Software Engineering & AI Architecture"
        />

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Core Engineering Vision (Large 7 cols) */}
          <div className="lg:col-span-7 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full-Stack AI Software Engineering</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Bridging Cutting-Edge AI Algorithms with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Production Systems</span>
              </h3>

              <div className="space-y-3 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                {portfolio.about.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Quick Engineering Badges */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-mono font-semibold">Production ML & RAG</h4>
                  <p className="text-zinc-500 text-xs">Vector indices, semantic search & custom recommendation engines.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-mono font-semibold">Backend Microservices</h4>
                  <p className="text-zinc-500 text-xs">FastAPI ASGI microservices with low-latency model inference.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Academic & Engineer Profile (5 cols) */}
          <div className="lg:col-span-5 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">// Profile Specs</span>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Academic Track</span>
                    <p className="text-white font-semibold text-sm">{portfolio.about.education}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">Location & Availability</span>
                    <p className="text-white font-semibold text-sm">{portfolio.about.location} • Global Remote</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Counter Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
              {portfolio.about.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                  <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-zinc-500 text-[11px] font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Sub-Cards: 4 Engineering Pillars (4 x 3 cols = 12 cols row) */}
          <div className="lg:col-span-3 bento-card rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-mono">1. ML & Recommendation</h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Collaborative filtering, classification trees, XGBoost, Scikit-Learn & model validation.
            </p>
          </div>

          <div className="lg:col-span-3 bento-card rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-mono">2. GenAI & RAG Pipelines</h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Vector embedding search, FAISS index, LangChain, semantic reranking & Gemini API.
            </p>
          </div>

          <div className="lg:col-span-3 bento-card rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-mono">3. Data & Automated EDA</h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Pandas, NumPy, automated statistical visual charts, missing value imputation & ETL.
            </p>
          </div>

          <div className="lg:col-span-3 bento-card rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Code2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-mono">4. Modern Full Stack</h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              FastAPI ASGI backend, React 19, TypeScript, Tailwind CSS & Streamlit Cloud.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}