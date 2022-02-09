import weatherCases from "./weatherCases.js";
import apiCase from "./apiCases.js";
export default function api() {
  let temperatura = document.querySelector("#clima h1");
  let localizacao = document.querySelector("#clima p");
  const icone = document.querySelector("#icone");

  fetch(
    "https://api.weatherapi.com/v1/current.json?key=8eb8f003f8984fbe9a3172745220802&q=Carangola&aqi=no"
  )
    .then((resposta) => resposta.json())
    .then((dados) => {
      const region = apiCase(dados.location.region);

      temperatura.textContent = dados.current.temp_c.toFixed() + "°";
      localizacao.textContent = dados.location.name + " - " + region;

      let icon = dados.current.condition.icon;
      const text = dados.current.condition.text;
      icon = weatherCases(icon, text);
      icone.src = icon;
    });
}
