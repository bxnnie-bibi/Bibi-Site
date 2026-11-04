import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Download, Instagram, Linkedin } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { easeOut } from "../utils/animacoes";
import { Star, HeartOutline, GmailIcon } from "./decor";
import { assets } from "../assets/assets";
import { socials } from "../data/content";
import Enfeite from "./Enfeite";

const RevealLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const decorX = useTransform(sx, [-1, 1], [16, -16]);
  const decorY = useTransform(sy, [-1, 1], [12, -12]);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
        <div className="relative z-10">
          <RevealLine delay={0.15}>
            <span className="flex items-center gap-3">
              <Star size={30} className="text-sunshine" />
              <h1 className="font-display text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
                Olá, prazer Bia.
              </h1>
              <HeartOutline size={30} className="text-coral" />
            </span>
          </RevealLine>
          <RevealLine delay={0.32} className="mt-2">
            <p className="font-display text-3xl font-bold text-coral sm:text-4xl lg:whitespace-nowrap lg:text-5xl">
              Sou estudante de ADS!
            </p>
          </RevealLine>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: easeOut }}
            className="mt-7 max-w-md text-base font-medium leading-relaxed text-cream/85 sm:text-lg"
          >
            Ainda estou no início do aprendizado, com poucos projetos, porém
            com grande vontade de aprender.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={socials.cvUrl}
              download="Curriculo-Layane-Silva.pdf"
              className="group flex items-center gap-2.5 rounded-full bg-coral px-7 py-3.5 font-display text-base font-bold text-cream shadow-coral-lg transition-all duration-300 hover:-translate-y-1 hover:bg-coral-deep"
            >
              <Download
                size={19}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Baixar meu CV
            </a>
            <div className="flex items-center gap-3">
              <a
                href={socials.gmail}
                aria-label="Email da Bia"
                className="btn-redondo"
              >
                <GmailIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Bia"
                className="btn-redondo"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Bia"
                className="btn-redondo"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.55, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.35 }}
            className="relative"
          >
            <img
              src={assets.biaHero}
              alt="Ilustração da Bia"
              className="sticker-shadow w-64 rounded-[2.5rem] sm:w-80 lg:w-[26rem]"
            />
          </motion.div>
          <motion.div style={{ x: decorX, y: decorY }} className="pointer-events-none absolute inset-0">
            <Enfeite tipo="estrela" tamanho={34} className="-top-2 left-2 text-sunshine" />
            <Enfeite tipo="brilho" tamanho={26} className="bottom-10 left-4 text-coral [--rot:12deg]" />
            <Enfeite tipo="coracao" tamanho={30} className="top-1/3 -right-1 text-coral" />
            <Enfeite tipo="brilho" tamanho={20} className="-bottom-2 right-10 text-sunshine [--rot:-14deg]" />
          </motion.div>
        </div>
      </div>
      <motion.button
        onClick={() => scrollToSection("sobre")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream/50 transition-colors duration-300 hover:text-coral sm:flex"
      >
        <span className="font-display text-xs font-bold uppercase tracking-widest">
          role para descobrir
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}
