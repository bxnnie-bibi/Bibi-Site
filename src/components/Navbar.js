import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";
import { easeOut } from "../utils/animacoes";

const linkBase =
  "font-display rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 sm:px-3.5 sm:text-xs";
const linkAtivo = "bg-coral text-cream shadow-coral-sm";
const linkInativo = "text-cocoa-800 hover:-translate-y-0.5 hover:text-coral";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "certificados", label: "Certificados" },
  { id: "projetos", label: "Projetos" },
  { id: "educacao", label: "Educação" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className="flex w-fit items-center justify-between gap-1 rounded-full bg-cream py-1.5 pl-3 pr-1.5 shadow-pill sm:pl-5"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`${linkBase} ${active === id ? linkAtivo : linkInativo}`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
