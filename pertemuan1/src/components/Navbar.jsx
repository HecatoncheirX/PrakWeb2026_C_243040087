import React from "react";

function Navbar({ activeSection, onNav }) {
  const links = [
    { id: "profil",   label: "Profil"       },
    { id: "skills",   label: "Keahlian"     },
    { id: "matkul",   label: "Mata Kuliah"  },
    { id: "showcase", label: "Project"      },
  ];

  return (
    <header className="navbar">
      {/* Logo — teks saja, tanpa ikon */}
      <a href="#profil" className="nav-logo" onClick={() => onNav("profil")}>
        Profil Saya
      </a>
      <nav>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={activeSection === l.id ? "active" : ""}
                onClick={() => onNav(l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
