import { motion } from "framer-motion";
import { Star, Bow, Squiggle } from "./decor";
import { assets } from "../assets/assets";
import { stats } from "../data/content";
import { easeOut, rise } from "../utils/animacoes";
import Enfeite from "./Enfeite";

export default function SobreMim() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28">
      <Enfeite tipo="brilho" tamanho={22} soDesktop className="left-[6%] top-20 text-coral/50" />
      <Enfeite tipo="estrela" tamanho={20} soDesktop className="right-[7%] top-44 text-sunshine/60 [--rot:15deg]" />
      <Enfeite tipo="coracao" tamanho={24} soDesktop className="bottom-20 right-[11%] text-coral/40" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...rise} transition={{ duration: 0.7, ease: easeOut }}>
          <div className="flex items-center gap-4">
            <Bow size={56} className="shrink-0 -rotate-12" />
            <Squiggle className="hidden w-32 text-tan sm:block" />
          </div>
          <h2 className="font-display mt-3 text-4xl font-bold text-cream sm:text-5xl">
            Sobre Mim
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <motion.p
              {...rise}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className="max-w-md text-lg font-medium leading-relaxed text-cream/90"
            >
              Sou uma jovem apaixonada por tecnologia. Porém, passo a maior
              parte do tempo dormindo ou comendo.
            </motion.p>

            <div
              className="mt-10 grid max-w-lg grid-cols-2 gap-x-10 gap-y-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...rise}
                  transition={{ duration: 0.6, delay: 0.12 * i, ease: easeOut }}
                  className="flex flex-col gap-1"
                >
                  <span className="font-display text-3xl font-bold text-coral sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="max-w-[11rem] text-sm font-semibold leading-snug text-cream/85">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="relative mt-2 flex justify-center lg:justify-start lg:pl-14"
            >
              <img
                src={assets.catPeek}
                alt="Gatinho espiando"
                className="sticker-shadow relative z-10 w-52 sm:w-60"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-5 left-0 right-0 border-t-2 border-dashed border-tan/50"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-start gap-7 lg:pt-1">
            {[
              { title: "Meu lema", text: "Tá bom, mas não tá tão bom, mas não está ruim. Dá pra melhorar." },
              { title: "Meu objetivo acadêmico", text: "Ser aprovada, com bom rendimento em todos os semestres. Amém?" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...rise}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: easeOut }}
                whileHover={{ rotate: i === 0 ? -1.2 : 1.2, y: -4 }}
                className="stitch-strong rounded-3xl bg-cocoa-900/60 p-7 transition-colors duration-300 hover:bg-cocoa-900"
              >
                <div className="flex items-center gap-3">
                  <Star size={22} className="text-sunshine" />
                  <h3 className="font-display text-xl font-bold text-coral sm:text-2xl">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-base font-medium leading-relaxed text-cream/90">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
