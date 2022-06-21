import outSideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.active = "ativo";

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.toggle(this.active);
    this.menuList.classList.toggle(this.active);
    outSideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.active);
      this.menuList.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
