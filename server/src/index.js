import express from "express";
import {dbConnect} from "./connect.js";
import routes from "./routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    dbConnect();
    routes(app);
});
