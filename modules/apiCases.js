export default function apiCase(region) {
  let siglaEstado = "";

  switch (region) {
    case "Acre":
      siglaEstado = "AC";
      break;
    case "Alagoas":
      siglaEstado = "AL";
      break;
    case "Amapá":
      siglaEstado = "AP";
      break;
    case "Amazonas":
      siglaEstado = "AM";
      break;
    case "Bhaia":
      siglaEstado = "BA";
      break;
    case "Ceará":
      siglaEstado = "CE";
      break;
    case "Espírito Santo":
      siglaEstado = "ES";
      break;
    case "Goiás":
      siglaEstado = "GO";
      break;
    case "Maranhão":
      siglaEstado = "MA";
      break;
    case "Mato Grosso":
      siglaEstado = "MT";
      break;
    case "Mato Grosso do Sul":
      siglaEstado = "MS";
      break;
    case "Minas Gerais":
      siglaEstado = "MG";
      break;
    case "Pará":
      siglaEstado = "PA";
      break;
    case "Paraíba":
      siglaEstado = "PB";
      break;
    case "Paraná":
      siglaEstado = "PR";
      break;
    case "Pernambuco":
      siglaEstado = "PE";
      break;
    case "Piauí":
      siglaEstado = "PI";
      break;
    case "Rio de Janeiro":
      siglaEstado = "RJ";
      break;
    case "Rio Grande do Norte":
      siglaEstado = "RN";
      break;
    case "Rio Grande do Sul":
      siglaEstado = "RS";
      break;
    case "Rondônia":
      siglaEstado = "RO";
      break;
    case "Roraima":
      siglaEstado = "RR";
      break;
    case "Santa Catarina":
      siglaEstado = "SC";
      break;
    case "São Paulo":
      siglaEstado = "SP";
      break;
    case "Sergipe":
      siglaEstado = "SE";
      break;
    case "Tocantins":
      siglaEstado = "TO";
      break;
  }

  return siglaEstado;
}
