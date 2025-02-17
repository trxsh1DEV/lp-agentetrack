"use client";
import React from "react";
import {
  Layout,
  MapPin,
  Settings,
  Box,
  MessageSquare,
  CheckSquare,
} from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";

const features = [
  {
    title: "Inventário de TI",
    icon: (
      <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
        <Layout className="w-8 h-8 text-purple-600" />
      </div>
    ),
  },
  {
    title: "Geolocalização",
    icon: (
      <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
        <MapPin className="w-8 h-8 text-red-600" />
      </div>
    ),
  },
  {
    title: "Configuração de Ativos",
    icon: (
      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
        <Settings className="w-8 h-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: "Instalação de Softwares",
    icon: (
      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
        <Box className="w-8 h-8 text-green-600" />
      </div>
    ),
  },
  {
    title: "Mensageria",
    icon: (
      <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center">
        <MessageSquare className="w-8 h-8 text-yellow-600" />
      </div>
    ),
  },
  {
    title: "Conformidade de Infraestrutura",
    icon: (
      <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center">
        <CheckSquare className="w-8 h-8 text-pink-600" />
      </div>
    ),
  },
];

const LandingPage = () => {
  const [text] = useTypewriter({
    words: [
      "Controle total dos dispositivos",
      "Onde quer que estejam",
      "Monitore, previna e corrija",
      "Somente no Agente Track",
    ],
    loop: 1, // 0 para repetir infinitamente
    typeSpeed: 70, // Velocidade de digitação
    deleteSpeed: 30, // Velocidade ao apagar
    delaySpeed: 1500, // Tempo entre trocas
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-5xl text-slate-800 mb-6">
              Tudo em um lugar só,{" "}
              <span className="text-indigo-600 font-bold">{text}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Com o Agente Track, você tem uma visão completa dos ativos de TI
              da sua empresa. Hardware, Software, Produtividade, Segurança,
              Acesso Remoto e Gestão de ativos de TI por apenas R$5/mês por
              máquina!
            </p>

            {/* Form */}
            <div className="space-y-4 max-w-md">
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
              <div className="w-full">
                <button className="w-[48%] bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition-colors">
                  Teste Grátis
                </button>
                <button className="w-[48%] bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition-colors ml-4">
                  Saiba Mais
                </button>
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

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="mt-4 text-sm font-medium text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
