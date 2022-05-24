import createUser from "./createUser.js";

const routes = (app) => {
    app.get('/api/healthcheck', (req, res) => res.json({status: "OK"}))
    app.post('/api/user', createUser)

}

export default routes;