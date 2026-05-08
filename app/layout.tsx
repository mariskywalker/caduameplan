import type { Metadata } from "next";
import { DM_Mono, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "./cadu.css";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["900"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CADU × Bradesco Saúde. Controle e Auditoria em Neurodesenvolvimento",
  description:
    "CADU oferece rastreabilidade real de sessões, alertas automáticos de inconsistência e dados de evolução clínica para operadoras combaterem fraude em neurodesenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserratAlternates.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#F7F3EC" />
      </head>
      <body className="min-h-full flex flex-col cadu-body">{children}</body>
    </html>
  );
}
