import createUser from "./createUser.js";
import validateUser from "./validateUser.js";

const routes = (app) => {
    app.get('/api/healthcheck', (req, res) => res.json({status: "OK"}))
    app.post('/api/user', validateUser, createUser)

}

export default routes;