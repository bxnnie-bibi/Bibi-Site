import { Bow } from "./decor";

export default function TituloSecao({ titulo, subtitulo, className = "" }) {
  return (
    <>
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <Bow size={44} />
        <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
          {titulo}
        </h2>
        <Bow size={44} className="-scale-x-100" />
      </div>
      <p className="mt-3 text-base font-medium text-cream/75 sm:text-lg">
        {subtitulo}
      </p>
    </>
  );
}
