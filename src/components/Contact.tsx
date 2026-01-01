import ContactCard from "./ContactCard";

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
    {
      name: "Comercial",
      role: "Departamento comercial",
      phone: "(16) 99325-9020",
      email: "comercial@tecweldservicos.com.br",
      whatsappLink: "https://wa.me/5516993259020",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-fira-sans leading-tight mb-10 max-w-md text-center md:text-left mx-auto md:mx-0">
          Entre em contato com a gente
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-16">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
