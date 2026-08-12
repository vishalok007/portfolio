import SectionTitle from "../components/SectionTitle";
import { portfolio } from "../constants/portfolio";
import { GraduationCap, Award, CheckCircle2, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Journey & Milestones"
          title="Education & Technical Achievements"
        />

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {portfolio.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-400 transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-black" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {item.year}
                  </span>
                  <span className="text-xs text-white/50 font-mono">{item.organization}</span>
                </div>

                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  {item.role}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights list */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider block mb-2">Key Highlights</span>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Certifications & Focus Card */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-purple-400 flex items-center justify-center">
              <Award className="w-3 h-3 text-purple-400" />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Technical Competencies & Specialized Track
              </h3>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-mono text-cyan-400 block mb-1">01. LLMs & Prompting</span>
                  <p className="text-white/70 text-xs">LangChain, LlamaIndex, RAG, Prompt Engineering, Vector Search</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 block mb-1">02. Machine Learning</span>
                  <p className="text-white/70 text-xs">PyTorch, Scikit-Learn, Supervised/Unsupervised Learning, Feature Eng.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-mono text-purple-400 block mb-1">03. Full-Stack AI Integration</span>
                  <p className="text-white/70 text-xs">Python, FastAPI, REST, React 19, TypeScript, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
