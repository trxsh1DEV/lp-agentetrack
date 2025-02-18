import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-md p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo e Nome da Empresa */}
        <Link className="flex items-center gap-2" href="/">
          <img src="/icons/logo.svg" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Agente Track</span>
        </Link>

        {/* Links de Navegação */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-400 hover:text-teal-500">
            Home
          </Link>
          <Link href="/blog" className="text-gray-400 hover:text-teal-500">
            Blog
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-teal-500">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
