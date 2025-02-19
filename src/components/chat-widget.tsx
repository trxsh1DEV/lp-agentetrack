"use client";

import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email("Email inválido"),
  phone: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(`${BASE_URL}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await response.json();
      form.reset();
      toast({
        title: "Mensagem enviada com sucesso",
        description: "Entraremos em contato em breve",
        variant: "success",
        className: "bg-green-500",
      });
      setIsOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast({
        title: "Ocorreu um erro",
        description: err.message,
        variant: "destructive",
      });
    }
  };

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
                        <Input
                          placeholder="Telefone"
                          type="tel"
                          className="bg-gray-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-500"
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
          className="bg-transparent w-28 h-28"
        >
          <Image src="/icons/whatsapp.png" alt="Chat icon" fill={true} />
        </Button>
      )}
    </div>
  );
};
