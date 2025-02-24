"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { marked } from "marked";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BASE_URL } from "@/utils/request";

// marked.setOptions({
//   async: false,
//   breaks: false,
//   extensions: null,
//   gfm: true,
//   hooks: null,
//   pedantic: false,
//   silent: false,
//   tokenizer: null,
//   walkTokens: null,
// });

// Definindo o schema atualizado do formulário
const formSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  category: z.string().optional(),
  content: z.string().min(1, "Conteúdo é obrigatório"),
  image: z.any().optional(),
  preview: z.boolean(),
  keyword: z.string().optional(), // Palavra-chave
  metaDescription: z.string().max(160, "Máximo de 160 caracteres").optional(), // Meta descrição
  imageDescription: z.string().optional(), // Descrição da imagem
  externalLinks: z.string().optional(), // Links externos (URL separados por vírgula)
});

type FormValues = z.infer<typeof formSchema>;

export default function NewPostPage() {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      content: "",
      image: undefined,
      preview: false,
      keyword: "",
      metaDescription: "",
      imageDescription: "",
      externalLinks: "",
    },
  });

  const { watch, setValue, handleSubmit, register } = form;
  const previewEnabled = watch("preview");
  const contentValue = watch("content");

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category ?? "");
    formData.append("keyword", data.keyword ?? "");
    formData.append("metaDescription", data.metaDescription ?? "");
    formData.append("imageDescription", data.imageDescription ?? "");
    formData.append("externalLinks", data.externalLinks ?? "");

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Erro ao criar post");
      }
      router.push("/blog");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar post");
    }
  };

  function togglePreview() {
    setValue("preview", !previewEnabled);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Criar Novo Post
      </h1>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-6 text-white"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o título" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <FormControl>
                  <Input placeholder="Digite a categoria" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keyword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Palavra-chave (SEO)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite a palavra-chave principal"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="metaDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escreva uma meta descrição (máx. 160 caracteres)"
                    className="h-48 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conteúdo (Markdown)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escreva seu post usando markdown..."
                    className="h-48 resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Imagem</FormLabel>
                <FormControl>
                  <Input type="file" accept="image/*" {...register("image")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição da Imagem</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Descreva a imagem para SEO e acessibilidade"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="externalLinks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Links Externos</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Adicione links externos separados por vírgula"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-4">
            <Button type="button" variant="secondary" onClick={togglePreview}>
              {previewEnabled ? "Editar" : "Visualizar Markdown"}
            </Button>
            <Button type="submit">Criar Post</Button>
          </div>
        </form>
      </Form>

      {previewEnabled && (
        <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: marked(contentValue || "") }}
          />
        </div>
      )}
    </div>
  );
}
