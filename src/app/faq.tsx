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
      question: "O Agente Track é para minha empresa?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "O Agente Track pode ser instalado em qualquer computador?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "O Agente Track garante a segurança dos dados da empresa?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "Como funciona a geolocalização dos dispositivos?",
      answer: "Conteúdo da resposta aqui...",
    },
    {
      question: "Como a empresa pode começar a usar o Agente Track?",
      answer: "Conteúdo da resposta aqui...",
    },
  ];

  return (
    <section className="container mx-auto py-16 px-4 md:px-8 text-white">
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
              <AccordionContent className="px-6 py-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-8 rounded-md lg:text-xl sm:text-lg"
          onClick={() =>
            document
              .getElementById("formulary")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          QUERO TESTAR GRATUITAMENTE
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;
