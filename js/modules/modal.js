export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const containerModal = document.querySelector('[data-modal="container"');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
    console.log(event);
  }

  function cliqueFora(event) {
    console.log(event.target);
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && containerModal && botaoFechar) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueFora);
  }
}
