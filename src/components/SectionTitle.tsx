interface SectionTitleProps {
  label: string;
  title: string;
}

export default function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-4 font-fira-sans">
      <div className="flex items-center gap-3">
        <span className="w-6 h-0.5 bg-main"></span>
        <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
        {title}
      </h2>
    </div>
  );
}
