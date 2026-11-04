export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -96 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
