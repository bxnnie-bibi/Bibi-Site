import { Star, Sparkle, HeartOutline } from "./decor";

const icones = {
  estrela: Star,
  brilho: Sparkle,
  coracao: HeartOutline,
};

export default function Enfeite({ tipo, tamanho = 22, soDesktop = false, className = "" }) {
  const Icone = icones[tipo];
  const visibilidade = soDesktop ? "hidden lg:block" : "";

  return (
    <Icone
      size={tamanho}
      className={`animate-floaty pointer-events-none absolute ${visibilidade} ${className}`}
    />
  );
}
