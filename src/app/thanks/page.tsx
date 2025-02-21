"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ConversionTracking } from "@/components/conversion-tracking";

export default function ThankYouPage() {
  // sendGTMEvent({
  //   event: "conversion",
  //   value: { send_to: "AW-16871047013/fPfWCJnD7KAaEOX-3uw-" },
  // });
  return (
    <>
      <ConversionTracking />
      <div className="min-h-[92vh] flex items-center justify-center p-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Seu Teste <span className="text-emerald-400">Grátis</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold">
              Já Está <span className="text-emerald-400">Disponível</span>
            </h2>

            <p className="tracking-wide text-xl text-gray-300">
              Agora é hora de ver o Agent Track em ação e transformar a forma
              como você gerencia seus dispositivos e equipes!
            </p>

            <div className="space-y-2 text-xl text-gray-300">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>Verifique seu e-mail para mais detalhes.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="mr-2">📱</span>
                <span>
                  Precisa de ajuda? Nossa equipe está pronta para te apoiar!
                </span>
              </p>
            </div>

            <p className="text-gray-300 text-xl">
              Aproveite ao máximo seu teste e experimente o controle total nas
              suas mãos.
            </p>

            <div className="flex gap-4 pt-4 font-bold">
              <Link
                href="/blog"
                className="bg-emerald-400 text-black px-6 py-2 rounded-md hover:bg-emerald-500 transition-colors"
              >
                CONFIRA NOSSO BLOG
              </Link>
              <Link
                href="/"
                className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                PÁGINA INICIAL
              </Link>
            </div>
          </div>

          {/* <div className="relative bg-red-500"> */}
          <Image
            src="https://agentezero-api.infonova.com.br/static/files/content/images_lp/images/thanks.png"
            alt="Team holding thank you sign"
            width={600}
            height={600}
            //   className="w-full"
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
