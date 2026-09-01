"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import VisualModeSwitcher from "@/components/visual-mode/VisualModeSwitcher";

const navLinks = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground"
        >
          Pedro Leal
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <div className="ml-2 flex items-center gap-4 border-l border-border pl-6">
            <VisualModeSwitcher />

            <span className="text-xs font-semibold text-muted-foreground">
              PT
            </span>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center border border-border md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl font-medium"
              >
                {link.label}
              </a>
            ))}
            <VisualModeSwitcher />

            <span className="mt-2 text-xs font-semibold text-muted-foreground">
              PT
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}
