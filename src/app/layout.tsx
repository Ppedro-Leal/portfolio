import "./globals.css";

import "../styles/visual-modes/noir.css";
import "../styles/visual-modes/illustrated.css";
import "../styles/visual-modes/transition.css";

import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Oswald, Sora } from "next/font/google";
import { VisualModeProvider } from "@/context/VisualModeContext";
import VisualTransition from "@/components/visual-mode/VisualTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Pedro Leal | Desenvolvedor Full Stack",
  description:
    "Portfólio de Pedro Leal, Desenvolvedor Full Stack com foco em React, Next.js, Node.js e TypeScript.",
  keywords: [
    "Pedro Leal",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Pedro Leal" }],
  openGraph: {
    title: "Pedro Leal | Desenvolvedor Full Stack",
    description:
      "Desenvolvimento web com React, Next.js, Node.js e TypeScript.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${sora.variable} ${oswald.variable} ${bricolage.variable} min-h-screen antialiased`}
      >
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <VisualModeProvider>
          {children}
          <VisualTransition />
        </VisualModeProvider>
      </body>
    </html>
  );
}
