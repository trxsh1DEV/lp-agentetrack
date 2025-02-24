import { marked, Renderer } from "marked";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BASE_URL } from "@/utils/request";
import ButtonBack from "@/components/button-back";

interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
  metaDescription: string;
  keyword: string;
  imageDescription: string;
  createdAt: string;
}

// 🔹 Função para buscar o post
async function getPost(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Erro ao buscar o post:", error);
    return null;
  }
}

// 🔹 Metadados dinâmicos do post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return {
      title: "Post não encontrado | Meu Blog",
      description: "O post que você está tentando acessar não existe.",
    };
  }

  return {
    title: `${post.title} | Meu Blog`,
    description: post.metaDescription,
    keywords: post.keyword,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.image }],
    },
  };
}

// Configuração do Markdown
const renderer = new Renderer();

renderer.link = function ({ href, title, text }) {
  return `<a target="_blank" href="${href}" ${
    title ? `title="${title}"` : ""
  }>${text}</a>`;
};

marked.setOptions({
  renderer: renderer,
});

// 🔹 Página do post
export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) return notFound(); // Retorna erro 404 do Next.js

  const htmlContent = marked(post.content);

  const message = encodeURIComponent(
    `Olá, gostaria de saber mais sobre o Agente Track`
  );
  const whatsappURL = `https://wa.me/11969642568?text=${message}`;

  return (
    <div className="flex justify-center  bg-gray-900 min-h-screen p-4">
      <div className="w-full max-w-3xl  bg-gray-800 shadow-lg rounded-lg p-6 md:p-10">
        {/* 🔹 Botão Voltar */}
        <ButtonBack />

        {/* 🔹 Imagem destacada */}
        <img
          src={post.image}
          alt={post.imageDescription}
          className="w-full max-w-3xl mx-auto rounded-lg object-cover"
          loading="lazy"
        />

        {/* 🔹 Título e Data */}
        <h1 className="text-4xl md:text-5xl font-bold mt-6 text-white leading-tight">
          {post.title}
        </h1>
        <p className=" text-gray-400 text-sm mt-2">
          Publicado em {new Date(post.createdAt).toLocaleDateString("pt-BR")}
        </p>

        {/* 🔹 Meta descrição */}
        <p className="text-lg  text-gray-300 italic mt-4">
          {post.metaDescription}
        </p>

        {/* 🔹 Conteúdo do Post */}
        <div
          className="prose prose-lg prose-invert mt-6 w-full max-w-none  text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* 🔹 CTA Fixo */}
        <div className="flex justify-between items-center mt-10 p-4 border-t  border-gray-700">
          <span className="text-lg font-semibold  text-gray-300">
            Gostou do conteúdo? Entre em contato!
          </span>
          <Link
            href={whatsappURL}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Fale no WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
