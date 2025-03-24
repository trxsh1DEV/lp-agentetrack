import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-md p-4 text-white">
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

        {/* Links de Navegação */}
        <div className="flex space-x-6">
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
        <div className="flex space-x-4">
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
            href="mailto:seuemail@email.com"
            className="text-gray-400 hover:text-blue-500"
          >
            <Mail size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/seu_perfil"
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
