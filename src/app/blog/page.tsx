"use client";

import { BASE_URL } from "@/utils/request";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Utilizando API fake para obter os posts
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data.slice(0, 20)))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, []);

  return (
    <div className="container mx-auto p-6 relative text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center ">Blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="bg-slate-700 rounded shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            <img
              src={post.image}
              alt="Imagem do post"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>
                {post.content.length > 100
                  ? post.content.substring(0, 100)
                  : post.content}
                ...
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* <Link
        href="/blog/new_boreum"
        className="fixed bottom-20 right-20 bg-green-500 text-white rounded-full p-4 hover:bg-green-600 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </Link> */}
    </div>
  );
}
