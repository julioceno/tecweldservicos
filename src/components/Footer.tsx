import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="bg-white py-12">
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          <Link href="/" className="mb-4">
            <Image
              src="/logo.svg"
              alt="Tecweld Serviços Industriais"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <p className="text-center text-sm text-gray-600">
            Excelência e Confiabilidade em
          </p>
          <p className="text-center text-sm text-gray-600">
            Serviços Industriais
          </p>
        </div>
      </div>

      <div className="bg-secondary py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-300">
            © {currentYear} TECWELD | xxx.xxx.xxx/xxxx
          </p>
        </div>
      </div>
    </footer>
  );
}
