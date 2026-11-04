import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data/content";
import { easeOut, rise } from "../utils/animacoes";
import Enfeite from "./Enfeite";
import SeloAno from "./SeloAno";
import TituloSecao from "./TituloSecao";

const ProjectCard = ({ project, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 34, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
    animate={{ opacity: 1, y: 0, rotate: 0 }}
    transition={{ duration: 0.55, delay: 0.07 * index, ease: easeOut }}
    whileHover={{ y: -6 }}
    className="card group"
  >
    <div className="flex items-start justify-between gap-3">
      <h4 className="font-display text-xl font-bold leading-snug text-cream">
        {project.name}
      </h4>
      {project.year && <SeloAno ano={project.year} />}
    </div>
    <p className="mt-2 text-sm font-medium leading-relaxed text-cream/80">
      {project.description}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream/85"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex w-fit items-center gap-2 border-b-2 border-dashed border-tan/70 pb-0.5 text-sm font-bold text-cream transition-all duration-300 hover:gap-3 hover:border-coral hover:text-coral"
    >
      <Github size={17} />
      Ver no GitHub
    </a>
  </motion.article>
);

export default function Projetos() {
  return (
    <section id="projetos" className="relative py-20 lg:py-28">
      <Enfeite tipo="brilho" tamanho={22} soDesktop className="left-[10%] top-28 text-coral/50" />
      <Enfeite tipo="estrela" tamanho={20} soDesktop className="right-[12%] top-40 text-sunshine/60 [--rot:-10deg]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...rise} transition={{ duration: 0.7, ease: easeOut }} className="text-center">
          <TituloSecao titulo="Projetos" subtitulo="Coisas que andei construindo por aí" />
        </motion.div>

        {projects.length > 0 ? (
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            {...rise}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="estado-vazio mt-12"
          >
            <Github size={30} className="text-sunshine" />
            <p className="font-display text-lg font-bold text-cream">
              Nenhum projeto por aqui ainda
            </p>
            <p className="text-sm font-medium text-cream/70">
              Em breve meus projetos e estudos do GitHub aparecem nesta
              vitrine!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
