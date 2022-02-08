import login from "./modules/login.js"
import clock from "./modules/clock.js"
import api from "./modules/api.js"
login()

setInterval(() => {
    clock()
}, 10);

api()

