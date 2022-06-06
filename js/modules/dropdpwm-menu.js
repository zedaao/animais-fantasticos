import outSideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const eventos = ["click", "touchstart"];
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outSideClick(this, eventos, () => {
      this.classList.remove("ativo");
    });
  }
  dropdownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((event) => {
      menu.addEventListener(event, handleClick);
    });
  });
}
