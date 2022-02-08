import logout from "./modules/logout.js";
import password from "./modules/password.js";
import login from "./modules/login.js";
import clock from "./modules/clock.js";
import api from "./modules/api.js";

password();
login();
logout();

setInterval(() => {
  clock();
}, 10);

api();
