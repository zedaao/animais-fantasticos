export default class Funcionamento {
  constructor(funcinamento, activeClass) {
    this.funcinamento = document.querySelector(funcinamento);
    this.activeClass = activeClass;
  }

  dadosFuncinamento() {
    this.diasSemana = this.funcinamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcinamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcinamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcinamento) {
      this.dadosAgora();
      this.dadosFuncinamento();
      this.ativaAberto();
    }
  }
}
