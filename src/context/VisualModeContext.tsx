"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { VisualMode } from "@/types/visual-mode";

type VisualModeContextValue = {
  mode: VisualMode;
  setMode: (mode: VisualMode) => void;
};

const VisualModeContext = createContext<VisualModeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio-visual-mode";

export function VisualModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<VisualMode>("base");

  useEffect(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY) as VisualMode | null;

    if (
      savedMode === "base" ||
      savedMode === "noir" ||
      savedMode === "illustrated"
    ) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.visualMode = mode;
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  return (
    <VisualModeContext.Provider value={{ mode, setMode }}>
      {children}
    </VisualModeContext.Provider>
  );
}

export function useVisualMode() {
  const context = useContext(VisualModeContext);

  if (!context) {
    throw new Error(
      "useVisualMode must be used within a VisualModeProvider"
    );
  }

  return context;
}