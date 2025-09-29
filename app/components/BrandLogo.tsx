import React from "react";

export default function BrandLogo({
  className = "",
  width = 200,
  height = 48,
}: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      role="img"
      aria-label="G.TRAVAUX"
      viewBox="0 0 420 96"
      width={width}
      height={height}
      className={className}
    >
      {/* Carré orange encadré de noir */}
      <rect x="8" y="8" width="80" height="80" fill="#E86810" stroke="#0A0A0B" strokeWidth="6" />

      {/* Lettre G noire au centre du carré (texte simple, sans effet) */}
      <text
        x="48"
        y="70"
        textAnchor="middle"
        fontFamily="Raleway, Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="64"
        fill="#0A0A0B"
      >
        G
      </text>

      {/* Libellé à droite : ".TRAVAUX" en blanc */}
      <text
        x="108"
        y="68"
        fontFamily="Raleway, Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill="#FFFFFF"
        letterSpacing="2"
      >
        .TRAVAUX
      </text>
    </svg>
  );
}