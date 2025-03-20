"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Post } from "./blog/page";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/request";
import Link from "next/link";

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data.slice(0, 6)))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, []);

  return (
    <section className="container mx-auto px-8 py-16 text-white">
      <h1 className="text-5xl font-bold mb-8">
        Agente Track <span className="font-normal">Blog</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="transition-all duration-300 hover:scale-105"
          >
            <Card className="bg-transparent border-none text-white hover:bg-slate-800/30">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
                  <p className="text-gray-400">
                    {post.content.length > 100
                      ? post.content.substring(0, 100)
                      : post.content}
                    ...
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
