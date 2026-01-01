import { commercialContactWhatsappLink, instragramLink } from "@/data/content";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex gap-1">
      <a
        href={commercialContactWhatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="text-xl text-secondary hover:text-green-500 transition-colors"
      >
        <FaWhatsapp />
      </a>
      <a
        href={instragramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-xl text-secondary hover:text-pink-500 transition-colors"
      >
        <FaInstagram />
      </a>
    </div>
  );
}