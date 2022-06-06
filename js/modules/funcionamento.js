export default function initFuncionamento() {
  const funcinamento = document.querySelector("[data-semana]");
  const diasSemana = funcinamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcinamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcinamento.classList.add("aberto");
  }
}
