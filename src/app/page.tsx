"use client";
// import {
//   MapPin,
//   Settings,
//   MessageSquare,
//   Computer,
//   Package,
//   Shield,
// } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import BlogSection from "./blog";
import { FAQSection } from "./faq";
import { ChatWidget } from "@/app/chat-widget";
import { FormSection } from "./form-section";
import FeaturesPage from "./features";
import PartnersPage from "./partners";

// const features = [
//   {
//     title: "Gerenciamento de dispositivos",
//     icon: MapPin,
//     image: "/remote-3.png",
//     description:
//       "Padronize a configuração dos dispositivos de forma remota e centralizada.",
//   },
//   {
//     title: "Gerenciamento remoto de funcionários",
//     icon: Computer,
//     image: "/productivity1.png",
//     description:
//       "Monitore o tempo de uso e os sites acessados para garantir eficiência no home office.",
//   },
//   {
//     title: "Inventário de TI",
//     icon: Settings,
//     image: "/main-inventory.png",
//     description:
//       " Tenha um registro completo e atualizado dos dispositivos da empresa e suas configurações em um só lugar.",
//   },
//   {
//     title: "Gestão de Softwares e Licenças",
//     icon: Package,
//     image: "/main-softwares.png",
//     description:
//       "Instale, atualize ou remova programas remotamente apenas um clique.",
//   },
//   {
//     title: "Rastreamento e Geolocalização de ativos",
//     icon: MessageSquare,
//     image: "/geolocalizacao.png",
//     description:
//       "Saiba onde estão os dispositivos corporativos em tempo real para maior segurança.",
//   },
//   {
//     title: "Conformidade de Infraestrutura",
//     icon: Shield,
//     image: "/script.png",
//     description:
//       "Garanta que todos os dispositivos sigam as políticas de TI da empresa.",
//   },
//   {
//     title: "Mensageria e Comunicação",
//     icon: MessageSquare,
//     image: "/message.png",
//     description:
//       "Comunique-se com a equipe de forma segura e eficiente com sua equipe pelo próprio dispositivo corporativo.",
//   },
//   {
//     title: "Alertas e Notificações",
//     icon: Shield,
//     image: "/alertas.png",
//     description:
//       "Receba alertas automáticos para tomar decisões estratégicas baseado nas necessidades da sua empresa.",
//   },
//   {
//     title: "Relatórios e Análises",
//     icon: Shield,
//     image: "/main-monitoring.png",
//     description:
//       "Tenha insights valiosos para otimizar a gestão de TI. Economize tempo, custos e previna problemas.",
//   },
// ];

const LandingPage = () => {
  // const [activeCard, setActiveCard] = useState<string | null>(
  //   "Inventário de TI"
  // );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* Hero Section */}
      <section className="container mx-auto py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-white tracking-wide">
            <span className="text-emerald-300">Controle total</span> dos
            dispositivos da <span className="text-emerald-300">sua equipe</span>
            , onde quer que estejam!
          </h1>
          <p className="text-base sm:text-lg mb-6 text-zinc-300 max-w-[540px] tracking-[0.04rem]">
            Produtividade, segurança e gestão de ativos de TI por apenas R$5/mês
            por máquina!
          </p>

          {/* CTA Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-gradient-to-r from-green-600 to-green-700 text-lg sm:text-[1.4rem] py-6 sm:py-8 font-bold w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("formulary")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              QUERO TESTAR GRATUITAMENTE!
            </Button>
            <Button
              className="bg-gradient-to-r from-green-600 to-green-700 text-lg sm:text-[1.4rem] py-6 sm:py-8 font-bold w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              SAIBA MAIS
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="rounded-lg bg-gray-100 aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CHKbvMt4_Lk"
            title="Agente Track Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-8 sm:py-16 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Controle total <br />
          <p className="font-normal">Produtividade máxima</p>
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Left Column - Image */}
          <div className="flex-1 w-full">
            <Image
              src="https://agentezero-api.infonova.com.br/static/files/content/images_lp/images/Imagem_01_B.png"
              alt="Image the man in the computer"
              height={300}
              width={600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 space-y-6">
            <p className="text-base sm:text-xl leading-relaxed px-4 sm:px-0">
              <span className="font-bold">
                Você sabe o que a sua equipe faz no home-office?
              </span>{" "}
              Com o Agente Track,{" "}
              <span className="font-bold">você tem controle total</span> sobre
              os dispositivos da sua empresa, garantindo mais{" "}
              <span className="font-bold">
                segurança, produtividade e eficiência.
              </span>{" "}
              Faça o rastreamento e geolocalização de ativos, análise de tempo
              de trabalho dos colaboradores e receba alertas automáticos para
              tomar decisões estratégicas em tempo real.{" "}
              <span className="font-bold">Simplifique sua gestão de TI</span> e
              tenha o controle que sua empresa precisa. Experimente agora!
            </p>
            <Button
              className="bg-gradient-to-r from-green-600 to-green-700 text-xl sm:text-2xl py-6 sm:py-8 font-bold w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("formulary")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              QUERO TESTAR GRATUITAMENTE!
            </Button>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <FeaturesPage />
      <PartnersPage />
      <FAQSection />
      <FormSection />
      <BlogSection />
      <ChatWidget />
    </div>
  );
};

export default LandingPage;
