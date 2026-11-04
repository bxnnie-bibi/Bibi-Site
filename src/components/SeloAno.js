export default function SeloAno({ ano, className = "" }) {
  return (
    <span
      className={`font-display rounded-full bg-coral px-3 py-1 text-xs font-bold text-cream shadow-coral-sm ${className}`}
    >
      {ano}
    </span>
  );
}
