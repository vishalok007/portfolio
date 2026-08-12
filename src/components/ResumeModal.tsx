import { useState } from "react";
import { FileText, Download, X, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { portfolio } from "../constants/portfolio";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ResumeModal({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<"visual" | "pdf">("visual");

  if (!isOpen) return null;

  const handleDownload = () => {
    // Triggers download of the resume file placed in /public/resume.pdf
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = `${portfolio.name.replace(/\s+/g, "_")}_AI_Engineer_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                {portfolio.name} — Curriculum Vitae
              </h3>
              <p className="text-xs text-cyan-400/80 font-mono">AI & Data Science Engineer Resume</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("visual")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === "visual" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-white/60 hover:text-white"
                }`}
              >
                Interactive Resume
              </button>
              <button
                onClick={() => setActiveTab("pdf")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === "pdf" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-white/60 hover:text-white"
                }`}
              >
                PDF View
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs btn-cut hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-xs text-white/90">
          {activeTab === "visual" ? (
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* Header Info Banner */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{portfolio.name}</h2>
                  <p className="text-cyan-400 font-mono text-xs">{portfolio.title}</p>
                  <p className="text-white/60 text-xs mt-2 leading-relaxed">
                    {portfolio.about.short}
                  </p>
                </div>
                <div className="space-y-1.5 text-xs font-mono text-white/70 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 shrink-0">
                  <div>📧 {portfolio.socials.email}</div>
                  <div>📍 {portfolio.about.location}</div>
                  <div>💻 github.com/vishalok007</div>
                </div>
              </div>

              {/* Technical Skills Overview */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white font-mono flex items-center gap-2 border-b border-white/10 pb-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Core Technical Proficiencies
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {portfolio.skillsCategories.map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <span className="text-xs font-mono font-semibold text-cyan-300 block">{cat.category}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s) => (
                          <span key={s.name} className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[11px] text-white/80 font-mono">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flagship Projects */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white font-mono flex items-center gap-2 border-b border-white/10 pb-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" /> Production Projects & AI Systems
                </h3>
                <div className="space-y-4">
                  {portfolio.projects.map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          {proj.title}
                          {proj.featured && (
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/40">
                              Flagship
                            </span>
                          )}
                        </h4>
                        <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                      </div>
                      <p className="text-white/70 leading-relaxed text-xs">{proj.longDescription}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/60 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Timeline */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white font-mono flex items-center gap-2 border-b border-white/10 pb-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" /> Academic & Specialization Track
                </h3>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{portfolio.about.education}</span>
                    <span className="text-xs font-mono text-cyan-400">2023 - Present</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Specializing in Machine Learning algorithms, statistical modeling, Deep Learning architectures, Natural Language Processing, and full-stack software development.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* PDF Embed Preview */
            <div className="w-full h-[60vh] flex flex-col items-center justify-center rounded-xl bg-black/60 border border-white/10 p-6 text-center space-y-4">
              <iframe
                src="/resume.pdf"
                className="w-full h-full rounded-lg border border-white/10 hidden sm:block"
                title="Vishal Kumar Resume PDF"
              />
              <div className="sm:hidden space-y-3">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-sm font-semibold text-white">Resume PDF File Ready</h4>
                <p className="text-white/60 text-xs max-w-sm mx-auto">
                  Click the button below to download Vishal's full official PDF resume directly to your device.
                </p>
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs btn-cut hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
