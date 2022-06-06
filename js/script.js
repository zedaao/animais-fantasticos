import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacao from "./modules/scroll-animacao.js";
import initAccorion from "./modules/accordion.js";
import initTabNav from "./modules/tab-animacao.js";
import initModal from "./modules/modal.js";
import inittoolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdpwm-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacao();
initAccorion();
initTabNav();
initModal();
inittoolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
