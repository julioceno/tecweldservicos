import Image from "next/image";

interface HighlightCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
      <div className="w-12 h-12">
        <Image src={icon} alt="" width={48} height={48} />
      </div>
      <h3 className="text-xl font-bold font-fira-sans text-secondary">
        {title}
      </h3>
      <p className="text-gray-600 font-urbanist text-base">{description}</p>
    </div>
  );
}
