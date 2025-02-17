"use client";
import React, { useState } from "react";
import {
  MapPin,
  Settings,
  MessageSquare,
  Computer,
  Package,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Gerenciamento de dispositivos",
    icon: MapPin,
    image: "/remote-3.png",
    description:
      "Padronize a configuração dos dispositivos de forma remota e centralizada.",
  },
  {
    title: "Gerenciamento remoto de funcionários",
    icon: Computer,
    image: "/productivity1.png",
    description:
      "Monitore o tempo de uso e os sites acessados para garantir eficiência no home office.",
  },
  {
    title: "Inventário de TI",
    icon: Settings,
    image: "/main-inventory.png",
    description:
      " Tenha um registro completo e atualizado dos dispositivos da empresa e suas configurações em um só lugar.",
  },
  {
    title: "Gestão de Softwares e Licenças",
    icon: Package,
    image: "/main-softwares.png",
    description:
      "Instale, atualize ou remova programas remotamente apenas um clique.",
  },
  {
    title: "Rastreamento e Geolocalização de ativos",
    icon: MessageSquare,
    image: "/geolocalizacao.png",
    description:
      "Saiba onde estão os dispositivos corporativos em tempo real para maior segurança.",
  },
  {
    title: "Conformidade de Infraestrutura",
    icon: Shield,
    image: "/script.png",
    description:
      "Garanta que todos os dispositivos sigam as políticas de TI da empresa.",
  },
  {
    title: "Mensageria e Comunicação",
    icon: MessageSquare,
    image: "/message.png",
    description:
      "Comunique-se com a equipe de forma segura e eficiente com sua equipe pelo próprio dispositivo corporativo.",
  },
  {
    title: "Alertas e Notificações",
    icon: Shield,
    image: "/alertas.png",
    description:
      "Receba alertas automáticos para tomar decisões estratégicas baseado nas necessidades da sua empresa.",
  },
  {
    title: "Relatórios e Análises",
    icon: Shield,
    image: "/main-monitoring.png",
    description:
      "Tenha insights valiosos para otimizar a gestão de TI. Economize tempo, custos e previna problemas.",
  },
];

const LandingPage = () => {
  const [activeCard, setActiveCard] = useState<string | null>(
    "Inventário de TI"
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-5xl mb-6 text-white tracking-wider">
              <span className="text-emerald-300">Controle total</span> dos
              dispositivos da{" "}
              <span className="text-emerald-300">sua equipe</span>, onde quer
              que estejam!
            </h1>
            <p className="text-lg text-white mb-8">
              Com o Agente Track, você tem uma visão completa dos ativos de TI
              da sua empresa. Hardware, Software, Produtividade, Segurança,
              Acesso Remoto e Gestão de ativos de TI por apenas R$5/mês por
              máquina!
            </p>

            {/* Form */}
            <div className="space-y-4 w-full">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0"
              />
              <div className="w-full font-bold">
                <Button
                  // size="lg"
                  className="text-lg font-medium w-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white"
                >
                  Faça o Teste Grátis
                </Button>
                <Button
                  // size="lg"
                  className="text-lg font-medium w-[45%] bg-gradient-to-r from-teal-500 to-emerald-500 text-white ml-4"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Video Player Placeholder */}
          <div className="rounded-lg bg-gray-100 aspect-video">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/api/placeholder/640/360"
                alt="Video placeholder"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-white">
            {/* Left Column - Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">
                Controle total.{" "}
                <span className="font-bold text-3xl text-green-500">
                  Produtividade máxima.
                </span>
              </h2>
              <p className="text-lg leading-relaxed">
                Você sabe o que a sua equipe faz no home-office? Com o Agente
                Track, você tem controle total sobre os dispositivos da sua
                empresa, garantindo mais segurança, produtividade e eficiência.
                Faça o rastreamento e geolocalização de ativos, análise de tempo
                de trabalho dos colaboradores e receba alertas automáticos para
                tomar decisões estratégicas em tempo real. Simplifique sua
                gestão de TI e tenha o controle que sua empresa precisa.
                Experimente agora!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-500"
              >
                Quero testar gratuitamente!
              </Button>
            </div>

            {/* Right Column - Overlapping Images */}
            <div className="flex-1 relative h-[600px]">
              <img
                src="/main-inventory.png"
                alt="Inventory Preview 1"
                className="absolute top-20 right-8 w-full rounded-lg shadow-2xl z-10
                transition-all duration-300 hover:transform hover:scale-105 hover:-rotate-1
                object-cover"
              />
              <img
                src="/main-dashboard.png"
                alt="Inventory Preview 2"
                className="absolute top-64 left-16 w-full rounded-lg shadow-2xl z-20
                transition-all duration-300 hover:transform hover:scale-105
                hover:rotate-1 object-cover"
              />
            </div>
          </div>

          {/* New Remote Access Section */}
          {/* Features Grid */}
        </section>
        <section className="container mx-auto px-4 py-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`
              p-6 rounded-lg border border-input
              transition-all duration-500 ease-in-out
              relative after:absolute after:bottom-0 after:left-0 
              after:h-1 after:w-full after:rounded-b-lg
              ${
                activeCard === feature.title
                  ? "after:bg-gradient-to-r after:from-green-600 after:via-emerald-500 after:to-teal-500"
                  : "after:bg-transparent"
              }
            `}
                onMouseEnter={() => setActiveCard(feature.title)}
                // onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex gap-4">
                  <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="mt-4">{feature.description}</p>
              </div>
            ))}
          </div>

          {activeCard && (
            <div className="mt-8 transition-all duration-300">
              <img
                src={features.find((f) => f.title === activeCard)?.image}
                alt={activeCard}
                className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
