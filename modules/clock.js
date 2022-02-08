export default function clock() {
  let horas = document.querySelector("#numero-relogio");
  let dias = document.querySelector("#relogio p");
  let data = new Date();
  let diaMes = data.getDate();
  let horaDia = data.getHours();
  let min = data.getMinutes();
  let diaSemana = data.getDay();
  let mes = data.getMonth();
  let ano = data.getFullYear();

  const nomeDiaSemana = new Array(
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  );

  const mesesAno = new Array(
    "janeiro",
    "fervereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  );

  horas.textContent = `${horaDia < 10 ? "0" : ""}${horaDia}:${
    min < 10 ? "0" : ""
  }${min}`;
  dias.textContent = `${nomeDiaSemana[diaSemana]}, ${
    diaMes < 10 ? "0" : ""
  }${diaMes} ${mesesAno[mes]} de ${ano}`;
}
