"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type { VisualMode } from "@/types/visual-mode";

export type TransitionPhase = "idle" | "entering" | "switching" | "leaving";

type VisualModeContextValue = {
  mode: VisualMode;
  pendingMode: VisualMode | null;
  transitionPhase: TransitionPhase;
  isTransitioning: boolean;
  requestMode: (mode: VisualMode) => void;
};

const VisualModeContext = createContext<VisualModeContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-visual-mode";

const VALID_MODES: VisualMode[] = ["base", "noir", "illustrated"];

export function VisualModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<VisualMode>("base");

  const [pendingMode, setPendingMode] = useState<VisualMode | null>(null);

  const [transitionPhase, setTransitionPhase] =
    useState<TransitionPhase>("idle");

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY);

    if (savedMode && VALID_MODES.includes(savedMode as VisualMode)) {
      const restoredMode = savedMode as VisualMode;

      setMode(restoredMode);

      document.documentElement.dataset.visualMode = restoredMode;
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.visualMode = mode;

    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  const requestMode = useCallback(
    (nextMode: VisualMode) => {
      if (nextMode === mode || transitionPhase !== "idle") {
        return;
      }

      clearTimers();

      setPendingMode(nextMode);
      setTransitionPhase("entering");

      const switchTimer = setTimeout(() => {
        setTransitionPhase("switching");

        setMode(nextMode);

        const leaveTimer = setTimeout(() => {
          setTransitionPhase("leaving");

          const finishTimer = setTimeout(() => {
            setTransitionPhase("idle");
            setPendingMode(null);
          }, 520);

          timersRef.current.push(finishTimer);
        }, 180);

        timersRef.current.push(leaveTimer);
      }, 460);

      timersRef.current.push(switchTimer);
    },
    [clearTimers, mode, transitionPhase],
  );

  return (
    <VisualModeContext.Provider
      value={{
        mode,
        pendingMode,
        transitionPhase,
        isTransitioning: transitionPhase !== "idle",
        requestMode,
      }}
    >
      {children}
    </VisualModeContext.Provider>
  );
}

export function useVisualMode() {
  const context = useContext(VisualModeContext);

  if (!context) {
    throw new Error("useVisualMode must be used within a VisualModeProvider");
  }

  return context;
}
