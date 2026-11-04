import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMim from "./components/SobreMim";
import Certificacoes from "./components/Certificacoes";
import Projetos from "./components/Projetos";
import Educacao from "./components/Educacao";
import BackToTop from "./components/BackToTop";
import { SectionOrnament } from "./components/decor";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-cocoa-800">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <SectionOrnament />
        <SobreMim />
        <SectionOrnament />
        <Certificacoes />
        <SectionOrnament />
        <Projetos />
        <SectionOrnament />
        <Educacao />
      </main>
      <BackToTop />
    </div>
  );
}
