import type { Metadata } from "next";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

import Navbar from "@/components/NavBar";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "BoardClub - Aluguel de Jogos de Tabuleiro",
  description: "Alugue jogos de tabuleiro nas melhores lojas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GARANTIR QUE NÃO HÁ LINHAS EM BRANCO ANTES DESTE return (
  return (
    <html lang="pt-BR">
      <body className="antialiased font-mono h-min-screen">
        <Navbar />
        {/* Padding superior para a Navbar fixa */}
        <main className="p-6 pt-20">{children}</main>
        <ChatbotWidget />
      </body>
    </html>
  );
}
// E GARANTIR QUE NÃO HÁ NADA DEPOIS DESTE FECHAMENTO
