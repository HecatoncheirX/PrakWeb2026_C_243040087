import React, { useState, useEffect } from "react";
import Navbar      from "./src/components/Navbar.jsx";
import BadgeSkill  from "./src/components/BadgeSkill.jsx";
import ItemMatkul  from "./src/components/ItemMatkul.jsx";
import ProjectCard from "./src/components/ProjectCard.jsx";
import Footer      from "./src/components/Footer.jsx";

/* ── Fetch hook ─────────────────────────────────────────────────── */
function useFetch(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  useEffect(() => {
    fetch(url)
      .then(r => { if (!r.ok) throw new Error("Gagal memuat"); return r.json(); })
      .then(d => { setData(d.data); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, [url]);
  return { data, loading, error };
}

/* ── Skeleton ────────────────────────────────────────────────────── */
function Sk({ h = "1rem", w = "100%", r = "8px" }) {
  return <div className="skeleton" style={{ height: h, width: w, borderRadius: r }} />;
}

/* ── Icons ───────────────────────────────────────────────────────── */
const IconGitHub = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const IconIG = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const IconMail = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

/* ── Section Header ──────────────────────────────────────────────── */
function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="section-header">
      <span className="section-badge">{badge}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   APP ROOT
   ═══════════════════════════════════════════════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState("profil");

  const { data: profile,  loading: lP  } = useFetch("/api/profile");
  const { data: skills,   loading: lS  } = useFetch("/api/skills");
  const { data: matkul,   loading: lM  } = useFetch("/api/matkul");
  const { data: projects, loading: lPr } = useFetch("/api/projects");

  /* ──────────────────────────────────────────────
     HERO / PROFIL
     ────────────────────────────────────────────── */
  const HeroSection = () => (
    <section id="profil" className="hero-section">
      {/* Gelombang dekoratif */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-content">
        {/* ── Kiri: Foto Profil ── */}
        <div className="hero-photo-side">
          <div className="hero-photo-wrap">
            <img
              src="/profile.jpg"
              alt="Muhammad Farrel Triputra Alfarizqi"
              className="hero-photo"
              onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
            />
            <div className="hero-photo-fallback" style={{ display:"none" }}>
              {profile?.nama?.charAt(0) || "F"}
            </div>
            <span className="hero-photo-ring" />
          </div>
          <div className="hero-nim-card">
            <span className="hero-nim-label">NIM</span>
            <span className="hero-nim-val">{profile?.nim}</span>
          </div>
        </div>

        {/* ── Kanan: Teks Biografi ── */}
        <div className="hero-text-side">
          <span className="hero-greeting-tag">👋 Halo, perkenalkan saya</span>

          {lP ? (
            <Sk h="3rem" w="90%" r="10px" />
          ) : (
            <h1 className="hero-name">{profile?.nama}</h1>
          )}

          <div className="hero-badges-row">
            <span className="hero-tag">{profile?.prodi}</span>
            <span className="hero-tag">{profile?.universitas}</span>
            <span className="hero-tag">Angkatan {profile?.angkatan}</span>
          </div>

          <p className="hero-bio">{profile?.bio}</p>

          {/* Stats */}
          <div className="hero-stats-row">
            {[
              { val: projects?.length || 0, label: "Project"     },
              { val: skills?.length   || 0, label: "Skill"       },
              { val: matkul?.length   || 0, label: "Mata Kuliah" },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-val">{s.val}</span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-cta">
            <a href={profile?.github} target="_blank" rel="noopener noreferrer" className="btn-hero">
              <IconGitHub /> GitHub Profile
            </a>
            <a href={profile?.instagram} target="_blank" rel="noopener noreferrer" className="btn-hero">
              <IconIG /> Instagram
            </a>
            <a href={`mailto:${profile?.email}`} className="btn-hero">
              <IconMail /> Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  /* ──────────────────────────────────────────────
     KEAHLIAN (BadgeSkill)
     ────────────────────────────────────────────── */
  const SkillsSection = () => (
    <section id="skills" className="content-section gray-bg">
      <div className="container">
        <SectionHeader
          badge="💡 Kompetensi"
          title="Keahlian IT Saya"
          subtitle="Teknologi dan tools yang saya kuasai dalam pengembangan perangkat lunak"
        />
        {lS ? (
          <div className="skills-grid">
            {[...Array(6)].map((_, i) => <Sk key={i} h="80px" r="14px" />)}
          </div>
        ) : (
          <div className="skills-grid">
            {skills.map((s, i) => (
              <BadgeSkill key={i} namaSkill={s.namaSkill} level={s.level} />
            ))}
          </div>
        )}
        <div className="legend">
          {[
            { level: "Pemula",   color: "#10b981" },
            { level: "Menengah", color: "#f59e0b" },
            { level: "Mahir",    color: "#3b82f6" },
          ].map(l => (
            <div key={l.level} className="legend-item">
              <span className="legend-dot" style={{ background: l.color }} />
              <span>{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ──────────────────────────────────────────────
     MATA KULIAH (ItemMatkul)
     ────────────────────────────────────────────── */
  const MatkulSection = () => (
    <section id="matkul" className="content-section">
      <div className="container">
        <SectionHeader
          badge="📚 Akademik"
          title="Mata Kuliah yang Ditempuh"
          subtitle="Daftar mata kuliah Semester 4 Program Studi Teknik Informatika"
        />
        {lM ? (
          <div className="matkul-list">
            {[...Array(9)].map((_, i) => <Sk key={i} h="72px" r="14px" />)}
          </div>
        ) : (
          <div className="matkul-list">
            {/* App.jsx hanya iterasi & spread props → <ItemMatkul key={...} {...props} /> */}
            {matkul.map(mk => (
              <ItemMatkul key={mk.id} {...mk} />
            ))}
          </div>
        )}
      </div>
    </section>
  );

  /* ──────────────────────────────────────────────
     SHOWCASE / PROJECT SAYA
     ────────────────────────────────────────────── */
  const ShowcaseSection = () => (
    <section id="showcase" className="content-section gray-bg">
      <div className="container">
        <SectionHeader
          badge="🚀 Portofolio"
          title="Project Saya"
          subtitle="Kumpulan repository GitHub dari tugas besar dan proyek perkuliahan"
        />
        {lPr ? (
          <div className="projects-grid">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="project-card">
                <Sk h="180px" r="0" />
                <div style={{ padding:"1.4rem", display:"flex", flexDirection:"column", gap:"10px" }}>
                  <Sk h="1.3rem" w="75%" />
                  <Sk h=".85rem" />
                  <Sk h=".85rem" w="80%" />
                  <div style={{display:"flex",gap:"6px"}}>
                    {[...Array(3)].map((_,j) => <Sk key={j} h="24px" w="64px" r="50px" />)}
                  </div>
                  <Sk h="42px" r="10px" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );

  return (
    <>
      <Navbar activeSection={activeSection} onNav={setActiveSection} />
      <main>
        <HeroSection />
        <SkillsSection />
        <MatkulSection />
        <ShowcaseSection />
      </main>
      <Footer profile={profile} />
    </>
  );
}
