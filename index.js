import logout from "./modules/logout.js";
import password from "./modules/password.js";
import login from "./modules/login.js";
import clock from "./modules/clock.js";
import api from "./modules/api.js";

// history.pushState(
//   null,
//   "Login - Compass",
//   "https://bernardobrum.github.io/Projeto_Compass_01/login"
// );

password();
login();
logout();

setInterval(() => {
  clock();
}, 1000);

api();
