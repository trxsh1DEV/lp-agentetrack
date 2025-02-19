"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Post } from "./blog/page";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/request";

const BlogSection = () => {
  // const blogPosts = [
  //   {
  //     image: "/images/generic1.jpg",
  //     title: "COLOQUE AQUI O SEU SUBTÍTULO",
  //     description:
  //       "Há espaço para algumas linhas de texto. Certifique-se de passar sua mensagem com clareza e objetividade.",
  //     action: "Adicione uma Call-to-Action",
  //   },
  //   {
  //     image: "/images/generic2.jpg",
  //     title: "COLOQUE AQUI O SEU SUBTÍTULO",
  //     description:
  //       "Há espaço para algumas linhas de texto. Certifique-se de passar sua mensagem com clareza e objetividade.",
  //     action: "Adicione uma Call-to-Action",
  //   },
  //   {
  //     image: "/images/generic3.jpg",
  //     title: "COLOQUE AQUI O SEU SUBTÍTULO",
  //     description:
  //       "Há espaço para algumas linhas de texto. Certifique-se de passar sua mensagem com clareza e objetividade.",
  //     action: "Adicione uma Call-to-Action",
  //   },
  // ];

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Utilizando API fake para obter os posts
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data.slice(0, 6)))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, []);

  return (
    <section className="container mx-auto px-8 py-16 text-white">
      {/* Blog Header */}
      {/* <div className="max-w-6xl mb-12"> */}
      <h1 className="text-5xl font-bold mb-8">
        Agente Track <span className="font-normal">Blog</span>
      </h1>
      {/* </div> */}

      {/* Blog Grid */}
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="bg-transparent border-none text-white">
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
            <CardFooter className="px-0 pt-4">
              {/* <Button
                variant="outline"
                className="bg-[#4ecca3] text-white border-none hover:bg-[#45b892]"
              >
                Clique aqui
              </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
    // </div>
  );
};

export default BlogSection;
