/* ============================================================
   BadgeSkill.jsx — Props: namaSkill, level
   Level: "Pemula" | "Menengah" | "Mahir"
   Warna badge dinamis (tema Putih-Biru)
   ============================================================ */
import React from "react";

const levelConfig = {
  Pemula: {
    color:  "#059669",
    bg:     "#ecfdf5",
    border: "#a7f3d0",
    dot:    "#10b981",
    bar:    33,
  },
  Menengah: {
    color:  "#d97706",
    bg:     "#fffbeb",
    border: "#fcd34d",
    dot:    "#f59e0b",
    bar:    66,
  },
  Mahir: {
    color:  "#2563eb",
    bg:     "#eff6ff",
    border: "#bfdbfe",
    dot:    "#3b82f6",
    bar:    100,
  },
};

function BadgeSkill({ namaSkill, level }) {
  const cfg = levelConfig[level] || levelConfig["Pemula"];

  return (
    <div className="badge-skill" style={{ background: cfg.bg, borderColor: cfg.border }}>
      <div className="badge-top">
        <span className="badge-dot" style={{ background: cfg.dot }} />
        <span className="badge-name">{namaSkill}</span>
        <span className="badge-level" style={{ color: cfg.color }}>{level}</span>
      </div>
      <div className="badge-bar-track">
        <div
          className="badge-bar-fill"
          style={{ width: `${cfg.bar}%`, background: cfg.dot }}
        />
      </div>
    </div>
  );
}

export default BadgeSkill;
