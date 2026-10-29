/* ============================================================
   BadgeSkill.jsx — Props: namaSkill, level
   Level: "Pemula" | "Menengah" | "Mahir"
   Warna badge dinamis (tema Putih-Biru)
   ============================================================ */
import React from "react";

const levelConfig = {
  Pemula: {
    color:  "#10b981",
    bg:     "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
    dot:    "#10b981",
    bar:    33,
  },
  Menengah: {
    color:  "#f59e0b",
    bg:     "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    dot:    "#f59e0b",
    bar:    66,
  },
  Mahir: {
    color:  "#60a5fa",
    bg:     "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.3)",
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
