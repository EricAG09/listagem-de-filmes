import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const categories = ["Ação", "Comédia", "Drama", "Terror", "Ficção Científica"]; // Podendo ser adicionadas mais categorias se necessário

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-sky-950 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-10" />
        <span className="text-2xl font-semibold">Filmes</span>
      </div>

      {/* Ícone de Menu para Mobile */}
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="sm:hidden text-white text-2xl focus:outline-none"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Desktop */}
      <div className="hidden sm:flex items-center space-x-6">
        {/* Barra de Pesquisa */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Pesquisar filmes..."
            className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
          />
        </div>

        {/* Dropdown de Categorias */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Categorias <FaChevronDown className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-gray-800 mt-2 w-48 rounded-lg shadow-lg transition duration-300 ease-in-out">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onSearch(category);
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Mobile o famoso Hamburguer */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-sky-950 flex flex-col items-center space-y-4 p-4 sm:hidden">
          {/* Barra de Pesquisa */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Pesquisar filmes..."
            className="px-4 py-2 bg-gray-700 text-white rounded-lg w-full text-center"
          />

          {/* Dropdown de Categorias */}
          <div className="relative w-full text-center">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex justify-center items-center bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 w-full"
            >
              Categorias <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="bg-gray-800 mt-2 w-full rounded-lg shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onSearch(category);
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
