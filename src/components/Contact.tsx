import { FaWhatsapp } from "react-icons/fa";

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  whatsappLink: string;
}

function ContactCard({
  name,
  role,
  phone,
  email,
  whatsappLink,
}: ContactCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold text-white font-fira-sans">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
      <p className="text-gray-300 text-sm">{phone}</p>
      <p className="text-gray-300 text-sm">{email}</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-main hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md mt-2 w-fit transition-colors"
      >
        <FaWhatsapp className="w-4 h-4" />
        Entre Em Contato
      </a>
    </div>
  );
}

export default function Contact() {
  const contacts = [
    {
      name: "Nedson Andradson",
      role: "Diretor comercial",
      phone: "(16) 99325-9020",
      email: "nedson@tecweldservicos.com.br",
      whatsappLink: "https://wa.me/5516993259020",
    },
    {
      name: "Nivandilson Andradson",
      role: "Diretor administrativo",
      phone: "(16) 98340-2816",
      email: "nivandilson@tecweldservicos.com.br",
      whatsappLink: "https://wa.me/5516983402816",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-fira-sans leading-tight mb-10 max-w-md">
          Entre em contato com a gente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
