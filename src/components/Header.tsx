"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./NavItem";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tecweld Serviços Industriais"
            width={180}
            height={50}
            priority
            className="h-10 w-auto md:h-[50px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <NavItem href="#sobre">Sobre Nós</NavItem>
          <NavItem href="#servicos">Serviços</NavItem>
          <NavItem href="#contato">Contato</NavItem>
        </nav>

        <div className="hidden w-[180px] md:block"></div>

        <div className="flex items-center gap-2 md:hidden">
          <span
            className={`relative z-50 font-bold text-secondary transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full opacity-0"
            }`}
          >
            TECWELD
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-main transition-all duration-300 ease-out ${
                isMenuOpen ? "w-6/12 delay-300" : "w-0"
              }`}
            ></span>
          </span>
          <button
            onClick={toggleMenu}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`h-0.5 w-6 bg-secondary transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-secondary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-secondary transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <nav
        className={`fixed right-0 top-0 z-40 flex h-full w-64 flex-col gap-6 bg-white px-6 pt-20 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavItem href="#sobre" onClick={closeMenu}>
          Sobre Nós
        </NavItem>
        <NavItem href="#servicos" onClick={closeMenu}>
          Serviços
        </NavItem>
        <NavItem href="#contato" onClick={closeMenu}>
          Contato
        </NavItem>
      </nav>
    </header>
  );
}
