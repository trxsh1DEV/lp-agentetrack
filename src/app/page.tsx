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
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="container mx-auto py-16 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-6xl mb-6 text-white tracking-wide">
              <span className="text-emerald-300">Controle total</span> dos
              dispositivos da{" "}
              <span className="text-emerald-300">sua equipe</span>, onde quer
              que estejam!
            </h1>
            <p className="text-lg mb-8 text-zinc-300">
              Produtividade, segurança e gestão de ativos de TI por apenas
              R$5/mês por máquina!
            </p>

            {/* Form */}
            <div className="w-full flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8"
                onClick={() =>
                  document
                    .getElementById("formulary")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Quero testar gratuitamente!
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Right Column - Video Player Placeholder */}
          <div className="rounded-lg bg-gray-100 aspect-video mb-16">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/api/placeholder/640/360"
                alt="Video placeholder"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 text-white">
          <h2 className="text-4xl font-bold text-center">
            Controle total <br />
            <p className="font-normal">Produtividade máxima</p>
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1">
              <Image
                src="/Imagem_01_B.png"
                alt="Image the man in the computer"
                height={300}
                width={600}
                sizes="width: 'auto', height: 'auto'"
                // fill={true}
              />
            </div>

            {/* Right Column - Overlapping Images */}
            <div className="flex-1 space-y-6">
              <p className="text-xl leading-relaxed">
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
                <span className="font-bold">Simplifique sua gestão de TI</span>{" "}
                e tenha o controle que sua empresa precisa. Experimente agora!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8"
                onClick={() =>
                  document
                    .getElementById("formulary")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Quero testar gratuitamente!
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-16 mx-auto text-white" id="features">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              A ferramenta mais completa do mercado
            </h2>
            <div className="grid grid-cols-4 gap-8">
              <FeatureCard
                icon={"/icons/icon_1_pb.png"}
                title="Gerenciamento remoto de funcionários"
                description="Monitore o tempo de uso e os sites acessados para garantir eficiência no home office."
              />
              <FeatureCard
                icon={"/icons/icon_2_pb.png"}
                title="Gerenciamento de dispositivos"
                description="Gerencie permissões e configurações dos dispositivos de forma remota e centralizada."
              />
              <FeatureCard
                icon={"/icons/icon_3_pb.png"}
                title="Inventário de TI"
                description="Tenha um registro completo e atualizado dos dispositivos da empresa em um só lugar"
              />
              <FeatureCard
                icon={"/icons/icon_4_pb.png"}
                title="Rastreamento e geolocalização"
                description="Saiba onde estão os dispositivos corporativos em tempo real para maior segurança"
              />
              <FeatureCard
                icon={"/icons/icon_5_pb.png"}
                title="Gestão de Software"
                description="Instale, atualize ou remova programas remotamente com poucos cliques."
              />
              <FeatureCard
                icon={"/icons/icon_6_pb.png"}
                title="Mensageria"
                description="Monitore o tempo de uso e os sites acessados para garantir eficiência no home office."
              />

              <FeatureCard
                icon={"/icons/icon_7_pb.png"}
                title="Conformidade com a Estrutura"
                description="Garanta que todos os dispositivos sigam as políticas de TI da empresa."
              />

              <FeatureCard
                icon={"/icons/icon_8_pb.png"}
                title="Instalação Rápida e Simples"
                description="Configure em minutos e comece a gerenciar sua equipe sem complicação!"
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="container mx-auto py-16 text-white">
          <div className="max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Nossos parceiros
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {[
                "/images/abecom.webp",
                "/images/psa.png",
                "/images/e-deploy.png",
                "/images/ribeiro.png",
                "/images/box_delivery.svg",
                "/images/beneo.svg",
                "/images/vital_works.svg",
                "/images/medcof.svg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-full aspect-[4/3] flex items-center justify-center bg-white rounded-lg overflow-hidden"
                >
                  <Image
                    width={300}
                    height={300}
                    alt="Our partners"
                    src={src}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
              ))}
            </div>
            <div className="w-full flex">
              <Button
                size="lg"
                className="mx-auto bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8 mt-8"
                onClick={() =>
                  document
                    .getElementById("formulary")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Quero testar gratuitamente!
              </Button>
            </div>
          </div>
        </section>

        <FAQSection />

        <FormSection />

        <BlogSection />
      </div>
      <ChatWidget />
    </>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="h-full bg-transparent border-none text-white">
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex justify-center">
            <Image height={120} width={120} src={icon} alt={icon} />
          </div>
          <h3 className="font-semibold text-center text-lg">{title}</h3>
          <p className="text-gray-400 text-center">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
