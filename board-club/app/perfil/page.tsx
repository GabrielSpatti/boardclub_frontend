import {
  User,
  CreditCard,
  History,
  Gamepad,
  Calendar,
  XCircle,
  CheckCircle,
} from "lucide-react";

export default function PerfilPage() {
  const primaryColor = "text-emerald-800";
  const primaryBgColor = "bg-emerald-800";
  const lightBgColor = "bg-[#F7FEE7]"; // Cor oficial de fundo

  // --- DADOS SIMULADOS DO USUÁRIO ---
  const userData = {
    nome: "Ana Carolina da Silva",
    email: "ana.carolina@exemplo.com",
    plano: "Clube Ouro",
    valorMensal: "R$ 59,90",
    proximaCobranca: "20/12/2025",
    jogosAtuais: [
      { id: 1, nome: "Monopoly", dataReserva: "05/11/2025" },
      { id: 6, nome: "Dixit", dataReserva: "10/11/2025" },
    ],
    historicoRecente: [
      {
        id: 10,
        nome: "Catan: Desbravadores",
        status: "Devolvido",
        data: "01/11/2025",
      },
      { id: 11, nome: "Jogo da Vida", status: "Devolvido", data: "25/10/2025" },
    ],
  };
  // ------------------------------------

  return (
    <div className={`${lightBgColor} font-sans min-h-screen py-10`}>
      <div className="max-w-6xl mx-auto px-8">
        {/* CABEÇALHO */}
        <header className="mb-10 flex items-center gap-4 border-b pb-4">
          <User size={36} className={`${primaryColor}`} />
          <h1 className={`text-3xl font-extrabold ${primaryColor}`}>
            Meu Perfil
          </h1>
        </header>

        {/* LAYOUT DE DUAS COLUNAS: INFORMAÇÕES PESSOAIS E DETALHES DA CONTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* COLUNA ESQUERDA: INFORMAÇÕES E ASSINATURA */}
          <section className="lg:col-span-2 space-y-8">
            {/* CARD 1: INFORMAÇÕES PESSOAIS */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-zinc-700">
                <User size={24} /> Dados Pessoais
              </h2>
              <p className="text-lg font-medium text-zinc-800">
                {userData.nome}
              </p>
              <p className="text-zinc-500">{userData.email}</p>
              <button
                className={`mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition duration-150`}
              >
                Editar Informações
              </button>
            </div>

            {/* CARD 2: GESTÃO DA ASSINATURA */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center gap-2 ${primaryColor}`}
              >
                <CreditCard size={24} /> Minha Assinatura
              </h2>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <p className="text-sm text-emerald-800 font-semibold">
                  Plano Atual:
                </p>
                <h3 className="text-3xl font-extrabold text-emerald-800 mb-2">
                  {userData.plano}
                </h3>
                <p className="text-lg text-zinc-600">
                  Mensalidade:{" "}
                  <span className="font-bold">{userData.valorMensal}</span>
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  Próxima Cobrança: {userData.proximaCobranca}
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="mt-6 flex gap-4">
                <button
                  className={`py-3 px-6 ${primaryBgColor} text-white font-bold rounded-lg hover:bg-emerald-700 transition duration-300 shadow-md flex-grow`}
                >
                  Alterar Plano
                </button>
                <button
                  className={`py-3 px-6 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300 shadow-md`}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </section>

          {/* COLUNA DIREITA: JOGOS E HISTÓRICO */}
          <section className="lg:col-span-1 space-y-8">
            {/* CARD 3: JOGOS ATUAIS */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-700">
                <Gamepad size={24} /> Jogos Reservados
              </h2>
              {userData.jogosAtuais.length > 0 ? (
                <ul className="space-y-3">
                  {userData.jogosAtuais.map((jogo) => (
                    <li
                      key={jogo.id}
                      className="flex justify-between items-center text-zinc-700 border-b pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="font-medium">{jogo.nome}</span>
                      <span className="text-sm flex items-center gap-1 text-zinc-500">
                        <Calendar size={14} /> {jogo.dataReserva}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-zinc-500">
                  Nenhum jogo reservado no momento.
                </p>
              )}
            </div>

            {/* CARD 4: HISTÓRICO RECENTE */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-700">
                <History size={24} /> Histórico Recente
              </h2>
              <ul className="space-y-3">
                {userData.historicoRecente.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-zinc-700 border-b pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium">{item.nome}</span>
                    <span
                      className={`text-sm flex items-center gap-1 ${
                        item.status === "Devolvido"
                          ? "text-emerald-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.status === "Devolvido" ? (
                        <CheckCircle size={14} />
                      ) : (
                        <XCircle size={14} />
                      )}
                      {item.status} ({item.data})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
