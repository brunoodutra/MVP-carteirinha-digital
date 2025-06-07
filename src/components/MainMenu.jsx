import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Acesse sua Carteirinha Estudantil Digital
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Documento oficial reconhecido em todo território nacional
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mb-16">
        <Link
          to="/register"
          className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-blue-50"
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Novo Cadastro</h2>
          <p className="text-gray-600 text-center">Cadastre seus dados para criar uma nova carteirinha</p>
        </Link>

        <Link
          to="/saved"
          className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-blue-50"
        >
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cadastros Salvos</h2>
          <p className="text-gray-600 text-center">Acesse carteirinhas já cadastradas anteriormente</p>
        </Link>

        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <div className="bg-amber-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Informações</h2>
          <p className="text-gray-600 text-center">
            Suas carteirinhas ficam salvas no seu navegador. Você pode acessá-las a qualquer momento.
          </p>
        </div>
      </div>

      {/* Credibility Section */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Apoio e Reconhecimento Oficial
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">Ministério da Educação</h3>
            <p className="text-gray-600 text-center text-sm">
              Carteirinha reconhecida pelo MEC como documento oficial de identificação estudantil em todo território nacional.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="bg-green-50 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">Lei Federal nº 12.933/2013</h3>
            <p className="text-gray-600 text-center text-sm">
              Amparada pela Lei Federal que garante o direito à meia-entrada em eventos culturais e esportivos para estudantes.
            </p>
          </div>
        </div>
        
          {/* 
            Seção do menu principal que contém logos e informações de organizações estudantis.
            As organizações incluem UNE, ANPG e UBEs.
          */}
          {/* 
            <div className="flex justify-around items-center py-4 border-t border-b border-gray-200 mb-4">
            
              <div className="flex flex-col items-center">
                <div className="text-blue-700 font-bold text-2xl">UNE</div>
                <div className="text-xs text-gray-500">União Nacional dos Estudantes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-green-700 font-bold text-2xl">ANPG</div>
                <div className="text-xs text-gray-500">Associação Nacional de Pós-Graduandos</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-red-700 font-bold text-2xl">UBES</div>
                <div className="text-xs text-gray-500">União Brasileira dos Estudantes Secundaristas</div>
              </div>
            </div>
          */}
        
        <p className="text-center text-sm text-gray-600">
          A Carteirinha Digital Estudantil é um documento oficial que comprova a condição de estudante 
          em todo o território nacional, garantindo acesso a benefícios, descontos e meia-entrada em eventos.
        </p>
      </div>
    </div>
  );
}

export default MainMenu;