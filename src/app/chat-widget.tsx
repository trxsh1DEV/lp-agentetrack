// "use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BASE_URL } from "@/utils/request";
import { useRouter } from "next/navigation";

const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length > 11) return phoneNumber.slice(0, 11);
  return phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
};

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Digite seu nome" })
      .refine((value) => value.trim().split(" ").length >= 2, {
        message: "Digite seu nome completo",
      }),
    phone: z
      .string()
      .min(11, { message: "Número inválido!" })
      .max(12, { message: "Número inválido!" }),
    email: z.string().email("Digite um e-mail válido"),
  })
  .refine((data) => data.email || data.phone, {
    message: "Você deve fornecer pelo menos um e-mail ou telefone",
    path: ["email", "phone"], // This will show the error message on both fields
  });

type FormValues = z.infer<typeof formSchema>;

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    const formattedPhone = `+55${data.phone.replace(/[^\d]/g, "")}`;
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre o Agente Track`
    );
    const whatsappURL = `https://wa.me/11969642568?text=${message}`;

    // Redireciona para o WhatsApp
    window.open(whatsappURL, "_blank");

    try {
      await fetch(`${BASE_URL}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, phone: formattedPhone }),
      });
      setIsOpen(false);
      form.reset();
      router.push("/thanks");
    } catch (err: any) {
      toast({
        title: "Ocorreu um erro",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed md:bottom-4 md:right-4 -right-6 bottom-0 z-50">
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nome completo"
                          className="bg-gray-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="E-mail"
                          type="email"
                          className="bg-gray-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Controller
                          name="phone"
                          control={form.control}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Telefone, Ex: 99123456789"
                              type="tel"
                              className="bg-gray-50"
                              value={formatPhoneNumber(field.value)}
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value.replace(/\D/g, "")
                                )
                              }
                            />
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700"
                >
                  Iniciar Conversa
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-transparent hover:bg-transparent shadow-none rounded-full"
        >
          <Image
            src="https://agentezero-api.infonova.com.br/static/files/content/images_lp/whatsapp.png"
            alt="Chat icon"
            height={100}
            width={100}
          />
        </Button>
      )}
    </div>
  );
};
