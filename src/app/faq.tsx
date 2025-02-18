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
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-8 rounded-md w-full text-xl mt-2"
            onClick={() =>
              document
                .getElementById("formulary")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
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
