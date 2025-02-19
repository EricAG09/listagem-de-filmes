import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">🎬 Listagem de Filmes</p>

        <nav className="mt-2">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/" className="hover:text-gray-400 transition">Início</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400 transition">Filmes</a>
            </li>
            <li>
              <a href="https://github.com/EricAG09" className="hover:text-gray-400 transition">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eric-galvao/" className="hover:text-gray-400 transition">Linkedin</a>
            </li>
          </ul>
        </nav>

        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Listagem de Filmes. Todos os direitos reservados. 
          <p>Desenvolvido com 💻 por Eric Galvão</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
