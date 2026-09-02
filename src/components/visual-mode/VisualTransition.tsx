"use client";

import { useVisualMode } from "@/context/VisualModeContext";

export default function VisualTransition() {
  const { transitionPhase, pendingMode } = useVisualMode();

  return (
    <div
      className="visual-transition"
      data-phase={transitionPhase}
      data-target={pendingMode ?? undefined}
      aria-hidden="true"
    >
      <div className="visual-transition__panel visual-transition__panel--main" />

      <div className="visual-transition__panel visual-transition__panel--secondary" />

      <div className="visual-transition__impact" />

      <div className="visual-transition__slash visual-transition__slash--one" />

      <div className="visual-transition__slash visual-transition__slash--two" />

      <div className="visual-transition__noise" />
    </div>
  );
}
