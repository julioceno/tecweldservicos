import { content } from "@/data/content";
import Button from "./Button";

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  whatsappLink: string;
}

export default function ContactCard({
  name,
  role,
  phone,
  email,
  whatsappLink,
}: ContactCardProps) {
  return (
    <div className="flex flex-col gap-1 items-center text-center md:items-start md:text-left">
      <h3 className="text-xl font-bold text-white font-fira-sans">{name}</h3>
      <p className="text-white italic font-light text-sm">{role}</p>
      <p className="text-white text-sm">{phone}</p>
      <a
        href={`mailto:${email}`}
        className="text-white text-sm underline hover:text-gray-200 transition-colors"
      >
        {email}
      </a>
      <Button
        variant="primary"
        className="mt-2 w-fit text-sm px-4 py-2"
        iconLeft="whatsapp"
        href={whatsappLink}
        openInNewTab
      >
        {content.contact.buttonText}
      </Button>
    </div>
  );
}
