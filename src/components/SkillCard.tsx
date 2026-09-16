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
    <div className="group relative bg-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between font-sans">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all">
            {icon}
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 group-hover:border-cyan-400 transition-colors">
            {level}% Mastered
          </span>
        </div>

        <h3 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <p className="text-white/60 text-xs leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>

      {/* Interactive Progress Bar */}
      <div className="space-y-1">
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden p-0.5">
          <div
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}