export default function initAnimacao() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetado = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetado < 0;

      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo"))
        section.classList.remove("ativo");
    });
  }
  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacao();
