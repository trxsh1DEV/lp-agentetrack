import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PartnersPage() {
  return (
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
                src={`https://agentezero-api.infonova.com.br/static/files/content/images_lp/${src}`}
                className="object-contain w-full h-full p-2"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex md:mt-6">
          <Button
            size="lg"
            className="mx-auto bg-gradient-to-r from-green-600 to-emerald-500 text-2xl py-8 mt-8 font-bold"
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
  );
}
