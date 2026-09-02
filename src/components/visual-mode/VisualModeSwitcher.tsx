"use client";

import { useVisualMode } from "@/context/VisualModeContext";
import type { VisualMode } from "@/types/visual-mode";

const modes: {
  id: VisualMode;
  label: string;
}[] = [
  {
    id: "base",
    label: "01",
  },
  {
    id: "noir",
    label: "02",
  },
  {
    id: "illustrated",
    label: "03",
  },
];

export default function VisualModeSwitcher() {
  const { mode, pendingMode, isTransitioning, requestMode } = useVisualMode();

  return (
    <div className="flex items-center gap-1" aria-label="Modo visual">
      {modes.map((item) => {
        const isActive = mode === item.id && !pendingMode;

        const isPending = pendingMode === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => requestMode(item.id)}
            aria-label={`Modo visual ${item.label}`}
            aria-pressed={isActive || isPending}
            disabled={isTransitioning}
            className={`
              flex h-8 min-w-8
              items-center justify-center
              border
              text-[11px]
              font-semibold
              transition
              disabled:cursor-default
              ${
                isActive || isPending
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }
            `}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
