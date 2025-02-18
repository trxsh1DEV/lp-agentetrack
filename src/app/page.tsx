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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import BlogSection from "./blog";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="mb-12 lg:mb-0">
          <h1 className="text-6xl mb-6 text-white tracking-wide">
            <span className="text-emerald-300">Controle total</span> dos
            dispositivos da <span className="text-emerald-300">sua equipe</span>
            , onde quer que estejam!
          </h1>
          <p className="text-lg mb-8 text-zinc-300">
            Produtividade, segurança e gestão de ativos de TI por apenas R$5/mês
            por máquina!
          </p>

          {/* Form */}
          <div className="w-full flex gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8"
            >
              Quero testar gratuitamente!
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8"
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
      </div>

      <section className="container mx-auto py-16 px-8 text-white">
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
              // fill={true}
            />
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="flex-1 space-y-6">
            <p className="text-xl leading-relaxed">
              <span className="font-bold">
                Você sabe o que a sua equipe faz no home-office?
              </span>{" "}
              Com o Agent Track,{" "}
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
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8"
            >
              Quero testar gratuitamente!
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 px-8 text-white">
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
      <section className="container py-16 px-8 text-white">
        <div className="max-w-6xl mx-auto">
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
            >
              Quero testar gratuitamente!
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="container flex items-center justify-center py-16 px-8">
        <Card className="w-full flex flex-col md:flex-row p-6 bg-transparent border-none">
          {/* Left Section */}
          <div className="flex-1 text-white p-6 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-4">
              Solicite sua demonstração{" "}
              <span className="text-emerald-300"> gratuita!</span>
            </h2>
            <Image
              src="/images/form2.png"
              alt="Form image"
              // fill={true}
              width={300}
              height={300}
            />
          </div>

          {/* Right Section - Form */}
          <CardContent className="flex-1 flex flex-col p-6 gap-4">
            <Input
              type="text"
              placeholder="Nome completo"
              className="bg-white py-6"
            />
            <Input
              type="tel"
              placeholder="Telefone"
              className="bg-white py-6"
            />
            <Input type="text" placeholder="Cargo" className="bg-white py-6" />
            <Input
              type="email"
              placeholder="E-mail"
              className="bg-white py-6"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-500 text-xl py-6"
            >
              Enviar
            </Button>
          </CardContent>
        </Card>
      </section>

      <BlogSection />
    </div>
  );
};

const FAQSection = () => {
  const faqItems = [
    {
      question: "O que é o Agent Track e como ele funciona?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "Como funciona o controle de produtividade?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "É possível instalar ou desinstalar programas remotamente?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "O Agent Track é para minha empresa?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "O Agent Track pode ser instalado em qualquer computador?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "O Agent Track garante a segurança dos dados da empresa?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "Como funciona a geolocalização dos dispositivos?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "Como a empresa pode começar a usar o Agent Track?",
      answer: "Conteúdo da resposta aqui...",
    },
  ];

  return (
    // <div className="min-h-screen bg-slate-950 text-white p-8">
    <section className="container py-16 px-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-5xl font-bold mb-4">FAQ</h1>
          {/* <div className=""> */}
          <Image
            src="/images/faq.png"
            alt="FAQ image"
            width={700}
            height={300}
          />
          {/* </div> */}
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-8 rounded-md w-full text-xl mt-2">
            QUERO TESTAR GRATUITAMENTE!
          </Button>
        </div>

        {/* Right Columns - FAQ Items */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <Accordion type="single" collapsible className="space-y-10">
            {faqItems.slice(0, 4).map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/20 rounded-lg overflow-hidden bg-slate-900/50"
              >
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-slate-800/50 text-[1.118rem]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="space-y-10">
            {faqItems.slice(4).map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 4}`}
                className="border border-white/20 rounded-lg overflow-hidden bg-slate-900/50"
              >
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-slate-800/50 text-[1.118rem]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
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
