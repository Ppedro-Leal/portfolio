"use client";

import { useVisualMode } from "@/context/VisualModeContext";
import {
  VISUAL_MODES,
  type VisualMode,
} from "@/types/visual-mode";

function getRandomMode(
  currentMode: VisualMode
): VisualMode {
  const availableModes =
    VISUAL_MODES.filter(
      (mode) => mode !== currentMode
    );

  const randomIndex = Math.floor(
    Math.random() * availableModes.length
  );

  return availableModes[randomIndex];
}

export default function VisualModeSwitcher() {
  const {
    mode,
    isTransitioning,
    requestMode,
  } = useVisualMode();

  function handleModeChange() {
    const nextMode =
      getRandomMode(mode);

    requestMode(nextMode);
  }

  return (
    <button
      type="button"
      onClick={handleModeChange}
      disabled={isTransitioning}
      aria-label="Alterar modo visual"
      className="
        group
        flex h-9 w-9
        items-center justify-center
        border border-border
        text-foreground
        transition
        hover:border-primary
        disabled:cursor-default
        disabled:opacity-60
      "
    >
      <span
        className="
          relative
          block h-4 w-4
        "
        aria-hidden="true"
      >
        <span
          className="
            absolute
            left-0 top-0
            h-2.5 w-2.5
            border border-current
          "
        />

        <span
          className="
            absolute
            bottom-0 right-0
            h-2.5 w-2.5
            border border-current
            bg-background
            transition-transform
            group-hover:
            -translate-y-px
            group-hover:
            translate-x-px
          "
        />
      </span>
    </button>
  );
}