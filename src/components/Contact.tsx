import { content } from "@/data/content";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-fira-sans leading-tight mb-10 max-w-md text-center md:text-left mx-auto md:mx-0">
          {content.contact.title}
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-16">
          {content.contact.contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
