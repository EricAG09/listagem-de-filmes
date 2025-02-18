// src/components/AdminPage.tsx
import React from "react";

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-800 text-white">
      {/* Header */}
      <header className="bg-green-900 p-4">
        <h1 className="text-3xl font-bold">Página de Administração</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl mb-4 bg-">Gerenciar Itens</h2>
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-700 rounded">
              Adicionar Novo Item
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-yellow-700 rounded-lg">
              Ver Itens Ativos
            </button>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg">
              Remover Itens
            </button>
          </div>
        </section>

        {/* Item List */}
        <section>
          <h2 className="text-2xl mb-4">Lista de Itens</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex justify-between items-center py-2 border-b border-gray-600">
                <span>Item 1</span>
                <button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md">
                  Remover
                </button>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-gray-600">
                <span>Item 2</span>
                <button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md">
                  Remover
                </button>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-gray-600">
                <span>Item 3</span>
                <button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md">
                  Remover
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
