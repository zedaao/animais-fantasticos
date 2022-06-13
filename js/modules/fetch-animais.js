import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add(".numero-animal");

    div.innerHTML = ` <h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais atraves de um arquivo json
  async function criarAnimal() {
    try {
      // Fetch e espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animasJson = await animaisResponse.json();

      // Após a transformação de json ativa as funções para preenecher os numeros
      animasJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimal();
}
