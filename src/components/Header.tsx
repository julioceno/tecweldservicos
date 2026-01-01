"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./NavItem";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tecweld Serviços Industriais"
            width={180}
            height={50}
            priority
          />
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-8">
          <NavItem href="#sobre">Sobre Nós</NavItem>
          <NavItem href="#servicos">Serviços</NavItem>
          <NavItem href="#contato">Contato</NavItem>
        </nav>

        <div className="w-[180px]"></div>
      </div>
    </header>
  );
}
