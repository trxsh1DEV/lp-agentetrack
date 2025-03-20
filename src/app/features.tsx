import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FeaturesPage() {
  return (
    <section className="container py-16 mx-auto text-white" id="features">
      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          A ferramenta mais completa do mercado
        </h2>
        <div className="grid grid-cols-4 gap-8">
          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_1_pb.png"
            }
            title="Gerenciamento remoto de funcionários"
            description="Monitore o tempo de uso e os sites acessados para garantir eficiência no home office."
          />
          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_2_pb.png"
            }
            title="Gerenciamento de dispositivos"
            description="Gerencie permissões e configurações dos dispositivos de forma remota e centralizada."
          />
          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_3_pb.png"
            }
            title="Inventário de TI"
            description="Tenha um registro completo e atualizado dos dispositivos da empresa em um só lugar"
          />
          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_4_pb.png"
            }
            title="Rastreamento e geolocalização"
            description="Saiba onde estão os dispositivos corporativos em tempo real para maior segurança"
          />
          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_5_pb.png"
            }
            title="Gestão de Software"
            description="Instale, atualize ou remova programas remotamente com poucos cliques."
          />
          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_6_pb.png"
            }
            title="Mensageria"
            description="Monitore o tempo de uso e os sites acessados para garantir eficiência no home office."
          />

          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_7_pb.png"
            }
            title="Conformidade com a Estrutura"
            description="Garanta que todos os dispositivos sigam as políticas de TI da empresa."
          />

          <FeatureCard
            icon={
              "https://agentezero-api.infonova.com.br/static/files/content/images_lp/icon_8_pb.png"
            }
            title="Instalação Rápida e Simples"
            description="Configure em minutos e comece a gerenciar sua equipe sem complicação!"
          />
        </div>
        <div className="flex justify-center md:mt-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 text-2xl py-8 font-bold"
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
          <p className="text-gray-400 text-center tracking-wider">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
