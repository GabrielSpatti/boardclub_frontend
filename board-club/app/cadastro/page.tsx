import Image from "next/image";

// Componente principal: Usado como default export para ser renderizado pelo Next.js
export default function Home() {
  return (
    // Fundo BRANCO garantido em todos os modos: bg-white e remove dark:bg-black
    // Usando min-h-screen e flex para garantir que o conteúdo fique centralizado na tela
    <div className="flex min-h-screen items-center justify-center bg-[#F7FEE7] font-sans">
      {/* AJUSTE PRINCIPAL para "PÁGINA DE CADASTRO":
        - max-w-xl: Limita a largura do conteúdo (formulário) para ser mais compacto.
        - Não usa min-h-screen: Deixa a altura se ajustar ao conteúdo.
        - py-12: Padding vertical suficiente, mas menor que o anterior (py-32).
        - shadow-2xl: Adiciona uma sombra para que o "bloco" branco se destaque na tela branca.
        - rounded-xl: Adiciona bordas arredondadas (opcional, mas comum em formulários).
      */}
      <main className="flex w-full max-w-xl flex-col items-center justify-start py-12 px-8 bg-white shadow-2xl rounded-xl">
        {/* Adicionado Título para simular o cabeçalho de um formulário */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Bem-vindo(a) ao Nosso App
        </h1>

        {/* SEÇÃO DOS CARDS: Esta seria a área do FORMULÁRIO. 
          Deixamos o container da section mais simples.
        */}
        <section className="w-full">
          <div className="grid gap-6 sm:grid-cols-1">
            {" "}
            {/* Reduzido para 1 coluna para simular campos de formulário */}
            {/* Card 1 (Simulando um Campo de Formulário) */}
            {/* Mantido branco, sem dark:bg para consistência */}
            <div className="bg-white border border-zinc-300 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-1 text-black">
                Nome de Usuário
              </h3>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full p-2 border border-zinc-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Card 2 (Simulando outro Campo) */}
            <div className="bg-white border border-zinc-300 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-1 text-black">Email</h3>
              <input
                type="email"
                placeholder="email@exemplo.com"
                className="w-full p-2 border border-zinc-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Card 3 (Simulando o Botão de Ação) */}
            <button className="w-full bg-[#004F3B] hover:bg-[#003D2E] text-white font-bold py-3 rounded-lg transition duration-150 mt-4">
              CADASTRAR
            </button>
          </div>
        </section>

        <div className="mt-6 text-sm text-center">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition duration-150"
          >
            Já tem uma conta? Faça Login
          </a>
        </div>
      </main>
    </div>
  );
}
