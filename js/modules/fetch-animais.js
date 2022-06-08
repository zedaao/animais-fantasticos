import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add(".numero-animal");

      div.innerHTML = ` <h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

      return div;
    }

    try {
      const animaisResponse = await fetch(url);
      const animasJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animasJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);

        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animaisapi.json");
}
