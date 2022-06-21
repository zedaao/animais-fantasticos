import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-animacao.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacao from "./modules/scroll-animacao.js";
import DropdownMenu from "./modules/dropdpwm-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import SlideNav from "./modules/slide.js";

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

const dropdownMenus = new DropdownMenu("[data-dropdown]");
dropdownMenus.init();

const menuMobile = new MenuMobile(
  "[data-menu='button']",
  "[data-menu='lista']"
);
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

initAnimacao();

fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".wrapper");
slide.init();

slide.addControl(".custom-controls");
