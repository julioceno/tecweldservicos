"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "./SectionTitle";
import CarouselNavButton from "./CarouselNavButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Jaguare Garment Industry",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Outbox Creatives Building",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Slova Private Residence",
    image: "/projects/project-3.jpg",
  },
  {
    title: "Modern Office Complex",
    image: "/projects/project-4.jpg",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Últimos Projetos" title="Explore nossos trabalhos" />

        <div className="mt-12 relative">
          <CarouselNavButton direction="prev" ariaLabel="Projetos anteriores" />

          <div className="px-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !w-2 !h-2 !bg-gray-300 !opacity-100",
                bulletActiveClass: "!bg-main",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12!"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-secondary font-fira-sans">
                      {project.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <CarouselNavButton direction="next" ariaLabel="Próximos projetos" />
        </div>
      </div>
    </section>
  );
}
