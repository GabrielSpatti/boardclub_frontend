import { MapPin, Clock, Mail, ChevronLeft } from "lucide-react";

export default function CovilDosJogosPage() {
  const primaryColor = "text-emerald-800";
  const lightBgColor = "bg-[#F7FEE7]";
  const accentColor = "bg-yellow-400";
  const primaryBgColor = "bg-emerald-800";

  // DADOS ESPECÍFICOS DESTA LOJA
  const loja = {
    nome: "Covil dos Jogos",
    cidade: "São Paulo/SP",
    descricao:
      "O Covil dos Jogos é um ponto de encontro tradicional na capital paulista, focado em jogos de cartas colecionáveis (TCGs) e eventos noturnos. Eles oferecem um atendimento super ágil para a retirada dos seus jogos Board Club.",
    endereco: "Rua das Cartas, 123 - Centro",
    horario: "Segunda a Sábado: 10h às 23h. Domingos: Fechado.",
    contato: "contato@covildosjogos.com.br",
    linkMaps: "http://googleusercontent.com/maps.google.com/2...", // Link fictício
  };

  return (
    <div className={`min-h-screen py-10 ${lightBgColor}`}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Botão de Voltar */}
        <a
          href="/lojas"
          className="flex items-center text-emerald-700 hover:text-emerald-900 transition mb-6"
        >
          <ChevronLeft size={20} />
          Voltar para a Lista de Lojas
        </a>

        {/* Título e Detalhes da Loja */}
        <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-emerald-500">
          <h1 className={`text-4xl font-extrabold mb-2 ${primaryColor}`}>
            {loja.nome}
          </h1>
          <p className="text-xl text-zinc-600 mb-6">{loja.cidade}</p>

          <p className="text-lg text-zinc-700 mb-6">{loja.descricao}</p>

          {/* Detalhes de Serviço */}
          <div className="space-y-4 border-t pt-4">
            {/* Endereço */}
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-red-500" />
              <div>
                <p className="font-semibold text-zinc-800">Endereço:</p>
                <p className="text-zinc-600">{loja.endereco}</p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-blue-500" />
              <div>
                <p className="font-semibold text-zinc-800">
                  Horário de Retirada/Devolução:
                </p>
                <p className="text-zinc-600">{loja.horario}</p>
              </div>
            </div>

            {/* Contato */}
            <div className="flex items-center gap-3">
              <Mail size={24} className="text-yellow-600" />
              <div>
                <p className="font-semibold text-zinc-800">
                  Contato (Parceria B2B):
                </p>
                <p className="text-zinc-600">{loja.contato}</p>
              </div>
            </div>
          </div>

          {/* CTA para o Maps */}
          <a
            href={loja.linkMaps}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 py-3 px-6 ${primaryBgColor} text-white font-bold rounded-lg hover:bg-emerald-700 transition duration-300 shadow-md inline-flex items-center justify-center gap-2`}
          >
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
