"use client";
import React from "react";

export default function HeaderMinimal() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="glass-header text-white p-4 relative">
      <button
        className="button-secondary"
        onClick={() => setOpen(!open)}
      >
        Ouvrir menu test
      </button>
      {open && (
        <div className="absolute left-0 mt-2 glass-card text-white p-4 rounded-xl shadow z-[999]">
          Menu déroulant minimal
        </div>
      )}
    </header>
  );
}
