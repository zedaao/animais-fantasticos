import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-animacao.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdpwm-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import FetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacao from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"',
  '[data-modal="fechar"',
  '[data-modal="container"'
);
modal.init();

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
FetchAnimais("../../animaisapi.json", ".numeros-grid");
initFetchBitcoin();
initAnimacao();
