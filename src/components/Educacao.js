import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Star } from "./decor";
import { assets } from "../assets/assets";
import { education } from "../data/content";
import { easeOut, rise } from "../utils/animacoes";
import Enfeite from "./Enfeite";
import TituloSecao from "./TituloSecao";

export default function Educacao() {
  return (
    <section id="educacao" className="relative py-20 lg:py-28">
      <Enfeite tipo="brilho" tamanho={22} soDesktop className="left-[8%] top-28 text-coral/50" />
      <Enfeite tipo="estrela" tamanho={20} soDesktop className="bottom-28 right-[9%] text-sunshine/60 [--rot:18deg]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...rise} transition={{ duration: 0.7, ease: easeOut }} className="text-center">
          <TituloSecao titulo="Educação" subtitulo="Minha trajetória acadêmica" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.img
            {...rise}
            transition={{ duration: 0.8, ease: easeOut }}
            src={assets.catBooks}
            alt="Gatinho sobre uma pilha de livros"
            className="sticker-shadow mx-auto w-64 sm:w-72 lg:w-80"
          />

          <motion.div
            {...rise}
            transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
            whileHover={{ rotate: 0.8, y: -4 }}
            className="stitch-strong rounded-3xl bg-cocoa-900/60 p-7 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <Star size={22} className="shrink-0 text-coral" />
              <h3 className="font-display text-xl font-bold leading-snug text-cream sm:text-2xl">
                {education.course}
              </h3>
            </div>
            <p className="font-display mt-2 pl-9 text-lg font-bold text-coral">
              {education.school}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 pl-9 text-sm font-semibold text-cream/80">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-sunshine" />
                {education.period}
              </span>
              <span className="h-4 w-0 border-l border-dashed border-tan/60" />
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-sunshine" />
                {education.place}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
