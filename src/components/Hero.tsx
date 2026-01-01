import Image from "next/image";
import Button from "./Button";
import { content } from "@/data/content";

export default function Hero() {
  return (
    <section className="w-full py-10 px-4 md:py-16">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start order-1 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira-sans text-secondary leading-tight text-center lg:text-left mb-4 md:mb-6">
            {content.hero.title}
          </h1>

          <p className="text-gray-600 text-base md:text-lg text-center lg:text-left mb-0 lg:mb-8">
            {content.hero.description}
          </p>

          <div className="hidden lg:flex flex-wrap gap-4">
            <Button variant="primary" href="#contact">{content.hero.contactButton}</Button>
            <Button variant="outline" href="#services">{content.hero.servicesButton}</Button>
          </div>
        </div>

        <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2 lg:order-2">
          <div className="relative w-70 h-87.5 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-100 lg:h-125 rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/main.svg"
              alt={content.hero.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex lg:hidden flex-wrap justify-center gap-4 order-3 w-full">
          <Button variant="primary" href="#contact">{content.hero.contactButton}</Button>
          <Button variant="outline" href="#services">{content.hero.servicesButton}</Button>
        </div>
      </div>
    </section>
  );
}
