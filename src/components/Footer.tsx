import Image from "next/image";
import Link from "next/link";
import { content } from "@/data/content";
import { RiMapPin2Fill } from "react-icons/ri";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="bg-white pt-12 pb-1">
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          <Link href="/" className="mb-4">
            <Image
              src="/logo.svg"
              alt={content.footer.logoAlt}
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <p className="text-center text-sm text-gray-600">
            {content.footer.line1}
          </p>
          <p className="text-center text-sm text-gray-600">
            {content.footer.line2}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-1 mb-4">
        <RiMapPin2Fill className="text-main mt-2"/>
        <p className="text-center text-sm text-gray-600 mt-2 flex gap-1">
          {content.footer.addressLine1} <br />
          {content.footer.addressLine2}
        </p>
      </div>
      <div className="bg-secondary py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-300">
            © {currentYear} {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
 