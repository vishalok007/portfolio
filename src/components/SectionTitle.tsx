type Props = {
  title: string;
  subtitle?: string;
  sectionId?: string;
};

export default function SectionTitle({ title, subtitle, sectionId }: Props) {
  return (
    <div className="text-center mb-16 space-y-3 font-sans">
      {subtitle && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase">
            {sectionId ? `// ${sectionId} • ${subtitle}` : subtitle}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
        {title}
      </h2>

      <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full opacity-60" />
    </div>
  );
}