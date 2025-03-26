"use client";
import { useState } from "react";
import { Linkedin, Mail, MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md p-4 text-white bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo e Nome da Empresa */}
        <Link className="flex items-center gap-2" href="/">
          <img
            src="https://agentezero-api.infonova.com.br/static/files/content/images_lp/logo.svg"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Agente Track</span>
        </Link>

        {/* Botão do Menu Mobile */}
        <button
          className="sm:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links de Navegação */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-900 sm:static sm:w-auto sm:bg-transparent flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-0 ${
            isOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <Link href="/" className="text-gray-400 hover:text-violet-500">
            Home
          </Link>
          <Link href="/blog" className="text-gray-400 hover:text-violet-500">
            Blog
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-violet-500">
            Sobre
          </Link>
          <Link
            className="text-gray-400 hover:text-violet-500"
            href="#features"
          >
            Recursos
          </Link>
          <Link className="text-gray-400 hover:text-violet-500" href="#faq">
            FAQ
          </Link>
        </div>

        {/* Ícones de Contato */}
        <div className="hidden sm:flex space-x-4">
          <Link
            href={`https://wa.me/11969642568?text=${encodeURIComponent(
              "Olá, gostaria de saber mais sobre o Agente Track"
            )}`}
            target="_blank"
            className="text-gray-400 hover:text-green-500"
          >
            <MessageCircle size={20} />
          </Link>
          <Link
            href="mailto:agentetrack@infonova.com.br"
            className="text-gray-400 hover:text-blue-500"
          >
            <Mail size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/agente-track"
            target="_blank"
            className="text-gray-400 hover:text-blue-700"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
