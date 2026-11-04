import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Star } from "./decor";
import { assets } from "../assets/assets";
import { areas, certFilters, certificates } from "../data/content";
import { easeOut, rise } from "../utils/animacoes";
import Enfeite from "./Enfeite";
import SeloAno from "./SeloAno";
import TituloSecao from "./TituloSecao";

const badgeImages = {
  "networking-basics": assets.badgeRedes,
  "digital-safety": assets.badgeCiberseguranca,
  "it-support-basics": assets.badgeSuporte,
};

const abaBase =
  "font-display rounded-full px-5 py-2 text-sm font-bold transition-all duration-300";
const abaAtiva = "bg-coral text-cream shadow-coral-md";
const abaInativa = "stitch text-cream/80 hover:-translate-y-0.5 hover:text-sunshine";

const CertCard = ({ cert, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 34, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
    animate={{ opacity: 1, y: 0, rotate: 0 }}
    exit={{ opacity: 0, scale: 0.94 }}
    transition={{ duration: 0.55, delay: 0.07 * index, ease: easeOut }}
    whileHover={{ y: -6 }}
    className="card group pt-16"
  >
    <img
      src={badgeImages[cert.id]}
      alt={`Emblema oficial ${cert.title}`}
      className="absolute -top-9 left-6 h-24 w-24 -rotate-3 rounded-2xl border-4 border-cocoa-800 shadow-badge transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105"
    />
    <SeloAno ano={cert.year} className="absolute right-6 top-5" />
    <h4 className="font-display mt-2 text-xl font-bold leading-snug text-cream">
      {cert.title}
    </h4>
    <p className="mt-1 text-sm font-semibold text-cream/60">{cert.category}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {cert.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream/85"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex w-fit items-center gap-2 border-b-2 border-dashed border-tan/70 pb-0.5 text-sm font-bold text-cream transition-all duration-300 hover:gap-3 hover:border-coral hover:text-coral"
    >
      <Eye size={17} />
      Ver Certificado
    </a>
  </motion.article>
);

export default function Certificacoes() {
  const [activeArea, setActiveArea] = useState("Todos");
  const visible =
    activeArea === "Todos"
      ? certificates
      : certificates.filter((cert) =>
          [cert.area, cert.category, ...cert.tags].some(
            (value) => value.toLocaleLowerCase("pt-BR") === activeArea.toLocaleLowerCase("pt-BR")
          )
        );

  return (
    <section
      id="certificados"
      className="relative bg-cocoa-950/60 py-20 lg:py-28"
    >
      <Enfeite tipo="estrela" tamanho={22} soDesktop className="right-[10%] top-24 text-sunshine/60" />
      <Enfeite tipo="brilho" tamanho={20} soDesktop className="bottom-24 left-[7%] text-coral/50 [--rot:12deg]" />
      <Enfeite tipo="coracao" tamanho={22} soDesktop className="bottom-16 right-[14%] text-coral/40" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.img
            {...rise}
            transition={{ duration: 0.8, ease: easeOut }}
            src={assets.biaShy}
            alt="Bia realizada"
            className="sticker-shadow mx-auto w-52 sm:w-60 lg:mx-0 lg:w-72"
          />
          <motion.div {...rise} transition={{ duration: 0.7, ease: easeOut }} className="text-center lg:text-left">
            <TituloSecao titulo="Certificações" subtitulo="Conquistas profissionais e certificações" className="lg:justify-start" />
          </motion.div>
        </div>

        <motion.div
          {...rise}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
        >
          {certFilters.map((area) => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              className={`${abaBase} ${activeArea === area ? abaAtiva : abaInativa}`}
            >
              {area}
            </button>
          ))}
        </motion.div>

        {activeArea === "Todos" ? (
          <div className="mt-10 space-y-10">
            {areas.map((area) => (
              <div key={area}>
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: easeOut }}
                  className="flex items-center gap-4"
                >
                  <h3 className="font-display text-2xl font-bold text-coral sm:text-3xl">
                    {area}
                  </h3>
                  <span className="h-0 flex-1 border-t-2 border-dashed border-tan/50" />
                </motion.div>
                <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-14">
                  {certificates
                    .filter((c) => c.area === area)
                    .map((cert, i) => (
                      <CertCard key={cert.id} cert={cert} index={i} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : visible.length > 0 ? (
          <motion.div layout className="mx-auto mt-12 max-w-md">
            <div className="grid grid-cols-1 gap-y-14">
              <AnimatePresence mode="popLayout">
                {visible.map((cert, i) => (
                  <CertCard key={cert.id} cert={cert} index={i} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="estado-vazio mt-10"
          >
            <Star size={26} className="text-sunshine" />
            <p className="font-display text-lg font-bold text-cream">
              Nenhum certificado por aqui ainda
            </p>
            <p className="text-sm font-medium text-cream/70">
              Em breve novas conquistas nesta área!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
