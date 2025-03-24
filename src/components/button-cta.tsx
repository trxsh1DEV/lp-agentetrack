import { Button } from "./ui/button";

export default function ButtonCta({ className = "" }) {
  return (
    <Button
      size="lg"
      className={`bg-gradient-to-r from-violet-500 to-indigo-500 text-xl sm:text-2xl py-6 sm:py-8 font-bold w-full sm:w-auto ${className} hover:opacity-90`}
      onClick={() =>
        document
          .getElementById("formulary")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      QUERO AGENDAR MINHA DEMONSTRAÇÃO!
    </Button>
  );
}
