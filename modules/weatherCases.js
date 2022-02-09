export default function weatherCases(icon, text) {
  if (text.includes("thunder") && text.includes("rain")) {
    icon = "./assets/icons/storm.png";
  } else if (text.includes("thunder")) {
    icon = "./assets/icons/thunder.png";
  } else if (text.includes("rain")) {
    icon = "./assets/icons/raining.png";
  } else if (text.includes("Fog") || text.includes("Mist")) {
    icon = "./assets/icons/cloud.png";
  } else if (text.includes("Cloudy") || text.includes("Overcast")) {
    icon = "./assets/icons/cloudy.png";
  } else if (text.includes("Sunny")) {
    icon = "./assets/icons/sun.png";
  }
  return icon;
}
