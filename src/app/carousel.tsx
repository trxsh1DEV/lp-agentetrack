"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

const items = [
  {
    image: "/devices.png",
    title: "Gestão Remota Simplificada",
    description:
      "Controle total dos dispositivos da sua equipe em qualquer lugar do mundo.",
  },
  {
    image: "/device.png",
    title: "Aumente a Produtividade",
    description:
      "Monitore e otimize o desempenho da sua equipe com ferramentas inteligentes.",
  },
  {
    image: "/geolocation.png",
    title: "Inventário Inteligente",
    description:
      "Mantenha o controle total do seu patrimônio de TI em tempo real.",
  },
  {
    image: "/details.png",
    title: "Segurança Garantida",
    description:
      "Proteja seus ativos com monitoramento avançado e alertas em tempo real.",
  },
];

export const FlipCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextSlide = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setIsFlipping(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setIsFlipping(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  });

  return (
    <section className="container py-16 mx-auto text-white" id="features">
      <h1 className="text-3xl font-bold text-center mb-12">
        Galeria de Recursos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-10 items-center">
        {/* Changed to 10 columns for better precision */}
        {/* Left side content - 4 columns (40%) */}
        <div className="md:col-span-4 space-y-6 p-6">
          <h2 className="text-4xl font-bold">{items[currentIndex].title}</h2>
          <p className="text-lg text-gray-300">
            {items[currentIndex].description}
          </p>
          <div className="space-y-4 text-xl tracking-wider">
            <h3 className="font-bold">Instalação rápida e dados seguros:</h3>
            <p>
              Com o Agente Track, a instalação acontece em minutos,{" "}
              <strong>sem interromper as operações da sua empresa.</strong>
            </p>
            <p>
              Além da facilidade, garantimos total segurança e{" "}
              <strong>conformidade com a LGPD</strong>. Todos os dados da sua
              empresa, como IP, geolocalização e informações dos dispositivos,
              são armazenados diretamente no seu servidor, sem passar por
              terceiros.
            </p>
            <br />
            <strong>Simples, rápido e seguro.</strong>
          </div>
        </div>
        {/* Right side carousel - 6 columns (60%) */}
        <div className="md:col-span-6 relative h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Card
              className={`w-full border-none h-full bg-slate-800/50 backdrop-blur-sm transform transition-all duration-300 
              ${isFlipping ? "scale-90 rotate-y-90" : "scale-100 rotate-y-0"}
            `}
            >
              <div className="relative w-full h-full">
                <img
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
