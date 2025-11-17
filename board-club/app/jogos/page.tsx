"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Gamepad } from "lucide-react";
import { useState } from "react";

export default function JogosPage() {
  const primaryColor = "text-emerald-800";
  const accentColor = "bg-yellow-400";
  const headerBgColor = "bg-[#F7FEE7]"; // Cor oficial de fundo
  const lightBgColor = "bg-[#F7FEE7]"; // Cor oficial de fundo

  const [searchTerm, setSearchTerm] = useState("");

  // --- BASE DE DADOS DE JOGOS (6 Jogos) ---
  const todosJogos = [
    // TODOS com extensão .jpeg
    {
      id: 1,
      nome: "Monopoly",
      precoVarejo: "R$ 160,00",
      custoAssinatura: "R$ 20,00",
      desc: "Clássico jogo de negociação de propriedades.",
      src: "/monopoly.jpeg",
    },
    {
      id: 2,
      nome: "Jogo da Vida",
      precoVarejo: "R$ 145,00",
      custoAssinatura: "R$ 18,00",
      desc: "Escolha sua carreira e viva uma jornada cheia de sorte e imprevistos.",
      src: "/jogo-da-vida.jpeg",
    },
    {
      id: 3,
      nome: "Detetive",
      precoVarejo: "R$ 110,00",
      custoAssinatura: "R$ 15,00",
      desc: "Use a dedução para solucionar o crime antes de todos!",
      src: "/detetive.jpeg",
    },

    // Novas entradas com .jpeg
    {
      id: 4,
      nome: "Catan: Desbravadores",
      precoVarejo: "R$ 250,00",
      custoAssinatura: "R$ 30,00",
      desc: "Negocie, construa e colonize a ilha de Catan.",
      src: "/catan.jpeg",
    },
    {
      id: 5,
      nome: "Ticket to Ride",
      precoVarejo: "R$ 280,00",
      custoAssinatura: "R$ 35,00",
      desc: "Colecione vagões e conecte cidades dos EUA por ferrovias.",
      src: "/ticket-to-ride.jpeg",
    },
    {
      id: 6,
      nome: "Dixit",
      precoVarejo: "R$ 180,00",
      custoAssinatura: "R$ 22,00",
      desc: "Um jogo de imaginação e intuição com cartas lindamente ilustradas.",
      src: "/dixit.jpeg",
    },
  ];
  // ------------------------------------

  const jogosFiltrados = todosJogos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${lightBgColor} font-sans min-h-screen`}>
      <main className="w-full">
        {/* 1. SEÇÃO PRINCIPAL / CABEÇALHO */}
        <header className={`py-16 text-center ${headerBgColor}`}>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className={`text-4xl font-bold mb-2 ${primaryColor}`}>
              Catálogo Completo de Jogos
            </h1>
            <p className={`text-lg font-medium ${primaryColor}`}>
              Incontáveis títulos para sua próxima reserva!
            </p>
          </div>
        </header>

        {/* 2. BARRA DE BUSCA E FILTRO */}
        <section className={`py-8 ${lightBgColor}`}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-grow">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Buscar por nome, tema ou dificuldade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <button
                className={`py-3 px-6 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition duration-300 shadow-md flex items-center justify-center gap-2`}
              >
                <Filter size={20} />
                Filtros
              </button>
            </div>
          </div>
        </section>

        {/* 3. GRID DE JOGOS */}
        <section className="py-12 w-full max-w-7xl mx-auto px-8">
          {jogosFiltrados.length === 0 ? (
            <div className="text-center py-10">
              <Gamepad size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-600">
                Nenhum jogo encontrado para "{searchTerm}".
              </p>
              <button
                className="text-emerald-700 mt-2 hover:underline"
                onClick={() => setSearchTerm("")}
              >
                Ver todos os jogos
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jogosFiltrados.map((jogo) => (
                <div
                  key={jogo.id}
                  className="bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="relative w-full h-48 bg-gray-200">
                    <Image
                      src={jogo.src}
                      alt={`Capa do jogo ${jogo.nome}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${primaryColor}`}>
                      {jogo.nome}
                    </h3>
                    <p className="text-zinc-600 mb-4 h-12 overflow-hidden">
                      {jogo.desc}
                    </p>

                    <div className="flex items-center justify-between mt-4 border-t pt-4">
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium text-red-500 line-through">
                          {jogo.precoVarejo}
                        </span>
                        <span className="text-xl font-extrabold text-emerald-800">
                          {jogo.custoAssinatura}
                        </span>
                        <span className="text-xs text-gray-500">
                          (custo percebido na reserva)
                        </span>
                      </div>

                      <button
                        className={`bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 shadow-md`}
                      >
                        Adicionar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
