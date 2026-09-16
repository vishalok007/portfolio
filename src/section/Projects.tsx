import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { portfolio, type Project } from "../constants/portfolio";
import { ExternalLink, Cpu, Layers, Sparkles, X, Activity, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", ...Array.from(new Set(portfolio.projects.map((p) => p.category)))];

  const filteredProjects = activeCategory === "All"
    ? portfolio.projects
    : portfolio.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-black text-white overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sectionId="SECTION_03"
          subtitle="Production AI Systems"
          title="Featured AI & Machine Learning Projects"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      {project.category}
                    </span>
                    {project.demoUrl ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Demo
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono flex items-center gap-1.5">
                        Architecture Spec
                      </span>
                    )}
                  </div>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs text-amber-400 font-mono">
                      <Sparkles className="w-3.5 h-3.5" /> Flagship System
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-cyan-400/80 text-xs font-mono mb-4">{project.subtitle}</p>

                {/* Short Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Metrics Pill Grid */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-white/5 border border-white/10">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="block text-white font-mono font-bold text-sm">{m.value}</span>
                        <span className="block text-white/50 text-[10px] uppercase font-mono">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Interactive Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 text-xs font-mono hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn"
                >
                  <Cpu className="w-4 h-4 text-cyan-400 group-hover/btn:rotate-12 transition-transform" />
                  <span>View System Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1 shadow-md shadow-cyan-950/40"
                      aria-label="Launch Live App"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-cyan-300 hover:border-cyan-500/30 text-xs font-mono font-medium transition-all flex items-center gap-1"
                      aria-label="View Case Study Specs"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Architecture Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
          <div className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                {selectedProject.title}
              </h3>
              <p className="text-cyan-400 text-xs font-mono mt-1">{selectedProject.subtitle}</p>
            </div>

            {/* Detailed Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider">// System Overview</h4>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Architecture Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Pipeline Architecture Nodes
              </h4>
              <div className="space-y-2">
                {selectedProject.architecture.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-cyan-500/40 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/40">
                      0{idx + 1}
                    </span>
                    <p className="text-white/90 text-xs sm:text-sm font-sans">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benchmark Metrics */}
            {selectedProject.metrics && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> Benchmark Performance
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-lg font-bold font-mono text-emerald-400">{m.value}</div>
                      <div className="text-white/50 text-[10px] uppercase font-mono">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-white/10">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-medium transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-cyan-300 text-xs font-semibold btn-cut transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Streamlit App</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
