import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Pedro Leal - Portfólio",
  description: "Portfólio profissional de Pedro Leal - Desenvolvedor Full Stack",
  keywords: ["Pedro Leal", "Desenvolvedor", "Full Stack", "Portfólio", "React", "Next.js"],
  authors: [{ name: "Pedro Leal" }],
  openGraph: {
    title: "Pedro Leal - Portfólio",
    description: "Portfólio profissional de Pedro Leal",
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body 
        className={`${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={300}>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}