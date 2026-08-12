type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.35em] text-white/50 text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
        {title}
      </h2>
    </div>
  );
}