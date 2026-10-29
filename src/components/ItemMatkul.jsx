/* ============================================================
   ItemMatkul.jsx — tanpa nilai, hanya kode, nama, sks, semester
   App.jsx iterasi & spread: <ItemMatkul key={mk.id} {...mk} />
   ============================================================ */
import React from "react";

const iconMap = {
  "Sistem Informasi Sosial":              "🌐",
  "Internet of Things":                   "📡",
  "Intelegensi Buatan":                   "🤖",
  "Verifikasi Validasi Perangkat Lunak":  "✅",
  "Perancangan Sistem":                   "📐",
  "Praktikum Web":                        "💻",
  "Praktikum Sistem Berorientasi Objek":  "🔧",
  "Praktikum Pemogram II":                "⌨️",
  "Technopreneurship":                    "💡",
};

function ItemMatkul({ kode, nama, sks, semester }) {
  const icon = iconMap[nama] || "📚";

  return (
    <div className="matkul-item">
      <div className="matkul-icon">{icon}</div>
      <div className="matkul-info">
        <p className="matkul-nama">{nama}</p>
        <p className="matkul-meta">
          <span className="matkul-kode">{kode}</span>
          <span className="matkul-sep">·</span>
          {sks} SKS
          <span className="matkul-sep">·</span>
          Semester {semester}
        </p>
      </div>
    </div>
  );
}

export default ItemMatkul;
