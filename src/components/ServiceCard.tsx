import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-2">
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
