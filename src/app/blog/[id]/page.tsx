"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { marked } from "marked";
import { BASE_URL } from "@/utils/request";

interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
}

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetch(`${BASE_URL}/posts/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Post não encontrado");
          return res.json();
        })
        .then((data: Post) => setPost(data))
        .catch((error) => {
          console.error("Erro ao buscar o post:", error);
          router.push("/blog");
        });
    }
  }, [id, router]);

  if (!post) {
    return (
      <div className="container mx-auto p-6">
        <p>Carregando...</p>
      </div>
    );
  }

  const htmlContent = marked(post.content);

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-blue-500 hover:underline"
      >
        Voltar
      </button>
      <div className="w-full rounded shadow p-6 bg-slate-300">
        <img
          src={post.image}
          alt="Imagem do post"
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div
          className="prose w-full !max-w-none"
          // prose-headings:text-white prose-strong:text-white prose-blockquote:text-white
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
