import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  level?: number;
};

export default function SkillCard({
  icon,
  title,
  description,
  level = 90,
}: Props) {
  return (
    <div className="group relative bg-white/5 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
            {icon}
          </div>
          <span className="text-xs font-mono text-white/40 group-hover:text-cyan-400/80 transition-colors">
            {level}% Proficiency
          </span>
        </div>

        <h3 className="text-white text-lg font-medium tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}