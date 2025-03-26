import ButtonCta from "@/components/button-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const FAQSection = () => {
  const faqItems = [
    {
      question: "O que é o Agente Track e como ele funciona?",
      answer:
        "O Agente Track é um software de gerenciamento de dispositivos que permite monitorar, gerenciar e controlar remotamente os dispositivos da sua empresa, garantindo mais segurança, produtividade e eficiência para equipes presenciais e home office.",
    },
    {
      question: "Como funciona a geolocalização dos dispositivos?",
      answer:
        "O Agente Track permite que você visualize a localização dos dispositivos corporativos em tempo real, garantindo mais segurança e controle sobre o patrimônio da empresa.",
    },
    {
      question: "Como funciona o controle de produtividade?",
      answer:
        "O software monitora tempo de uso, sites acessados e aplicativos utilizados, gerando relatórios detalhados para que o gestor tenha visibilidade total da equipe.",
    },
    {
      question: "Como a empresa pode começar a usar o Agente Track?",
      answer:
        "A instalação é simples e pode ser feita pelo próprio cliente ou com suporte da nossa equipe. Por apenas R$5/mês por máquina, você já pode começar a gerenciar seus dispositivos!",
    },
    {
      question: "É possível instalar ou desinstalar programas?",
      answer:
        "Sim! Com a funcionalidade de Gestão de Software, você pode instalar, remover ou atualizar programas sem precisar acessar fisicamente os dispositivos.",
    },
    {
      question: "O Agente Track é para minha empresa?",
      answer:
        "Se sua empresa tem colaboradores em home office, equipes híbridas ou precisa gerenciar múltiplos dispositivos de TI, o Agente Track é a solução ideal. Ele reduz riscos, aumenta a produtividade e simplifica a gestão de ativos de TI, sendo indicado para negócios de qualquer porte.",
    },
    {
      question: "O Agente Track pode ser instalado em qualquer computador?",
      answer:
        "Sim! O Agente Track é compatível com Windows, macOS e Linux, podendo ser instalado facilmente em qualquer máquina corporativa.",
    },
    {
      question: "O Agente Track garante a segurança dos dados da empresa?",
      answer:
        "Sim! Ele ajuda a manter a segurança de ativos de TI, impedindo o uso de softwares não autorizados e reduzindo riscos de vazamento de dados.",
    },
  ];

  return (
    <section
      className="container mx-auto py-16 px-4 md:px-8 text-white"
      id="faq"
    >
      {/* FAQ Title */}
      <h1 className="text-5xl font-bold text-center mb-4">FAQ</h1>
      <div className="flex justify-center mb-4">
        <Image
          src="https://agentezero-api.infonova.com.br/static/files/content/images_lp/images/faq.png"
          alt="FAQ image"
          width={300}
          height={150}
          className="w-auto h-auto"
        />
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqItems.map((item, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem
              value={`item-${index}`}
              className="border border-white/20 rounded-lg bg-transparent"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex">
        <ButtonCta className="mx-auto mt-8 sm:mt-12 px-4" />
      </div>
    </section>
  );
};

export default FAQSection;
