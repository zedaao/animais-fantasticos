import outSideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropmenu, events) {
    this.dropdownMenus = document.querySelectorAll(dropmenu);
    this.activeClass = "ativo";

    // defice o touchstart e click

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função de click fora
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((event) => {
        menu.addEventListener(event, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
