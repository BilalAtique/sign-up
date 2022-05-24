import express from "express"
import routes from "./routes"

const app = express()
express.json()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is litening on port ${PORT}`)
    routes(app);
})