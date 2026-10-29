const express = require("express");
const cors    = require("cors");
const path    = require("path");

const app  = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ── PROFIL BIOGRAFI ──────────────────────────────────────────────────
const profile = {
  nama:         "Muhammad Farrel Triputra Alfarizqi",
  nim:          "243040087",
  prodi:        "Teknik Informatika",
  universitas:  "Universitas Pasundan",
  angkatan:     "2024",
  bio:          "Mahasiswa Teknik Informatika Universitas Pasundan yang antusias di bidang Web Development dan Software Engineering. Selalu bersemangat mempelajari teknologi baru dan membangun solusi digital yang bermakna.",
  email:        "muhammadfarrel2020@gmail.com",
  github:       "https://github.com/HecatoncheirX",
  instagram:    "https://www.instagram.com/vertexbeta?rpxt=MW53Njc0emo1aGlr",
};

// ── SKILL (BadgeSkill) ───────────────────────────────────────────────
const skills = [
  { namaSkill: "React.js",   level: "Menengah" },
  { namaSkill: "Node.js",    level: "Menengah" },
  { namaSkill: "JavaScript", level: "Mahir"    },
  { namaSkill: "HTML & CSS", level: "Mahir"    },
  { namaSkill: "MySQL",      level: "Mahir"    },
  { namaSkill: "Git",        level: "Menengah" },
];

// ── MATA KULIAH (ItemMatkul) — Semester 4, tanpa nilai ───────────────
const mataKuliah = [
  { id: 1, kode: "IF2401", nama: "Sistem Informasi Sosial",                 sks: 3, semester: 4 },
  { id: 2, kode: "IF2402", nama: "Internet of Things",                      sks: 2, semester: 4 },
  { id: 3, kode: "IF2403", nama: "Intelegensi Buatan",                      sks: 3, semester: 4 },
  { id: 4, kode: "IF2404", nama: "Verifikasi Validasi Perangkat Lunak",     sks: 2, semester: 4 },
  { id: 5, kode: "IF2405", nama: "Perancangan Sistem",                      sks: 3, semester: 4 },
  { id: 6, kode: "IF2406", nama: "Praktikum Web",                           sks: 2, semester: 4 },
  { id: 7, kode: "IF2407", nama: "Praktikum Sistem Berorientasi Objek",     sks: 1, semester: 4 },
  { id: 8, kode: "IF2408", nama: "Praktikum Pemogram II",                   sks: 2, semester: 4 },
  { id: 9, kode: "IF2409", nama: "Technopreneurship",                       sks: 2, semester: 4 },
];

// ── PROYEK (Repositories GitHub asli) ───────────────────────────────
const projects = [
  {
    id: 1,
    title:       "Project Internet dan Teknologi Web",
    description: "Proyek tugas besar mata kuliah Internet dan Teknologi Web 2024. Membangun aplikasi web menggunakan HTML, CSS, dan JavaScript dengan konsep pengembangan web modern.",
    tags:        ["HTML", "CSS", "JavaScript"],
    github:      "https://github.com/HecatoncheirX/itw2024_project1_243040087",
    image:       "https://opengraph.githubassets.com/1/HecatoncheirX/itw2024_project1_243040087",
    language:    "HTML",
  },
  {
    id: 2,
    title:       "Project Company Profile",
    description: "Proyek tugas besar mata kuliah Internet dan Teknologi Web berupa website Company Profile. Dibangun dengan HTML, CSS, dan JavaScript beserta desain yang profesional.",
    tags:        ["HTML", "CSS", "JavaScript"],
    github:      "https://github.com/HecatoncheirX/itw2024_project2_243040087",
    image:       "https://opengraph.githubassets.com/1/HecatoncheirX/itw2024_project2_243040087",
    language:    "HTML",
  },
  {
    id: 3,
    title:       "Project Pemograman Web",
    description: "Tugas besar mata kuliah Pemrograman Web 2025. Aplikasi web full-stack menggunakan React.js dan Node.js dengan fitur-fitur interaktif dan koneksi ke database.",
    tags:        ["React", "Node.js", "JavaScript", "Express"],
    github:      "https://github.com/HecatoncheirX/pw2025_tubes_243040087",
    image:       "https://opengraph.githubassets.com/1/HecatoncheirX/pw2025_tubes_243040087",
    language:    "JavaScript",
  },
  {
    id: 4,
    title:       "Project Infrastruktur Pendukung Aplikasi",
    description: "Tugas besar mata kuliah Infrastruktur Pendukung Aplikasi. Implementasi infrastruktur server, konfigurasi jaringan, dan deployment aplikasi berbasis cloud.",
    tags:        ["Linux", "Networking", "Cloud", "Server"],
    github:      "https://github.com/HecatoncheirX/Tubes_IPA",
    image:       "https://opengraph.githubassets.com/1/HecatoncheirX/Tubes_IPA",
    language:    "Shell",
  },
  {
    id: 5,
    title:       "Project Pemograman Berbasis Object",
    description: "Tugas besar mata kuliah Pemrograman Berorientasi Objek menggunakan Java. Mengimplementasikan konsep OOP seperti inheritance, polymorphism, encapsulation, dan abstraction.",
    tags:        ["Java", "OOP", "NetBeans"],
    github:      "https://github.com/HecatoncheirX/TubesPBO",
    image:       "https://opengraph.githubassets.com/1/HecatoncheirX/TubesPBO",
    language:    "Java",
  },
];

// ── ENDPOINTS ────────────────────────────────────────────────────────
app.get("/api/profile",  (req, res) => res.json({ success: true, data: profile   }));
app.get("/api/skills",   (req, res) => res.json({ success: true, data: skills    }));
app.get("/api/matkul",   (req, res) => res.json({ success: true, data: mataKuliah }));
app.get("/api/projects", (req, res) => res.json({ success: true, count: projects.length, data: projects }));

// ── STATIC (production) ──────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "dist")));
app.get("/{*splat}", (req, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);

app.listen(PORT, () => {
  console.log(`\n🚀  Backend  → http://localhost:${PORT}`);
  console.log(`📦  API      → http://localhost:${PORT}/api/projects\n`);
});
