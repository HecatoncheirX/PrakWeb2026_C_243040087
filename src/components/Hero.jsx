import React from "react";

function Hero({ projectCount }) {
  return (
    <section className="hero">
      <div className="hero-badge">✨ Portofolio Showcase</div>
      <h1>
        Kumpulan <span className="gradient-text">Proyek Terbaik</span> Saya
      </h1>
      <p>
        Menjelajahi berbagai proyek yang telah saya kembangkan — dari aplikasi
        web hingga platform analitik, semuanya dibangun dengan teknologi modern.
      </p>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">{projectCount}+</div>
          <div className="stat-label">Proyek</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">12+</div>
          <div className="stat-label">Teknologi</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2+</div>
          <div className="stat-label">Tahun Exp</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
