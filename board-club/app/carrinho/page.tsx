"use client";

import { Package, Gamepad, Zap, Store } from "lucide-react"; // Trocando History por Store

export default function CarrinhoPage() {
  const primaryColor = "text-emerald-800";
  const accentColor = "bg-yellow-400";
  const headerBgColor = "bg-[#F7FEE7]";
  const lightBgColor = "bg-[#F7FEE7]";

  // O carrinho está vazio!
  const itensCarrinho = [];
  const totalItens = itensCarrinho.length;

  return (
    <div className="min-h-screen">
      {/* 1. SEÇÃO PRINCIPAL / CABEÇALHO */}
      <header className={`py-16 text-center ${headerBgColor}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl font-bold mb-2 ${primaryColor}`}>
            Meu Carrinho
          </h1>
          <p className={`text-lg font-medium ${primaryColor}`}>
            Selecione os jogos que deseja reservar e aproveite a diversão!
          </p>
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL (Carrinho Vazio) */}
      <section className={`py-20 ${lightBgColor}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Package size={64} className={`mx-auto mb-6 text-gray-400`} />

          <h2 className={`text-3xl font-bold mb-3 ${primaryColor}`}>
            Seu Carrinho está Vazio!
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Parece que você ainda não selecionou nenhum jogo para a sua próxima
            reserva. Comece a navegar no nosso catálogo para escolher seus
            títulos.
          </p>

          {/* BOTÃO PRINCIPAL PARA A PÁGINA DE JOGOS */}
          <a
            href="/jogos"
            className={`py-3 px-8 ${accentColor} ${primaryColor} font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center justify-center mx-auto max-w-sm gap-2 text-lg`}
          >
            <Gamepad size={20} />
            Explorar Catálogo de Jogos
          </a>

          {/* NOVO BLOCO: CTA PARA LOJAS PARCEIRAS */}
          <div className="mt-12">
            <p className="text-gray-600 mb-4 font-medium">
              Ou veja as nossas lojas parceiras para retirada e devolução:
            </p>
            <a
              href="/lojas" // REDIRECIONANDO PARA /lojas
              className={`py-2 px-6 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-600 transition duration-300 shadow-md flex items-center justify-center mx-auto max-w-xs gap-2`}
            >
              <Store size={20} />
              Ver Lojas Parceiras
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
