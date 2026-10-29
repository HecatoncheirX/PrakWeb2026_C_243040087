/* ============================================================
   ProjectCard.jsx
   Judul Proyek | Deskripsi | Tagar Teknologi | Tombol GitHub
   ============================================================ */
import React, { useState } from "react";

const IconGitHub = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IconLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const langColors = {
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  JavaScript: "#f1e05a",
  Java:       "#b07219",
  Shell:      "#89e051",
  default:    "#2563eb",
};

function ProjectCard({ project, index }) {
  const [imgErr, setImgErr] = useState(false);
  const langColor = langColors[project.language] || langColors.default;

  return (
    <article className="project-card" style={{ animationDelay: `${index * 0.08}s` }}>

      {/* ── Gambar Repository (GitHub OG Image) ── */}
      <div className="card-img-wrap">
        {!imgErr ? (
          <img
            src={project.image}
            alt={project.title}
            className="card-img"
            loading="lazy"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="card-img-fallback">
            <IconGitHub />
            <span>{project.title}</span>
          </div>
        )}
        {/* Language badge */}
        <span className="card-lang" style={{ background: langColor }}>
          {project.language}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="card-body">
        {/* Judul Proyek */}
        <h3 className="card-title">{project.title}</h3>

        {/* Ringkasan Deskripsi */}
        <p className="card-desc">{project.description}</p>

        {/* Tagar Teknologi */}
        <div className="card-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">#{tag}</span>
          ))}
        </div>

        {/* Tombol Tautan Repositori GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          <IconGitHub />
          <span>Lihat Repository</span>
          <IconLink />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
