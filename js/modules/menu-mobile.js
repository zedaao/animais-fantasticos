import outSideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='lista']");
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.toggle("ativo");
    menuList.classList.toggle("ativo");
    outSideClick(menuList, eventos, () => {
      menuButton.classList.remove("ativo");
      menuList.classList.remove("ativo");
    });
  }
  if (menuButton) {
    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
