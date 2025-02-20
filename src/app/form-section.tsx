/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { BASE_URL } from "@/utils/request";

const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 3) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    7
  )}-${phoneNumber.slice(7, 11)}`;
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
    position: z.string().max(50),
    email: z.string().email("Digite um e-mail válido"),
  })
  .refine((data) => data.email || data.phone, {
    message: "Você deve fornecer pelo menos um e-mail ou telefone",
    path: ["email", "phone"], // This will show the error message on both fields
  });

type FormValues = z.infer<typeof formSchema>;

export const FormSection = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      position: "",
      email: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    try {
      await fetch(`${BASE_URL}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      form.reset();
      // await response.json();
      // toast({
      //   title: "Formulário enviado com sucesso",
      //   description: "Verifique seu e-mail para testar nosso software",
      //   variant: "success",
      //   className: "bg-green-500",
      // });
    } catch (err: any) {
      toast({
        title: "Ocorreu um erro",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section
      className="container mx-auto flex items-center justify-center py-16"
      id="formulary"
    >
      <Card className="w-full flex flex-col md:flex-row p-6 bg-transparent border-none">
        {/* Left Section */}
        <div className="flex-1 text-white p-6 flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4">
            Solicite sua demonstração{" "}
            <span className="text-emerald-300"> gratuita!</span>
          </h2>
          <Image
            src="/images/form2.png"
            alt="Form image"
            width={300}
            height={300}
          />
        </div>

        {/* Right Section - Form */}
        <CardContent className="flex-1 flex flex-col p-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Nome completo"
                        className="bg-white py-6"
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
                    <FormControl>
                      <Controller
                        name="phone"
                        control={form.control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Telefone, Ex: (11) 99999-9999"
                            type="tel"
                            className="bg-white py-6"
                            value={formatPhoneNumber(field.value)}
                            onChange={(e) =>
                              field.onChange(e.target.value.replace(/\D/g, ""))
                            }
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Cargo"
                        className="bg-white py-6"
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
                    <FormControl>
                      <Input
                        placeholder="E-mail"
                        className="bg-white py-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r w-full from-green-600 to-emerald-500 text-xl py-6 hover:opacity-85 mt-6"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
