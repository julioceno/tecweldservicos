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
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold text-white font-fira-sans">{name}</h3>
      <p className="text-white italic font-light text-sm">{role}</p>
      <p className="text-white text-sm">{phone}</p>
      <p className="text-white text-sm">{email}</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 w-fit"
      >
        <Button
          variant="primary"
          className="text-sm px-4 py-2"
          iconLeft="whatsapp"
        >
          Entre Em Contato
        </Button>
      </a>
    </div>
  );
}
