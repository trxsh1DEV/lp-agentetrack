import ButtonCta from "@/components/button-cta";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Nossos parceiros
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
              className="w-full aspect-[4/3] flex items-center justify-center bg-white rounded-lg overflow-hidden p-2 sm:p-4"
            >
              <Image
                width={300}
                height={300}
                alt="Our partners"
                src={`https://agentezero-api.infonova.com.br/static/files/content/images_lp/${src}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex">
          <ButtonCta className="mx-auto mt-8 sm:mt-12 px-4" />
        </div>
      </div>
    </section>
  );
}
