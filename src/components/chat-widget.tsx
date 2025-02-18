"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[300px] bg-white shadow-xl">
          <div className="bg-emerald-600 p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-white font-semibold">Fale Conosco</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700"
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>
          <CardContent className="p-4 space-y-6">
            <Input placeholder="Nome completo" className="bg-gray-50" />
            <Input placeholder="E-mail" type="email" className="bg-gray-50" />
            <Input placeholder="Telefone" type="tel" className="bg-gray-50" />
            <Button
              className="w-full bg-gradient-to-r from-green-600 to-emerald-500"
              onClick={() => {
                // Handle form submission
                console.log("Form submitted");
                setIsOpen(false);
              }}
            >
              Iniciar Conversa
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-transparent w-28 h-28"
        >
          <Image
            src="/icons/whatsapp.png"
            alt="Chat icon"
            // width={500}
            // height={500}
            fill={true}
          />
        </Button>
      )}
    </div>
  );
};
