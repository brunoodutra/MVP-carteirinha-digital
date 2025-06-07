import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
          Carteirinha Digital Estudantil
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200 transition duration-300">
                Início
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-200 transition duration-300">
                Novo Cadastro
              </Link>
            </li>
            <li>
              <Link to="/saved" className="hover:text-blue-200 transition duration-300">
                Cadastros Salvos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;