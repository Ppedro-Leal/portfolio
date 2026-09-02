import { ImageResponse } from "next/og";
export const alt = "Pedro Leal — Desenvolvedor Full Stack";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#f5f1e8",
        color: "#151515",
      }}
    >
      <div
        style={{
          fontSize: 28,
          marginBottom: 24,
          color: "#28745c",
        }}
      >
        Desenvolvedor Full Stack
      </div>

      <div
        style={{
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-4px",
        }}
      >
        Pedro Leal
      </div>

      <div
        style={{
          fontSize: 34,
          marginTop: 30,
          maxWidth: 900,
        }}
      >
        React · Next.js · Node.js · TypeScript
      </div>
    </div>,
    size,
  );
}
